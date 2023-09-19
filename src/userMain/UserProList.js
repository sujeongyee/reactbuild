import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function UserProList({ state }) {
  const [loading, setLoading] = useState(true);
  const [proList, setProList] = useState([]);

  //console.log(state);
  console.log(state.cus_id);

  useEffect(() => {
    axios
      .get(`/api/main/user/list/${state.cus_id}`)
      .then((response) => {
        setProList(response.data);
        console.log(response.data);
        console.log("state: ", state);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [state.cus_id]);
  //console.log(proList);

  return (
    <>
      <div className="page-wrapper">
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-7 align-self-center">
              <h3>프로젝트 목록</h3>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-6">
              <div className="card">
                <div className="card-body">
                  <label style={{ display: "flex;" }}>
                    <span
                      style={{
                        transform: "translateY(5px)",
                        paddingRight: "10px",
                        width: "40px",
                      }}
                    >
                      Search:
                    </span>
                    <input
                      type="search"
                      className="form-control form-control-sm"
                      placeholder
                      aria-controls="zero_config"
                      style={{ width: "200px" }}
                    />
                    <input
                      type="button"
                      value={"검색하기"}
                      className="inqurylist-search"
                    />
                  </label>
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">NO</th>
                          <th scope="col">프로젝트이름</th>
                          <th scope="col">계약상태</th>
                          <th scope="col">계약시작</th>
                          <th scope="col">정기점검날짜</th>
                        </tr>
                      </thead>
                      <tbody>
                        {proList.map((project, index) => (
                          <tr key={project.pro_id}>
                            <th scope="row">{index}</th>
                            <td class="user-proname">
                              <Link
                                to={{
                                  pathname: `/user/prodetail/${project.pro_id}`,
                                }}
                              >
                                {project.pro_name}
                              </Link>
                            </td>
                            <td>{project.pro_status}</td>
                            <td>{project.pro_startdate}</td>
                            <td>{project.pro_pi}</td>
                          </tr>
                        ))}

                        {/* <tr>
                          <th scope="row">2</th>
                          <td class="user-proname"><Link to="/user/prodetail">CyberGuardian</Link> </td>
                          <td>계약중</td>
                          <td>2023.09.01</td>
                          <td>23일</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td class="user-proname"><Link to="/user/prodetail"> QuantumSynergy</Link></td>
                          <td>계약중</td>
                          <td>2023.08.13</td>
                          <td>12일</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td class="user-proname"><Link to="/user/prodetail">DataPulse</Link></td>
                          <td>계약중</td>
                          <td>2023.08.09</td>
                          <td>1일</td>
                        </tr>
                        <tr>
                          <th scope="row">5</th>
                          <td class="user-proname"><Link to="/user/prodetail">InnovateTech</Link></td>
                          <td>계약만료</td>
                          <td>2022.08.11</td>
                          <td>30일</td>
                        </tr> */}
                      </tbody>
                    </table>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <Link className="page-link" href="#" tabindex="-1">
                          Prev
                        </Link>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" href="#">
                          2 <span className="sr-only">(current)</span>
                        </Link>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#">
                          3
                        </a>
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

export default UserProList;
