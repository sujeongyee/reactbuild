/* ES6 in Node.js */
import UserIcon from "../img/UserIcon";
import FolderIcon from "../img/FolderIcon";
import FolderPlusIcon from "../img/FolderPlusIcon";
import PenToolIcon from "../img/PenToolIcon";
import PieChartComponent from "../userMain/PieChartComponent";
import LineChart from "../userMain/LineChart";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function MainAdmin() {
  const [newProjectList, setNewProjectList] = useState([]);

  useEffect(() => {
    axios.get("/api/main/admin").then((response) => {
      console.log(response.data);
      setNewProjectList(response.data);
      console.log(newProjectList);
    });
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="card border-end cardpd">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="d-inline-flex ">
                        <h2 className=" mb-1 font-weight-medium change-color">
                          236명
                        </h2>
                      </div>

                      <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">
                        클라이언트{" "}
                      </h6>
                    </div>
                    <div className="ms-auto mt-md-3 mt-lg-0">
                      a
                      <span className="opacity-7 text-muted">
                        <UserIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card border-end cardpd">
                <div className="card-body">
                  <div className="d-flex ">
                    <div>
                      <div className="d-inline-flex ">
                        <h2 className=" mb-1 font-weight-medium change-color">
                          230개
                        </h2>
                      </div>

                      <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">
                        진행중인프로젝트{" "}
                      </h6>
                    </div>
                    <div className="ms-auto mt-md-3 mt-lg-0">
                      <span className="opacity-7 text-muted">
                        <FolderIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card border-end cardpd">
                <div className="card-body">
                  <div className="d-flex ">
                    <div>
                      <div className="d-inline-flex ">
                        <h2 className=" mb-1 font-weight-medium change-color">
                          4개
                        </h2>
                      </div>

                      <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">
                        신규요청 프로젝트{" "}
                      </h6>
                    </div>
                    <div className="ms-auto mt-md-3 mt-lg-0">
                      <span className="opacity-7 text-muted">
                        <FolderPlusIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card border-end cardpd">
                <div className="card-body">
                  <div className="d-flex ">
                    <div>
                      <div className="d-inline-flex ">
                        <h2 className=" mb-1 font-weight-medium change-color">
                          200명
                        </h2>
                      </div>

                      <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">
                        엔지니어
                      </h6>
                    </div>
                    <div className="ms-auto mt-md-3 mt-lg-0">
                      <span className="opacity-7 text-muted">
                        <PenToolIcon />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row adminchart">
            <div className="col-lg-6 col-md-12">
              <div className="card cardpd">
                <div className="card-body">
                  <h4 className="card-title">총 프로젝트 현황</h4>
                  <div
                    id="chart-area"
                    className="col-lg-6 col-md-12" /* style={{ width: '466px', height: '350px' }} */
                  >
                    <PieChartComponent />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card cardpd">
                <div className="card-body">
                  <h4 className="card-title">월 별 계약 수 </h4>
                  <div id="chart-area2" className="col-lg-6 col-md-12">
                    <LineChart />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            className="row listsize"
            style={{ float: "none", margin: "0 auto" }}
          >
            <div className="col-6" style={{ float: "none", margin: "0 auto" }}>
              <div className="card cardpd">
                <div className="card-body">
                  <div className=" listclient mb-4">
                    <h4 className="card-title">신규요청리스트</h4>
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
                  <div className="table-responsive">
                    <table className="table v-middle mb-0 tablesize">
                      <thead>
                        <tr className="border-0">
                          <th className="border-0 font-14 font-weight-medium text-muted">
                            회사명
                          </th>
                          <th className="border-0 font-14 font-weight-medium text-muted">
                            클라이언트
                          </th>
                          <th className="border-0 font-14 font-weight-medium text-muted px-2">
                            프로젝트명
                          </th>
                          <th className="border-0 font-14 font-weight-medium text-muted text-center">
                            계약시작일
                          </th>
                          <th className="border-0 font-14 font-weight-medium text-muted text-center">
                            계약상태
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {newProjectList.map((clientInfo, index) => (
                          
                          <tr key={clientInfo.pro_id}>
                            <td className="border-top-0 text-center font-weight-medium text-muted px-2 py-4">
                              {clientInfo.cus_company_name}
                            </td>
                            <td className="border-top-0 px-2 py-4">
                              <div className="d-flex no-block ">
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    {clientInfo.cus_managet_name}
                                  </h5>
                                  <span className="text-muted font-14">
                                    {clientInfo.cus_email}
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="border-top-0 text-muted px-2 py-4 font-14 projectname">
                              <span>
                                <Link
                                  to={{
                                    pathname: `/admin/projectDetail/${clientInfo.pro_id}`,
                                  }}
                                >
                                  {clientInfo.pro_name}
                                </Link>
                              </span>{" "}
                            </td>

                            <td className="border-top-0 text-center font-weight-medium text-muted px-2 py-4">
                              {clientInfo.pro_startDate}
                            </td>
                            <td className="border-top-0 text-center font-weight-medium text-muted px-2 py-4">
                              {clientInfo.pro_status}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
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

export default MainAdmin;
