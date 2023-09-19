import { Link } from "react-router-dom";
import "../enMain/EnMain.css";
import "../userMain/User.css";
import "../enMain/EnCss.css";

import FormControlIcon from "../img/FormControlIcon";
import axios from "axios";
import React, { useEffect, useState } from "react";

function EnL_newProject() {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("/api/main/engineer/newList")
      .then((response) => {
        setData(response.data);

        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <>
      <div className="page-wrapper">
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-7 align-self-center">
              <h3 className="page-title text-truncate text-dark font-weight-medium mb-1">
                엔지니어(프로젝트 리스트)
              </h3>
            </div>
            <div className="col-5 align-self-center"></div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card1">
                <div className="customize-input float-end search-btn">
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
                            <th scope="col">계약일자</th>
                            <th scope="col">계약 상태</th>
                          </tr>
                        </thead>

                        <tbody>
                          {data.map((project, index) => (
                            <tr key={project.pro_id}>
                              <td>{index + 1}</td>
                              <td>
                                <Link
                                  to={{
                                    pathname: `/engineer/newProjectDetail/${project.pro_id}`,
                                  }}
                                  state={{ project }}

                                  // state={{
                                  //   cus_company_name: project.cus_company_name,
                                  //   cus_boss: project.cus_boss,
                                  //   cus_company_ph: project.cus_company_ph,
                                  //   cus_business_id: project.cus_business_id,
                                  //   cus_address1: project.cus_address1,
                                  //   cus_address2: project.cus_address2,
                                  //   pro_startDate: project.pro_startDate,
                                  //   pro_endDate: project.pro_endDate,
                                  //   pro_rep: project.pro_rep,
                                  //   cus_phone_number: project.cus_phone_number,
                                  //   cus_email: project.cus_email,
                                  //}}
                                >
                                  {project.pro_name}
                                </Link>{" "}
                                {project.new ? (
                                  <span className="new_b">new</span>
                                ) : null}
                              </td>
                              <td>{project.cus_company_name}</td>
                              <td>{project.cus_managet_name}</td>
                              <td>{project.cus_phone_number}</td>
                              <td>{project.pro_startDate}</td>
                              <td>
                                <button className="btn btn-success">
                                  {project.pro_status}
                                </button>
                              </td>
                            </tr>
                          ))}
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

export default EnL_newProject;