import { Link } from "react-router-dom";
import "../enMain/EnMain.css";
import "../userMain/User.css";
import "../enMain/EnCss.css";

import FormControlIcon from "../img/FormControlIcon";

function AdProjectList() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-7 align-self-center">
              <h3 className="page-title text-truncate text-dark font-weight-medium mb-1">
                프로젝트 리스트
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
                    <div></div>
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
                            <th scope="col">프로젝트명</th>
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
                            <td>서울대 서버관리</td>
                            <td>서울대</td>
                            <td>장지인</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-success"
                              >
                                계약중
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">2</th>
                            <td>중앙학원 신촌 서버관리</td>

                            <td>중앙학원(주)</td>
                            <td>백승용</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-secondary"
                              >
                                계약신청
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>중앙 서울 서버관리</td>
                            <td>중앙 서울(주)</td>
                            <td>장지인</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-success"
                              >
                                계약중
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>롯데월드 서버관리</td>
                            <td>롯데월드(주)</td>
                            <td>백승용</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-secondary"
                              >
                                계약신청
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>서울대 지방캠퍼스 서버관리</td>
                            <td>서울대 지방캠퍼스(주)</td>
                            <td>장지인</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-success"
                              >
                                계약중
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>클라우드OJ 서버관리</td>
                            <td>클라우드 OJ(주)</td>
                            <td>백승용</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-secondary"
                              >
                                계약신청
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">7</th>
                            <td>아마존 서버관리</td>
                            <td>아마존(주)</td>
                            <td>장지인</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-success"
                              >
                                계약중
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">8</th>
                            <td>파이썬 서버관리</td>
                            <td>플라스크(주)</td>
                            <td>백승용</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-secondary"
                              >
                                계약신청
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">9</th>
                            <td>홈고잉 홈</td>
                            <td>우리집(주)</td>
                            <td>장지인</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-success"
                              >
                                계약중
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">10</th>
                            <td>데이터서버관리</td>
                            <td>오릴리(주)</td>
                            <td>백승용</td>
                            <td>010-3024-0343</td>
                            <td>baeksy97@gmail.com</td>
                            <td>
                              <button
                                type="button"
                                class="btn waves-effect waves-light btn-secondary"
                              >
                                계약신청
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

export default AdProjectList;
