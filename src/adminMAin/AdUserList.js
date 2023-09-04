import { Link } from "react-router-dom";
import "../enMain/EnMain.css";
import "../userMain/User.css";
import "../enMain/EnCss.css";

import FormControlIcon from "../img/FormControlIcon";
import { color } from "d3-color";
import UserMyPageModal from "../userMain/UserMyPageModal";

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


          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card1">
                <div className="card-body1">
                  <label>
                    <div className="col-5 align-self-center">
                      <div className="customize-input float-end">
                        <Link className="nav-link" href="javascript:void(0)">
                          <form className="search-engineer">
                            <div >
                              <div className="customize-input right">
                                <input
                                  className="form-control custom-shadow custom-radius border-0 bg-white"
                                  type="search"
                                  placeholder="검색하기"
                                  aria-label="Search"
                                />
                              </div>
                              <div className="customize-input left">
                                <FormControlIcon />
                              </div>
                            </div>
                          </form>
                        </Link>
                      </div>
                    </div>
                  </label>
                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginRight: '65px', marginBottom: '10px' }}>
                    <select style={{ padding: '3px', borderRadius: '5px', color:'#777'}}>
                      <option>계약신청</option>
                      <option>계약중</option>
                      <option>계약만료</option>
                    </select>
                  </div>
                  <div className="table-responsive">
                    <div className="project-table">
                      <table className="adUserTable" style={{width: '1170px'}}>
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
                              <div className="d-flex no-block">
                                <div className="me-3" style={{ width: '80%' }}>
                                  <UserMyPageModal/>
                                  </div>
                              </div>
                            </td>
                            <td>유현주</td>
                            <td>010-1234-5678</td>
                            <td>guswn8013@gmail.com</td>
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
                              <div className="d-flex no-block">
                                <div className="me-3" style={{ width: '80%' }}>주식회사 현IT</div>
                              </div>
                            </td>
                            <td>현쥬쥬</td>
                            <td>010-0987-6543</td>
                            <td>joooo92@gmail.com</td>
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
                            <th scope="row">3</th>
                            <td>
                              <div className="d-flex no-block">
                                <div className="me-3" style={{ width: '80%' }}>naiver(주)</div>
                              </div>
                            </td>
                            <td>나이버</td>
                            <td>010-8765-9876</td>
                            <td>nananan@gmail.com</td>
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
                              <div className="d-flex no-block">
                                <div className="me-3" style={{ width: '80%' }}>gagao(주)</div>
                              </div>
                            </td>
                            <td>가가오</td>
                            <td>010-2345-9876</td>
                            <td>gagao90@gmail.com</td>
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
                            <th scope="row">5</th>
                            <td>
                              <div className="d-flex no-block">
                                <div className="me-3" style={{ width: '80%' }}>gugle(주)</div>
                              </div>
                            </td>
                            <td>구우글</td>
                            <td>010-44567-1234</td>
                            <td>gugle@gmail.com</td>
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
                              <div className="d-flex no-block">
                                <div className="me-3" style={{ width: '80%' }}>twosome(주)</div>
                              </div>
                            </td>
                            <td>투셤</td>
                            <td>010-0987-5678</td>
                            <td>twosome33@gmail.com</td>
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
                              <div className="d-flex no-block">
                                <div className="me-3" style={{ width: '80%' }}>주식회사 벅스</div>
                              </div>
                            </td>
                            <td>스타</td>
                            <td>010-9856-7890</td>
                            <td>star77@gmail.com</td>
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
                              <div className="d-flex no-block">
                                <div className="me-3" style={{ width: '80%' }}>주식회사 크리스탈</div>
                              </div>
                            </td>
                            <td>박수정</td>
                            <td>010-2345-4567</td>
                            <td>sudung@gmail.com</td>
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
                              <div className="d-flex no-block">
                                <div className="me-3" style={{ width: '80%' }}>jii 솔루션(주)</div>
                              </div>
                            </td>
                            <td>이예지</td>
                            <td>010-1234-0987</td>
                            <td>jii94@gmail.com</td>
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
                            <th scope="row">10</th>
                            <td>
                              <div className="d-flex no-block">
                                <div className="me-3" style={{ width: '80%' }}>용승백(주)</div>
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
                  <div style={{ textAlign: 'center' }}>
                    <ul className="pagination list">
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
      </div>
    </>
  );
}

export default AdUserList;
