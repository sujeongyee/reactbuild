import { Link } from "react-router-dom";
import "../enMain/EnCss.css";
import "../enMain/InspectionList.css";
import FormControlIcon from "../img/FormControlIcon";
import { useState } from "react";

function EndInsList() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <div className="searchBox">
                  <label
                    style={{ display: "flex;", justifyContent: "flex-end" }}
                  >
                    <input
                      type="search"
                      className="form-control form-control-sm"
                      placeholder="검색"
                      aria-controls="zero_config"
                      style={{ width: "200px" }}
                    />
                    <div className="searchIcon">
                      <FormControlIcon />
                    </div>
                  </label>
                </div>
                <div className="table-responsive">
                  <table className="insListTable">
                    <thead className="endInstTableTHead">
                      <tr
                        style={{
                          textAlign: "center",
                          borderBottom: "2px solid #cdcdcd",
                          borderTop: "2px solid #cdcdcd",
                        }}
                      >
                        <th scope="col">번호</th>
                        <th scope="col">서버</th>
                        <th scope="col">점검종류</th>
                        <th scope="col">담당엔지니어</th>
                        <th scope="col">점검일자</th>
                        <th scope="col">점검완료일자</th>
                      </tr>
                    </thead>
                    <tbody className="insListTableTBody endInstTableTBody">
                      <tr>
                        <th scope="row">1</th>
                        <td>
                          <Link to="#">서울대학교 수강신청 시스템</Link>
                        </td>
                        <td>정기점검</td>
                        <td>
                          <div className="d-flex no-block align-items-center">
                            <div className="me-3">
                              <img
                                src="../img/widget-table-pic2.jpg"
                                alt="engineer"
                                className="rounded-circle insListImg"
                                width="45"
                                height="45"
                                style={{ filter: "grayscale(100%)" }}
                              />
                            </div>
                            <p
                              className="insListP"
                              style={{ paddingLeft: "10px" }}
                            >
                              KimJJangSu
                            </p>
                          </div>
                        </td>
                        <td>2023.05.06</td>
                        <td>2023.05.07</td>
                      </tr>
                      <tr>
                        <th scope="row">2</th>
                        <td>
                          <Link to="#">ICT대학교 학생관리 시스템</Link>
                        </td>
                        <td>정기점검</td>
                        <td>
                          <div className="d-flex no-block align-items-center">
                            <div className="me-3">
                              <img
                                src="../img/widget-table-pic2.jpg"
                                alt="engineer"
                                className="rounded-circle insListImg"
                                width="45"
                                height="45"
                                style={{ filter: "grayscale(100%)" }}
                              />
                            </div>
                            <p
                              className="insListP"
                              style={{ paddingLeft: "10px" }}
                            >
                              KimJJangSu
                            </p>
                          </div>
                        </td>
                        <td>2023.05.04</td>
                        <td>2023.05.05</td>
                      </tr>
                      <tr>
                        <th scope="row">3</th>
                        <td>
                          <Link to="#">중앙정보처리기술학원 강사관리</Link>
                        </td>
                        <td>정기점검</td>
                        <td>
                          <div className="d-flex no-block align-items-center">
                            <div className="me-3">
                              <img
                                src="../img/widget-table-pic2.jpg"
                                alt="user"
                                className="rounded-circle insListImg"
                                width="45"
                                height="45"
                                style={{ filter: "grayscale(100%)" }}
                              />
                            </div>
                            <p
                              className="insListP"
                              style={{ paddingLeft: "10px" }}
                            >
                              KimJJangSu
                            </p>
                          </div>
                        </td>
                        <td>2023.06.28</td>
                        <td>2023.07.01</td>
                      </tr>
                      <tr>
                        <th scope="row">4</th>
                        <td>
                          <Link to="#">인하대학교 수강신청 시스템</Link>
                        </td>
                        <td>정기점검</td>
                        <td>
                          <div className="d-flex no-block align-items-center">
                            <div className="me-3">
                              <img
                                src="../img/widget-table-pic2.jpg"
                                alt="user"
                                className="rounded-circle insListImg"
                                width="45"
                                height="45"
                                style={{ filter: "grayscale(100%)" }}
                              />
                            </div>
                            <p
                              className="insListP"
                              style={{ paddingLeft: "10px" }}
                            >
                              KimJJangSu
                            </p>
                          </div>
                        </td>
                        <td>2023.07.10</td>
                        <td>2023.07.14</td>
                      </tr>
                      <tr>
                        <th scope="row">5</th>
                        <td>
                          <Link to="#">서경대학교 수강신청 시스템</Link>
                        </td>
                        <td>긴급점검</td>
                        <td>
                          <div className="d-flex no-block align-items-center">
                            <div className="me-3">
                              <img
                                src="../img/widget-table-pic2.jpg"
                                alt="user"
                                className="rounded-circle insListImg"
                                width="45"
                                height="45"
                                style={{ filter: "grayscale(100%)" }}
                              />
                            </div>
                            <p
                              className="insListP"
                              style={{ paddingLeft: "10px" }}
                            >
                              KimJJangSu
                            </p>
                          </div>
                        </td>
                        <td>2023.07.30</td>
                        <td>2023.07.31</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div style={{ textAlign: "center", marginTop: "30px" }}>
                  <ul className="pagination">
                    <li className="page-item disabled">
                      <a className="page-link" href="#" tabindex="-1">
                        Prev
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        1
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        2 <span className="sr-only">(current)</span>
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        3
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        4
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        5
                      </a>
                    </li>
                    <li className="page-item">
                      <a className="page-link" href="#">
                        Next
                      </a>
                    </li>
                  </ul>
                </div>
                <p className="insListP" style={{ paddingLeft: "10px" }}>
                  KimJJangSu
                </p>
              </div>

              <td>2023.05.06</td>
              <td>2023.05.07</td>

              <tr>
                <th scope="row">2</th>
                <td>
                  <Link to="#">ICT대학교 학생관리 시스템</Link>
                </td>
                <td>정기점검</td>
                <td>
                  <div className="d-flex no-block align-items-center">
                    <div className="me-3">
                      <img
                        src="../img/widget-table-pic2.jpg"
                        alt="engineer"
                        className="rounded-circle insListImg"
                        width="45"
                        height="45"
                        style={{ filter: "grayscale(100%)" }}
                      />
                    </div>
                    <p className="insListP" style={{ paddingLeft: "10px" }}>
                      KimJJangSu
                    </p>
                  </div>
                </td>
                <td>2023.05.04</td>
                <td>2023.05.05</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>
                  <Link to="#">중앙정보처리기술학원 강사관리</Link>
                </td>
                <td>정기점검</td>
                <td>
                  <div className="d-flex no-block align-items-center">
                    <div className="me-3">
                      <img
                        src="../img/widget-table-pic2.jpg"
                        alt="user"
                        className="rounded-circle insListImg"
                        width="45"
                        height="45"
                        style={{ filter: "grayscale(100%)" }}
                      />
                    </div>
                    <p className="insListP" style={{ paddingLeft: "10px" }}>
                      KimJJangSu
                    </p>
                  </div>
                </td>
                <td>2023.06.28</td>
                <td>2023.07.01</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>
                  <Link to="#">인하대학교 수강신청 시스템</Link>
                </td>
                <td>정기점검</td>
                <td>
                  <div className="d-flex no-block align-items-center">
                    <div className="me-3">
                      <img
                        src="../img/widget-table-pic2.jpg"
                        alt="user"
                        className="rounded-circle insListImg"
                        width="45"
                        height="45"
                        style={{ filter: "grayscale(100%)" }}
                      />
                    </div>
                    <p className="insListP" style={{ paddingLeft: "10px" }}>
                      KimJJangSu
                    </p>
                  </div>
                </td>
                <td>2023.07.10</td>
                <td>2023.07.14</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>
                  <Link to="#">서경대학교 수강신청 시스템</Link>
                </td>
                <td>긴급점검</td>
                <td>
                  <div className="d-flex no-block align-items-center">
                    <div className="me-3">
                      <img
                        src="../img/widget-table-pic2.jpg"
                        alt="user"
                        className="rounded-circle insListImg"
                        width="45"
                        height="45"
                        style={{ filter: "grayscale(100%)" }}
                      />
                    </div>
                    <p className="insListP" style={{ paddingLeft: "10px" }}>
                      KimJJangSu
                    </p>
                  </div>
                </td>
                <td>2023.07.30</td>
                <td>2023.07.31</td>
              </tr>
            </div>
            <div style={{ textAlign: "center", marginTop: "30px" }}>
              <ul className="pagination">
                <li className="page-item disabled">
                  <a className="page-link" href="#" tabindex="-1">
                    Prev
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2 <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    4
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    5
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EndInsList;