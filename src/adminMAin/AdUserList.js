import { Link } from "react-router-dom";
import "../enMain/EnMain.css";
import "../userMain/User.css";
import "../enMain/EnCss.css";

import FormControlIcon from "../img/FormControlIcon";
import { color } from "d3-color";
import UserMyPageModal from "../userMain/UserMyPageModal";
import { useEffect, useState } from "react";
import axios from "axios";
import AdUserMyPageModal from "./AdUserMyPageModal";

function AdUserList() {

  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get('/api/main/admin/customerList').then((res) => {
      setList(res.data);
      console.log(res.data);
    })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(list);


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
                          {list.map((customer, index) => (
                          <tr>
                            <th scope="row">{index+1}</th>
                            <td>
                              <div className="d-flex no-block">
                                <div className="me-3" style={{ width: '80%' }}>
                                  <AdUserMyPageModal 
                                  cusCompantName={customer.cus_company_name}/>
                                  </div>
                              </div>
                            </td>
                            <td>{customer.cus_managet_name}</td>
                            <td>{customer.cus_phone_number}</td>
                            <td>{customer.cus_email}</td>
                            <td>
                              <button type="button" class="button-success">
                                contract
                              </button>
                            </td>
                          </tr>
                          ))}
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
