import { Link } from "react-router-dom";
import "../enMain/EnCss.css";
import "../enMain/InspectionList.css";
import FormControlIcon from "../img/FormControlIcon";
import { useEffect, useState } from "react";
import axios from "axios";
import EnServerDetailModal from "./EnServerDetailModal";
import Loading from '../loding/Loding';

function InspectionList() {

  const [list, setList] = useState([]);

  const [loading, setLoading] = useState(true);


  useEffect(() => {
    axios
      .get("/api/main/engineer/inspectionList")
      .then((res) => {
        setList(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log(list);



  useEffect(()=>{
    axios.get('/api/main/engineer/inspectionList').then((res)=>{
      setList(res.data);
      console.log(res.data);

      setLoading(false);
    })
    .catch((error)=>{
      console.log(error);
    });
  },[]);
console.log(list);

return(
 
  <>
           {loading ? <Loading /> : null}
        <div className="container-fluid">
          <div className="row">
              <div className="col-12">
                  <div className="card">
                      <div className="card-body">
                        <div className="searchBox">
                        <label style={{ display: 'flex;', justifyContent: 'flex-end' }}>
                                  <input type="search" className="form-control form-control-sm" placeholder="검색" aria-controls="zero_config" style={{ width: '200px' }} />
                                  <div className="searchIcon">
                                    <FormControlIcon />
                                  </div>
                          </label>
                        </div>
                          <div className="table-responsive">
                              <table className="insListTable">
                                  <thead>
                                      <tr style={{textAlign: "center", borderBottom: "2px solid #cdcdcd", borderTop: "2px solid #cdcdcd"}}>
                                          <th scope="col">번호</th>
                                          <th scope="col">서버</th>
                                          <th scope="col">점검종류</th>
                                          <th scope="col">프로젝트명</th>
                                          <th scope="col">점검일자</th>
                                          <th scope="col">현재상태</th>
                                      </tr>
                                  </thead>
                                  <tbody className="insListTableTBody">
                                    {list.map((workInfo, index)=>(
                                      <tr key={index}>
                                          <th scope="row">{index+1}</th>
                                          <td>
                                            <EnServerDetailModal 
                                            proName={workInfo.pro_name}
                                            serverName= {workInfo.server_name}
                                            engName={workInfo.eng_name}
                                            serverId={workInfo.server_id}

                                            />
                                          </td>
                                          <td>{workInfo.work_division}</td>
                                          <td>{workInfo.pro_name}</td>

                                          <td>{workInfo.work_date}</td>

                                          {/* <td>

                                            <div className="d-flex no-block align-items-center">
                                              <div className="me-3">
                                                <img
                                                  src="../img/widget-table-pic2.jpg"
                                                  alt="engineer"
                                                  className="rounded-circle insListImg"
                                                  width="45"
                                                  height="45"
                                                />
                                              </div>
                                              <p className="insListP" style={{paddingLeft: "26px", margin: 0}}>{workInfo.eng_name}</p>
                                            </div>
                                          </td> */}
                          <td>{workInfo.work_date}</td>
                          <td>
                            <button
                              type="button"
                              class="btn waves-effect waves-light btn-rounded btn-warning"
                            >
                              점검예정
                            </button>
                          </td>
                        </tr>
                      ))}

                      {/* <tr>
                                        <tr>
                                          <th scope="row">2</th>
                                          <td><Link to="#">ICT대학교 학생관리 시스템</Link></td>
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
                                                />
                                              </div>
                                              <p className="insListP" style={{paddingLeft: "10px"}}>KimJJangSu</p>
                                            </div>
                                          </td>
                                          <td>2023.09.04</td>

                                          <td>
                                          <button
                                            type="button"
                                            class="btn waves-effect waves-light btn-rounded btn-warning">

                                            {workInfo.work_status}
                                          </button>
                                          </td>
                                      </tr>
                                    ))}
                                      
                                      
                                  </tbody>
                              </table>
                          </div>
                          <div style={{textAlign:'center', marginTop: '30px'}}>
                              <ul className="pagination" >
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default InspectionList;
