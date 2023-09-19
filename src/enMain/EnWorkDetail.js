import React, { useRef } from 'react';

function FileUpload() {
  const fileInputRef = useRef(null);

  const handleFileInputClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    // 이제 selectedFiles 배열에 선택한 파일들이 들어 있습니다.
  };

  return (

    <>
             {/* {loading ? <Loading /> : null} */}
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
                  <form onSubmit={logSubmit}>
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
                                  onChange={(e) =>
                                    setCurrentDate(e.target.value)
                                  }
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
                              onChange={(e) => {
                                setWorkDetail({
                                  ...workDetail,
                                  work_time: e.target.value,
                                });
                              }}
                              placeholder="점검 시간 기입 유효성설정 필요해보임 시간형식으로"
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
                            <th scope="col">CPU 사용량</th>
                            <th scope="col">RAM 사용량</th>
                            <th scope="col">서버 HDD 사용량</th>
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
                                    placeholder=""
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
                                </td>
                                <td>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="work_status"
                                      value="유"
                                      checked={
                                        statusInputValues[index] === "유"
                                      }
                                      onChange={(e) =>
                                        handleInputChange(e, index, "status")
                                      }
                                    />
                                    유
                                  </label>
                                  <label>
                                    <input
                                      type="checkbox"
                                      name="work_status"
                                      value="무"
                                      checked={
                                        statusInputValues[index] === "무"
                                      }
                                      onChange={(e) =>
                                        handleInputChange(e, index, "status")
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
                                  {/* <input
                                    className="form-control"
                                    name="work_estimate"
                                    type="file"
                                    style={{ transform: "translateY(5px)" }}
                                  /> */}
                                  <FileUpload name="work_estimate" />
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                      <div className="form-actions">
                        <div className="text-end button-wrap">
                          <button type="submit" className="button-writer right">
                            수정하기
                          </button>
                          <button type="submit" className="button-writer left">
                            <Link to={"/engineer/inspectionList"}>
                              작성하기
                            </Link>
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default FileUpload;
