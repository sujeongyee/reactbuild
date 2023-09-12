import { Link } from "react-router-dom";
import FormControlIcon from "../img/FormControlIcon";
import EnEngineerMyPage from "../enMain/EnEngineerMyPageModal";
import { useEffect, useState } from "react";
import axios from "axios";
// import "../enMain/EnMain.css";
// import "../userMain/User.css";
// import "./EnMain.css";
// import EnEngineerMyPage from "./EnEngineerMyPageModal";

function AnEngineerList() {

  const [list, setList] = useState([]);

  useEffect(()=>{
    axios.get('/api/admin/engineerList').then((res) => {
      setList(res.data);
      console.log(res.data);
    })
    .catch((error)=>{
      console.log(error);
    })
  },[])
  console.log(list);



  return (
    <>
      <div className="page-wrapper">
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-7 align-self-center">
              <h3 className="page-title text-truncate text-dark font-weight-medium mb-1">
                엔지니어 리스트
              </h3>
            </div>

          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card1">
                <div className="card-body1">
                  <label style={{ display: 'flex' }}>
                    <input type="search" className="form-control form-control-sm" placeholder="검색" aria-controls="zero_config" style={{ width: '200px' }} />
                    <button style={{ marginLeft: '5px' }}>
                      <FormControlIcon />
                    </button>
                  </label>
                  <div className="table-responsive">
                    <div className="project-table">
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">NO</th>
                            <th scope="col" style={{paddingLeft:'80px'}}>이름</th>
                            <th scope="col">직급</th>
                            <th scope="col">소속</th>
                            <th scope="col">이메일</th>
                            <th scope="col">전화번호</th>
                          </tr>
                        </thead>
                        <tbody>
                          {list.map((engineer, index)=>
                          
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>
                              <div className="d-flex no-block align-items-center">
                                <div className="me-3 style={{withd: '20px'}} ">
                                  <img
                                    src="../img/widget-table-pic1.jpg"
                                    alt="user"
                                    className="rounded-circle"
                                    width="40"
                                    height="40"
                                  />
                                </div>
                                <div className="me-4">
                                  <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                    <EnEngineerMyPage/>
                                  </h5>
                                </div>
                              </div>
                            </td>
                            <td>{engineer.eng_rank}</td>
                            <td>{engineer.team_id}</td>
                            <td>{engineer.eng_email}</td>
                            <td>{engineer.eng_phone}</td>
                            <td className="border-top-0 px-2 py-4;"></td>
                          </tr>
                          )}
                          {/* <div>
                            <tr>
                              <th scope="row">2</th>
                              <td>
                                <div className="d-flex no-block align-items-center">
                                  <div className="me-3 style={{withd: '20px'}}">
                                    <img
                                      src="../img/widget-table-pic1.jpg"
                                      alt="user"
                                      className="rounded-circle"
                                      width="40"
                                      height="40"
                                    />
                                  </div>
                                  <div className="me-4">
                                    <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                      White RaiseDragon
                                    </h5>
                                  </div>
                                </div>
                              </td>
                              <td>대리</td>
                              <td>기술지원 2팀</td>
                              <td>baeksy97@gmail.com</td>
                              <td>010-2350-9845</td>
                              <td className="border-top-0 px-2 py-4;"></td>
                            </tr>

                            <tr>
                              <th scope="row">3</th>
                              <td>
                                <div className="d-flex no-block align-items-center">
                                  <div className="me-3 style={{withd: '20px'}}">
                                    <img
                                      src="../img/widget-table-pic1.jpg"
                                      alt="user"
                                      className="rounded-circle"
                                      width="40"
                                      height="40"
                                    />
                                  </div>
                                  <div className="me-4">
                                    <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                      White RaiseDragon
                                    </h5>
                                  </div>
                                </div>
                              </td>
                              <td>대리</td>
                              <td>기술지원 2팀</td>
                              <td>baeksy97@gmail.com</td>
                              <td>010-2350-9845</td>
                              <td className="border-top-0 px-2 py-4;"></td>
                            </tr>
                            <tr>
                              <th scope="row">4</th>
                              <td>
                                <div className="d-flex no-block align-items-center">
                                  <div className="me-3 style={{withd: '20px'}}">
                                    <img
                                      src="../img/widget-table-pic1.jpg"
                                      alt="user"
                                      className="rounded-circle"
                                      width="40"
                                      height="40"
                                    />
                                  </div>
                                  <div className="me-4">
                                    <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                      BBark SuJung
                                    </h5>
                                  </div>
                                </div>
                              </td>
                              <td>팀장</td>
                              <td>기술지원 1팀</td>
                              <td>baeksy97@gmail.com</td>
                              <td>010-2350-9845</td>
                              <td className="border-top-0 px-2 py-4;"></td>
                            </tr>
                            <tr>
                              <th scope="row">5</th>
                              <td>
                                <div className="d-flex no-block align-items-center">
                                  <div className="me-3 style={{withd: '20px'}}">
                                    <img
                                      src="../img/widget-table-pic1.jpg"
                                      alt="user"
                                      className="rounded-circle"
                                      width="40"
                                      height="40"
                                    />
                                  </div>
                                  <div className="me-4">
                                    <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                      White RaiseDragon
                                    </h5>
                                  </div>
                                </div>
                              </td>
                              <td>대리</td>
                              <td>기술지원 1팀</td>
                              <td>baeksy97@gmail.com</td>
                              <td>010-2350-9845</td>
                              <td className="border-top-0 px-2 py-4;"></td>
                            </tr>
                            <tr>
                              <th scope="row">6</th>
                              <td>
                                <div className="d-flex no-block align-items-center">
                                  <div className="me-3 style={{withd: '20px'}}">
                                    <img
                                      src="../img/widget-table-pic1.jpg"
                                      alt="user"
                                      className="rounded-circle"
                                      width="40"
                                      height="40"
                                    />
                                  </div>
                                  <div className="me-4">
                                    <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                      White RaiseDragon
                                    </h5>
                                  </div>
                                </div>
                              </td>
                              <td>대리</td>
                              <td>기술지원 3팀</td>
                              <td>baeksy97@gmail.com</td>
                              <td>010-2350-9845</td>
                              <td className="border-top-0 px-2 py-4;"></td>
                            </tr>
                            <tr>
                              <th scope="row">7</th>
                              <td>
                                <div className="d-flex no-block align-items-center">
                                  <div className="me-3 style={{withd: '20px'}}">
                                    <img
                                      src="../img/widget-table-pic1.jpg"
                                      alt="user"
                                      className="rounded-circle"
                                      width="40"
                                      height="40"
                                    />
                                  </div>
                                  <div className="me-4">
                                    <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                      White RaiseDragon
                                    </h5>
                                  </div>
                                </div>
                              </td>
                              <td>대리</td>
                              <td>기술지원 3팀</td>
                              <td>baeksy97@gmail.com</td>
                              <td>010-2350-9845</td>
                              <td className="border-top-0 px-2 py-4;"></td>
                            </tr>
                            <tr>
                              <th scope="row">8</th>
                              <td>
                                <div className="d-flex no-block align-items-center">
                                  <div className="me-3 style={{withd: '20px'}}">
                                    <img
                                      src="../img/widget-table-pic1.jpg"
                                      alt="user"
                                      className="rounded-circle"
                                      width="40"
                                      height="40"
                                    />
                                  </div>
                                  <div className="me-4">
                                    <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                      White RaiseDragon
                                    </h5>
                                  </div>
                                </div>
                              </td>
                              <td>대리</td>
                              <td>기술지원 3팀</td>
                              <td>baeksy97@gmail.com</td>
                              <td>010-2350-9845</td>
                              <td className="border-top-0 px-2 py-4;"></td>
                            </tr>
                            <tr>
                              <th scope="row">9</th>
                              <td>
                                <div className="d-flex no-block align-items-center">
                                  <div className="me-3 style={{withd: '20px'}}">
                                    <img
                                      src="../img/widget-table-pic1.jpg"
                                      alt="user"
                                      className="rounded-circle"
                                      width="40"
                                      height="40"
                                    />
                                  </div>
                                  <div className="me-4">
                                    <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                      White RaiseDragon
                                    </h5>
                                  </div>
                                </div>
                              </td>
                              <td>대리</td>
                              <td>기술지원 1팀</td>
                              <td>baeksy97@gmail.com</td>
                              <td>010-2350-9845</td>
                              <td className="border-top-0 px-2 py-4;"></td>
                            </tr>
                            <tr>
                              <th scope="row">10</th>
                              <td>
                                <div className="d-flex no-block align-items-center">
                                  <div className="me-3 style={{withd: '20px'}}">
                                    <img
                                      src="../img/widget-table-pic1.jpg"
                                      alt="user"
                                      className="rounded-circle"
                                      width="40"
                                      height="40"
                                    />
                                  </div>
                                  <div className="me-4">
                                    <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                      White RaiseDragon
                                    </h5>
                                  </div>
                                </div>
                              </td>
                              <td>대리</td>
                              <td>기술지원 1팀</td>
                              <td>baeksy97@gmail.com</td>
                              <td>010-2350-9845</td>
                              <td className="border-top-0 px-2 py-4;"></td>
                            </tr>
                          </div> */}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <ul className="pagination paginationEn" >
                      <li className="page-item disabled">
                        <Link className="page-link" href="#" tabindex="-1">
                          Prev
                        </Link>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" style={{ color: '#5f76e8' }}>
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" href="#" style={{ color: '#5f76e8' }}>
                          2
                        </Link>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" style={{ color: '#5f76e8' }}>
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" href="#" style={{ color: '#5f76e8' }}>
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

export default AnEngineerList;
