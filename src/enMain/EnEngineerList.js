import { Link } from "react-router-dom";
import "../enMain/EnMain.css";
import "../userMain/User.css";
import EnEngineerMyPage from "./EnEngineerMyPageModal";

function EnEngineerList() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-7 align-self-center">
              <h3 className="page-title text-truncate text-dark font-weight-medium mb-1">
                CLOUD OJ
              </h3>
              <div className="d-flex align-items-center">
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb m-0 p-0">
                    <li className="breadcrumb-item">
                      <a href="index.html">엔지니어리스트</a>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
            <div className="col-5 align-self-center">
              <div className="customize-input float-end">
                <select className="custom-select custom-select-set form-control bg-white border-0 custom-shadow custom-radius">
                  <option selected>Aug 23</option>
                  <option value="1">July 23</option>
                  <option value="2">Jun 23</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <li className="nav-item d-none d-md-block">
                    <Link className="nav-link" href="javascript:void(0)">
                      <form>
                        <div className="customize-input">
                          <input
                            className="form-control custom-shadow custom-radius border-0 bg-white"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                          />
                          <i
                            className="form-control-icon"
                            data-feather="search"
                          ></i>
                        </div>
                      </form>
                    </Link>
                  </li>
                  <div className="table-responsive">
                    <div className="project-table">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">NO</th>
                            <th scope="col">이름</th>
                            <th scope="col">직급</th>
                            <th scope="col">소속</th>
                            <th scope="col">입사일</th>
                            <th scope="col">이메일</th>
                            <th scope="col">전화번호</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">
                                  <img
                                    src="../img/widget-table-pic1.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="45"
                                    height="45"
                                  />
                                </div>
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    <EnEngineerMyPage />
                                  </h5>
                                </div>
                              </div>
                            </td>
                            <td>팀장</td>
                            <td>기술지원 2팀</td>
                            <td>2020.08.01</td>
                            <td>baeksy97@gmail.com</td>
                            <td>010-2350-9845</td>
                            <td className="border-top-0 px-2 py-4;"></td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">
                                  <img
                                    src="../img/widget-table-pic1.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="45"
                                    height="45"
                                  />
                                </div>
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    White RaiseDragon
                                  </h5>
                                </div>
                              </div>
                            </td>
                            <td>대리</td>
                            <td>기술지원 2팀</td>
                            <td>2020.08.01</td>
                            <td>baeksy97@gmail.com</td>
                            <td>010-2350-9845</td>
                            <td className="border-top-0 px-2 py-4;"></td>
                          </tr>

                          <tr>
                            <th scope="row">3</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">
                                  <img
                                    src="../img/widget-table-pic1.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="45"
                                    height="45"
                                  />
                                </div>
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    White RaiseDragon
                                  </h5>
                                </div>
                              </div>
                            </td>
                            <td>대리</td>
                            <td>기술지원 2팀</td>
                            <td>2020.08.01</td>
                            <td>baeksy97@gmail.com</td>
                            <td>010-2350-9845</td>
                            <td className="border-top-0 px-2 py-4;"></td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">
                                  <img
                                    src="../img/widget-table-pic1.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="45"
                                    height="45"
                                  />
                                </div>
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    BBark SuJung
                                  </h5>
                                </div>
                              </div>
                            </td>
                            <td>팀장</td>
                            <td>기술지원 1팀</td>
                            <td>2020.08.01</td>
                            <td>baeksy97@gmail.com</td>
                            <td>010-2350-9845</td>
                            <td className="border-top-0 px-2 py-4;"></td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">
                                  <img
                                    src="../img/widget-table-pic1.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="45"
                                    height="45"
                                  />
                                </div>
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    White RaiseDragon
                                  </h5>
                                </div>
                              </div>
                            </td>
                            <td>대리</td>
                            <td>기술지원 1팀</td>
                            <td>2020.08.01</td>
                            <td>baeksy97@gmail.com</td>
                            <td>010-2350-9845</td>
                            <td className="border-top-0 px-2 py-4;"></td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">
                                  <img
                                    src="../img/widget-table-pic1.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="45"
                                    height="45"
                                  />
                                </div>
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    White RaiseDragon
                                  </h5>
                                </div>
                              </div>
                            </td>
                            <td>대리</td>
                            <td>기술지원 3팀</td>
                            <td>2020.08.01</td>
                            <td>baeksy97@gmail.com</td>
                            <td>010-2350-9845</td>
                            <td className="border-top-0 px-2 py-4;"></td>
                          </tr>
                          <tr>
                            <th scope="row">7</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">
                                  <img
                                    src="../img/widget-table-pic1.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="45"
                                    height="45"
                                  />
                                </div>
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    White RaiseDragon
                                  </h5>
                                </div>
                              </div>
                            </td>
                            <td>대리</td>
                            <td>기술지원 3팀</td>
                            <td>2020.08.01</td>
                            <td>baeksy97@gmail.com</td>
                            <td>010-2350-9845</td>
                            <td className="border-top-0 px-2 py-4;"></td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">
                                  <img
                                    src="../img/widget-table-pic1.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="45"
                                    height="45"
                                  />
                                </div>
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    White RaiseDragon
                                  </h5>
                                </div>
                              </div>
                            </td>
                            <td>대리</td>
                            <td>기술지원 3팀</td>
                            <td>2020.08.01</td>
                            <td>baeksy97@gmail.com</td>
                            <td>010-2350-9845</td>
                            <td className="border-top-0 px-2 py-4;"></td>
                          </tr>
                          <tr>
                            <th scope="row">9</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">
                                  <img
                                    src="../img/widget-table-pic1.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="45"
                                    height="45"
                                  />
                                </div>
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    White RaiseDragon
                                  </h5>
                                </div>
                              </div>
                            </td>
                            <td>대리</td>
                            <td>기술지원 1팀</td>
                            <td>2020.08.01</td>
                            <td>baeksy97@gmail.com</td>
                            <td>010-2350-9845</td>
                            <td className="border-top-0 px-2 py-4;"></td>
                          </tr>
                          <tr>
                            <th scope="row">10</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">
                                  <img
                                    src="../img/widget-table-pic1.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="45"
                                    height="45"
                                  />
                                </div>
                                <div className="">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    White RaiseDragon
                                  </h5>
                                </div>
                              </div>
                            </td>
                            <td>대리</td>
                            <td>기술지원 1팀</td>
                            <td>2020.08.01</td>
                            <td>baeksy97@gmail.com</td>
                            <td>010-2350-9845</td>
                            <td className="border-top-0 px-2 py-4;"></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <ul className="pagination float-end list">
                    <li className="page-item disabled">
                      <Link className="page-link" href="#" tabindex="-1">
                        Prev
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" href="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        2 <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        Next
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnEngineerList;
