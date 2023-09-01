import { Link } from "react-router-dom";
import "../enMain/EnMain.css";
import "../userMain/User.css";
import "../enMain/EnCss.css";

import FormControlIcon from "../img/FormControlIcon";

function AdUserList() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-7 align-self-center">
              <h3 className="page-title text-truncate text-dark font-weight-medium mb-1">
                회원 리스트
              </h3>
            </div>
            <div className="col-5 align-self-center">
              <div className="customize-input float-end">
                <Link className="nav-link" href="javascript:void(0)">
                  <form className="search-engineer">
                    <div className="customize-input right">
                      <input
                        className="form-control custom-shadow custom-radius border-0 bg-white"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                      />
                    </div>
                    <div className="customize-input left">
                      <FormControlIcon />
                    </div>
                    <div>
                      <select>
                        <option>계약신청</option>
                        <option>계약중</option>
                        <option>계약만료</option>
                      </select>
                    </div>
                  </form>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card1">
                <div className="card-body1">
                  <div className="table-responsive">
                    <div className="project-table">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">NO</th>
                            <th scope="col">회사명</th>
                            <th scope="col">담당자</th>
                            <th scope="col">연락처</th>
                            <th scope="col">이메일</th>
                            <th scope="col">계약 상태</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">인지장(주)</div>
                                <div className=""></div>
                              </div>
                            </td>
                            <td>장지인</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-success"
                              >
                                contract
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">용승백(주)</div>
                                <div className=""></div>
                              </div>
                            </td>
                            <td>백승용</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-secondary"
                              >
                                expiration
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">인지장(주)</div>
                                <div className=""></div>
                              </div>
                            </td>
                            <td>장지인</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-success"
                              >
                                contract
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">용승백(주)</div>
                                <div className=""></div>
                              </div>
                            </td>
                            <td>백승용</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-secondary"
                              >
                                expiration
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">인지장(주)</div>
                                <div className=""></div>
                              </div>
                            </td>
                            <td>장지인</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-success"
                              >
                                contract
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">용승백(주)</div>
                                <div className=""></div>
                              </div>
                            </td>
                            <td>백승용</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-secondary"
                              >
                                expiration
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">7</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">인지장(주)</div>
                                <div className=""></div>
                              </div>
                            </td>
                            <td>장지인</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-success"
                              >
                                contract
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">용승백(주)</div>
                                <div className=""></div>
                              </div>
                            </td>
                            <td>백승용</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-secondary"
                              >
                                expiration
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">9</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">인지장(주)</div>
                                <div className=""></div>
                              </div>
                            </td>
                            <td>장지인</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-success"
                              >
                                contract
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">10</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3">용승백(주)</div>
                                <div className=""></div>
                              </div>
                            </td>
                            <td>백승용</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-secondary"
                              >
                                expiration
                              </button>
                            </td>
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

export default AdUserList;
