import React, { useEffect, useState } from "react";
import "../enMain/EnMain.css";
import "../userMain/User.css";
import "../enMain/EnCss.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EnWorkDetail({ checkPermission }) {
  const eng_enid = checkPermission.sub;
  //스프링으로부터 데이터 받아오기(엔지니어 아이디별 프로젝트)
  useEffect(() => {
    axios.get(`http://13.124.230.133:8888/api/main/engineer/workDetail/${eng_enid}`).then((response) => {
      setProjectData(response.data);
      console.log(response.data);
    });
  }, []);

  //작업일자 현재 날짜 설정하는 함수
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, "0");
    const day = today.getDate().toString().padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    setCurrentDate(formattedDate);
  }, []);

  //프로젝트 선택시 해당 프로젝트에 속한 서버만 불러오기
  const [projectData, setProjectData] = useState({
    eSPIWlist: [],
    serverList: [],
  });
  const [filteredServer, setFilteredServer] = useState([]);


  const changeProjectSelect = (selectedProject) => {
    const filteredServer = projectData.serverList.filter(
      (server) => server.pro_id === selectedProject && server.eng_enid === eng_enid
    );
    setFilteredServer(filteredServer);
  };

  // 작업상세내역서 공통부분 등록폼 전달
  const [workDetail, setWorkDetail] = useState({
    eng_name: "",
    work_note: "",
    work_estimate: "",
  });

  //각 서버별 작업상세내역서 배열로 등록
  const [cpuInputValues, setCpuInputValues] = useState([]);
  const [ramInputValues, setRamInputValues] = useState([]);
  const [hddInputValues, setHddInputValues] = useState([]);
  const [statusInputValues, setStatusInputValues] = useState([]);
  const [selectedCheckTypes, setSelectedCheckTypes] = useState({});

  const handleInputChange = (e, index, field) => {
    let newValue = e.target.value;
    // cpu, ram, hdd 사용량 기재 2자리까지만 입력 가능하도록 설정
    newValue = newValue.replace(/[^0-9]/g, "");
    newValue = newValue.slice(0,2);
    

    switch (field) {
      case "cpu":
        setCpuInputValues((prevInputValues) => {
          const updatedInputValues = [...prevInputValues];
          updatedInputValues[index] = newValue;
          return updatedInputValues;
        });
        break;
      case "ram":
        setRamInputValues((prevInputValues) => {
          const updatedInputValues = [...prevInputValues];
          updatedInputValues[index] = newValue;
          return updatedInputValues;
        });
        break;
      case "hdd":
        setHddInputValues((prevInputValues) => {
          const updatedInputValues = [...prevInputValues];
          updatedInputValues[index] = newValue;
          return updatedInputValues;
        });
        break;
      
      default:
        break;
    }
  };
  //이상유무 체크박스
  const handleInputChange2 = (e, index) => {
    const newValue = e.target.value;
    setStatusInputValues((prevInputValues) => {
      const updatedInputValues = [...prevInputValues];
      updatedInputValues[index] = newValue;
      return updatedInputValues;
    });
  }

  const isTimeValid = (time) => {
    // 정규 표현식을 사용하여 시간 형식을 검사합니다.
    const timeRegex = /^([01]?[0-9]|2[0-3]):[0-5][0-9]$/;
    return timeRegex.test(time);
  };

  const handleTimeInputChange = (e) => {
    const newValue = e.target.value;
    if (isTimeValid(newValue)) {
      setWorkDetail({
        ...workDetail,
        work_time: newValue,
      });
    }
  };

  //filter를 통해서 정기점검, 긴급점검만 배열로 만드는 거 추가했음
  const workInfoVO = filteredServer
    .filter(
      (server, index) =>
        cpuInputValues[index] !== "" &&
        ramInputValues[index] !== "" &&
        hddInputValues[index] !== "" &&
        statusInputValues[index] !== "" &&
        (selectedCheckTypes[server.server_id] === "정기점검" ||
          selectedCheckTypes[server.server_id] === "장애대응" ||
          selectedCheckTypes[server.server_id] === "긴급점검")
    )
    .map((server, index) => ({
      eng_enid: checkPermission.sub,
      pro_id: server.pro_id,
      server_id: server.server_id,
      work_date: currentDate,
      work_division: selectedCheckTypes[server.server_id] || "",
      work_time: workDetail.work_time || "",
      work_cpu: cpuInputValues[index] || "",
      work_ram: ramInputValues[index] || "",
      work_hdd: hddInputValues[index] || "",
      work_status: statusInputValues[index] || "",
      work_note: workDetail.work_note || "",
      work_estimate: workDetail.work_estimate[index] || null,
    }));

  //점검 radio 버튼 기능
  const handleCheckTypeChange = (serverId, checkType) => {
    setSelectedCheckTypes((prevSelectedCheckTypes) => ({
      ...prevSelectedCheckTypes,
      [serverId]: checkType,
    }));
  };

  const [fileList, setFileList] = useState([]);

  const addFile = (e) => {
    setFileList([...fileList, ""]);
    e.preventDefault();
  };

  const removeFile = (index) => {
    const newFiles = [...fileList];
    newFiles.splice(index, 1);
    setFileList(newFiles);
  };

  const history = useNavigate();

  const [file, setFile] = useState([]);
  const selectFile = (e) => {
    setFile([...file, e.target.files[0]]);
  };
  const submit = async () => {
    try {
      console.log(file);
      const formData = new FormData();
      file.forEach((selectedFile, index) => {
        formData.append("file_data", selectedFile);
      });
      formData.append("userId", eng_enid);

      formData.forEach((value, key) => {
        console.log(key + " " + value);
      });
      if(file.length !== 0) {
      //작업내역
      await axios.post("http://13.124.230.133:8888/api/main/engineer/workDetail", workInfoVO); 

      //작업내역서 첨부파일
      const response = await axios.post(
        "/api/main/cloudMultiUpload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data", // 파일 업로드 시 필요한 헤더 설정
          },
          data: formData,
        }
      ) 
      if (response.data === file.length) {
        alert("작성 완료 했습니다.");
        history("/engineer/inspectionList");
      } else {
        alert("잘못된 접근 입니다.");
      }
    
      } else {
        await axios.post("http://13.124.230.133:8888/api/main/engineer/workDetail", workInfoVO);
        alert("작성 완료 했습니다.");
        history("/engineer/inspectionList");
      }

    } catch (error) {
      console.error("파일 업로드 및 작업 상세 내역 제출 오류:", error);
    }
  };

  return (
    <>
      <div className="page-wrapper">
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h4
                    className="card-title title-name"
                    style={{ fontWeight: "bold", color: "rgb(78, 89, 104)" }}
                  >
                    작업 상세 내역
                  </h4>
                  <div className="form-body">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3 input-title">
                          <div>프로젝트명</div>
                        </div>
                      </div>
                      <div className="col-md-4 ">
                        <div className="form-group mb-3">
                          <select
                            className="project-select"
                            name=""
                            id=""
                            onChange={(e) =>
                              changeProjectSelect(e.target.value)
                            }
                          >
                            <option value="">프로젝트 선택</option>
                            {projectData.eSPIWlist &&
                              projectData.eSPIWlist.map((project, index) => (
                                <option key={index} value={project.pro_id}>
                                  {project.pro_name}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2" style={{ marginTop: "0px" }}>
                        <div className="form-group mb-3 input-title">
                          <div
                            style={{
                              paddingTop: "9px",
                            }}
                          >
                            담당자명
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <input
                            type="hidden"
                            name="eng_enid"
                            value={
                              projectData.eSPIWlist[0] &&
                              projectData.eSPIWlist[0].eng_enid
                                ? projectData.eSPIWlist[0].eng_enid
                                : ""
                            }
                          />
                          <input
                            type="text"
                            className="form-control"
                            name="eng_name"
                            value={setWorkDetail.eng_name}
                            placeholder="담당자명"
                          ></input>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3 input-title">
                          <div
                            style={{
                              paddingTop: "9px",
                            }}
                          >
                            작업일자
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-group mb-3">
                          <div>
                            <div className="form-group">
                              <input
                                type="date"
                                className="form-control"
                                name="work_date"
                                value={currentDate}
                                onChange={(e) => setCurrentDate(e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3 input-title">
                          <div>점검 시간</div>
                        </div>
                      </div>

                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            name="work_time"
                            value={setWorkDetail.work_time}
                            onChange={handleTimeInputChange}
                            placeholder="점검 시간 기입 (예: hh:mm)"
                          />
                          {/* <input type="time"></input> */}
                        </div>
                      </div>
                    </div>

                    <table className="tableWD">
                      <thead>
                        <tr>
                          <th scope="col">NO</th>
                          <th scope="col">서버명</th>
                          <th scope="col">CPU 사용량(%)</th>
                          <th scope="col">RAM 사용량(%)</th>
                          <th scope="col">HDD/SSD 사용량(%)</th>
                          <th scope="col">작업 분류</th>
                          <th scope="col">이상 유무</th>
                        </tr>
                      </thead>

                      <tbody>
                        {filteredServer &&
                          filteredServer.map((server, index) => (
                            <tr key={server.server_id} name="server_id">
                              <input
                                type="hidden"
                                name="server_id"
                                value={server.server_id}
                              ></input>
                              <td>{index + 1}</td>
                              <td>{server.server_name}</td>
                              <td className="usage">
                                <input
                                  type="text"
                                  name="work_cpu"
                                  value={cpuInputValues[index] || ""}
                                  onChange={(e) =>
                                    handleInputChange(e, index, "cpu")
                                  }
                                  placeholder="제한걸기"
                                ></input>
                              </td>
                              <td className="usage">
                                <input
                                  type="text"
                                  name="work_ram"
                                  value={ramInputValues[index] || ""}
                                  onChange={(e) =>
                                    handleInputChange(e, index, "ram")
                                  }
                                  placeholder="사용량 기입"
                                ></input>
                              </td>
                              <td className="usage">
                                <input
                                  type="text"
                                  name="work_hdd"
                                  value={hddInputValues[index] || ""}
                                  onChange={(e) =>
                                    handleInputChange(e, index, "hdd")
                                  }
                                  placeholder="사용량 기입"
                                ></input>
                              </td>
                              <td>
                                <label>
                                  <input
                                    type="radio"
                                    name={`work_division-${server.server_id}`}
                                    checked={
                                      selectedCheckTypes[server.server_id] ===
                                      "정기점검"
                                    } // 정기점검
                                    onChange={() =>
                                      handleCheckTypeChange(
                                        server.server_id,
                                        "정기점검"
                                      )
                                    }
                                  />
                                  정기점검
                                </label>
                                <label>
                                  <input
                                    type="radio"
                                    name={`work_division-${server.server_id}`}
                                    checked={
                                      selectedCheckTypes[server.server_id] ===
                                      "긴급점검"
                                    } // 긴급점검
                                    onChange={() =>
                                      handleCheckTypeChange(
                                        server.server_id,
                                        "긴급점검"
                                      )
                                    }
                                  />
                                  긴급점검
                                </label>
                                <label>
                                  <input
                                    type="radio"
                                    name={`work_division-${server.server_id}`}
                                    checked={
                                      selectedCheckTypes[server.server_id] ===
                                      "장애대응"
                                    } // 장애대응
                                    onChange={() =>
                                      handleCheckTypeChange(
                                        server.server_id,
                                        "장애대응"
                                      )
                                    }
                                  />
                                  장애대응
                                </label>
                              </td>
                              <td>
                                <label>
                                  <input
                                    type="checkbox"
                                    name="work_status"
                                    value="유"
                                    checked={statusInputValues[index] === "유"}
                                    onChange={(e) =>
                                      handleInputChange2(e, index)
                                    }
                                  />
                                  유
                                </label>
                                <label>
                                  <input
                                    type="checkbox"
                                    name="work_status"
                                    value="무"
                                    checked={statusInputValues[index] === "무"}
                                    onChange={(e) =>
                                      handleInputChange2(e, index)
                                    }
                                  />
                                  무
                                </label>
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>

                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3 input-title">
                          <div>비고</div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <textarea
                            className="form-control"
                            name="work_note"
                            placeholder="목록에 포함되지않은 기타 작업, 상황 기록"
                            value={setWorkDetail.work_note}
                            onChange={(e) => {
                              setWorkDetail({
                                ...workDetail,
                                work_note: e.target.value,
                              });
                            }}
                            style={{ height: "200px", resize: "none" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3 input-title">
                          <div
                            style={{
                              transform: "translateY(12px)",
                            }}
                          >
                            첨부파일
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <form className="mt-4">
                            <div className="input-group flex-nowrap">
                              <div className="custom-file w-100 file-upload">
                                <div>
                                  <div className="file_list">
                                    {fileList.map((file, index) => (
                                      <div key={index} className="file_input">
                                        <label>
                                          <input
                                            type="file"
                                            name="file_data"
                                            className="file-data"
                                            onChange={selectFile}
                                          />
                                        </label>
                                        <button
                                          type="button"
                                          onClick={() => removeFile(index)}
                                          className="btns del_btn"
                                        >
                                          <span>삭제</span>
                                        </button>
                                      </div>
                                    ))}
                                  </div>
                                  <button type="button" onClick={addFile}>
                                    파일 추가
                                  </button>
                                </div>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="form-actions">
                      <div className="text-end button-wrap">
                        <button
                          type="submit"
                          className="button-writer left"
                          onClick={submit}
                        >
                          작성하기
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnWorkDetail;