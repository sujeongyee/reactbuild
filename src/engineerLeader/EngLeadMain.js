import { Link } from "react-router-dom";

import FolderPlusIcon from "../img/FolderPlusIcon";
import FolderIcon from "../img/FolderIcon";
import UsersIcon from "../img/UserIcon";

import ChartComponent1 from "../userMain/ChartComponent1";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";
import EnglChartComponent from "./EnglChartComponent";

function EngLeadMain(props) {
  const [vo, setVo] = useState([]);
  //const [ivedinspectionList,setIvedinspectionList] = useState([]);
  const [list, setList] = useState([]);
  const [periodic, setPeriodic] = useState([]);
  const [disability, setDisability] = useState([]);
  const [maintenance, setMaintenance] = useState([]);
  const [id, setId] = useState("");
  useEffect(() => {
    const leaderId = "eng_1";
    setId("eng_1");
    axios.get(`/api/main/engleader/main/${leaderId}`).then((response) => {
      const data2 = response.data;
      // console.log(data2);
      const receivedvo = data2.vo;
      const receivedlist = data2.list;
      const receivedperiodic = data2.periodic;
      const receiveddisability = data2.disability;
      const receivedmaintenance = data2.maintenance;
      setVo(receivedvo);
      //setIvedinspectionList(receivedinspectionList);
      setList(receivedlist);
      setPeriodic(receivedperiodic);
      setDisability(receiveddisability);
      setMaintenance(receivedmaintenance);
    });
  }, []);

  const data = {
    labels: ["신규계약", "계약종료"],
    datasets: [
      {
        data: [vo.thisMonthStart, vo.thisMonthEnd],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  ChartJS.register(ArcElement, Tooltip, Legend);

  return (
    <>
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row l-main-pa">
            <div className="col-sm-6 col-lg-3 engl-card">
              <div className="card border-end cardpd ">
                <div className="card-body ">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="d-inline-flex ">
                        <h2 className=" mb-1 font-weight-medium change-color-engl">
                          {vo.teamCount}명
                        </h2>
                      </div>

                      <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">
                        팀원수{" "}
                      </h6>
                    </div>
                    <div className="ms-auto mt-md-3 mt-lg-0 ">
                      <span className="opacity-7 text-muted">
                        <UsersIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3 engl-card">
              <div className="card border-end cardpd">
                <div className="card-body">
                  <div className="d-flex ">
                    <div>
                      <div className="d-inline-flex ">
                        <h2 className=" mb-1 font-weight-medium change-color-engl">
                          {vo.projectCount}개
                        </h2>
                      </div>

                      <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">
                        진행중인프로젝트{" "}
                      </h6>
                    </div>
                    <div className="ms-auto mt-md-3 mt-lg-0 engl-main-icon">
                      <span className="opacity-7 text-muted">
                        <FolderIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 engl-card">
              <div className="card border-end cardpd">
                <div className="card-body">
                  <div className="d-flex ">
                    <div>
                      <div className="d-inline-flex ">
                        <h2 className=" mb-1 font-weight-medium change-color-engl">
                          {vo.serverCount}개
                        </h2>
                      </div>

                      <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">
                        관리중인 서버수
                      </h6>
                    </div>
                    <div className="ms-auto mt-md-3 mt-lg-0 engl-main-icon">
                      <span className="opacity-7 text-muted">
                        <FolderPlusIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row row-here">
            <div className="listsize reqsize" style={{ margin: "0 10px" }}>
              <div
                className="col-lg-3 engl-main-car"
                style={{
                  float: "none",
                  margin: "0 10px",
                  display: "inline-block",
                  width: "600px",
                }}
              >
                <div className="card cardpd engl-mian-car">
                  <div className="card-body engl-cardBody">
                    <div className=" listclient mb-4">
                      <h4
                        className="card-title"
                        style={{ display: "inline-block" }}
                      >
                        새로 배정된 프로젝트 리스트
                      </h4>
                      <span
                        style={{
                          marginLeft: "13px",
                          color: "rgb(129 132 135)",
                        }}
                      >
                        (빠르게 엔지니어 배정 해주세요)
                      </span>
                      <div className="ms-auto">
                        <div className="dropdown sub-dropdown">
                          <button
                            className="btn btn-link text-muted dropdown-toggle"
                            type="button"
                            id="dd1"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i data-feather="more-vertical"></i>
                          </button>
                          <div
                            className="dropdown-menu dropdown-menu-right"
                            aria-labelledby="dd1"
                          >
                            <a className="dropdown-item" href="#">
                              Insert
                            </a>
                            <a className="dropdown-item" href="#">
                              Update
                            </a>
                            <a className="dropdown-item" href="#">
                              Delete
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="">
                      <table className="table v-middle mb-0 tablesize">
                        <thead>
                          <tr className="border-0">
                            <th className="border-0 font-14 font-weight-medium text-muted">
                              클라이언트
                            </th>
                            <th className="border-0 font-14 font-weight-medium text-muted px-2">
                              프로젝트명
                            </th>

                            <th
                              className="border-0 font-14 font-weight-medium text-muted "
                              style={{ paddingLeft: "10px" }}
                            >
                              계약시작일
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {list.map((data, index) => (
                            <tr key={index}>
                              <td className="">
                                <div className="">
                                  <div className="">{data.pro_rep}</div>
                                </div>
                              </td>
                              <td className="" style={{ padding: "6px" }}>
                                <Link
                                  className="engl-main-a"
                                  to={{
                                    pathname: `/engineerleader/requestDetail/${data.pro_id}`,
                                    state: {
                                      id: id,
                                    },
                                  }}
                                >
                                  {data.pro_name}
                                </Link>
                              </td>

                              <td className="">{data.pro_startDate}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="card cardpd " style={{ width: "380px" }}>
              <h4
                className="card-title engl-condition"
                style={{
                  display: "inline-block",
                  padding: "20px",
                  paddingBottom: "0",
                  fontSize: "16px",
                }}
              >
                이달의 팀 계약 현황
              </h4>
              <div
                className="engl-main-chart card-body engl-cardBody"
                style={{ width: "100%" }}
              >
                <Doughnut data={data} />
              </div>
            </div>
          </div>

          <div id="totalChart">
            <div
              class="row"
              style={{ marginTop: "0px", float: "none", margin: "0 auto" }}
            >
              <div
                class="col-lg-10 col-md-12"
                style={{ float: "none", margin: "0px auto" }}
              >
                <div class="card cardpd">
                  <div class="card-body">
                    <h4 class="card-title">월별 점검상황</h4>

                    <div
                      id="chart-area"
                      style={{ width: "100%" }}
                      class="col-lg-6 col-md-12"
                    >
                      <EnglChartComponent
                        periodic={periodic}
                        disability={disability}
                        maintenance={maintenance}
                      />
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

export default EngLeadMain;
