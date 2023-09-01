


/* ES6 in Node.js */
import UserIcon from "../img/UserIcon";
import FolderIcon from "../img/FolderIcon";
import FolderPlusIcon from "../img/FolderPlusIcon";
import PenToolIcon from "../img/PenToolIcon";
import PieChartComponent from '../userMain/PieChartComponent';
import LineChart from "../userMain/LineChart";
function MainAdmin() {
  

  return (


    <>
      <div className="page-wrapper" >
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6 col-lg-3">
              <div className="card border-end">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div>
                      <div className="d-inline-flex align-items-center">
                        <h2 className=" mb-1 font-weight-medium change-color">236명</h2>
                      </div>

                      <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">클라이언트 </h6>

                    </div>
                    <div className="ms-auto mt-md-3 mt-lg-0">
                      <span className="opacity-7 text-muted">
                        <UserIcon />

                      </span>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card border-end">
                <div className="card-body">

                  <div className="d-flex align-items-center">
                    <div>
                      <div className="d-inline-flex align-items-center">
                        <h2 className=" mb-1 font-weight-medium change-color">230개</h2>
                      </div>

                      <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">진행중인프로젝트 </h6>

                    </div>
                    <div className="ms-auto mt-md-3 mt-lg-0">
                      <span className="opacity-7 text-muted">
                        <FolderIcon />

                      </span>
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card border-end">
                <div className="card-body">

                  <div className="d-flex align-items-center">
                    <div>
                      <div className="d-inline-flex align-items-center">
                        <h2 className=" mb-1 font-weight-medium change-color">4개</h2>
                      </div>

                      <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">신규요청 프로젝트 </h6>

                    </div>
                    <div className="ms-auto mt-md-3 mt-lg-0">
                      <span className="opacity-7 text-muted">
                        <FolderPlusIcon />

                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-sm-6 col-lg-3">
              <div className="card border-end">
                <div className="card-body">

                  <div className="d-flex align-items-center">
                    <div>
                      <div className="d-inline-flex align-items-center">
                        <h2 className=" mb-1 font-weight-medium change-color">200명</h2>
                      </div>

                      <h6 className="text-muted font-weight-normal mb-0 w-100 text-truncate">엔지니어</h6>

                    </div>
                    <div className="ms-auto mt-md-3 mt-lg-0">
                      <span className="opacity-7 text-muted">
                        <PenToolIcon />

                      </span>
                    </div>
                  </div>
                </div>
              </div>


            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">총 프로젝트 현황</h4>
                  <div id="chart-area" className="col-lg-6 col-md-12"/* style={{ width: '466px', height: '350px' }} */>
                    <PieChartComponent />

                  </div>
                </div>
              </div>

            </div>
            <div className="col-lg-6 col-md-12">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">월 별 계약 수 </h4>
                  <div id="chart-area2" className="col-lg-6 col-md-12">
                    <LineChart />
                  </div>
                </div>
              </div>

            </div>

          </div>


          <div className="row" style={{ float: 'none', margin: '0 auto' }}>
            <div className="col-8" style={{ float: 'none', margin: '0 auto' }}>
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center mb-4">
                    <h4 className="card-title">신규요청리스트</h4>
                    <div className="ms-auto">
                      <div className="dropdown sub-dropdown">
                        <button className="btn btn-link text-muted dropdown-toggle" type="button"
                          id="dd1" data-bs-toggle="dropdown" aria-haspopup="true"
                          aria-expanded="false">
                          <i data-feather="more-vertical"></i>
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dd1">
                          <a className="dropdown-item" href="#">Insert</a>
                          <a className="dropdown-item" href="#">Update</a>
                          <a className="dropdown-item" href="#">Delete</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="table no-wrap v-middle mb-0">
                      <thead>
                        <tr className="border-0">
                          <th className="border-0 font-14 font-weight-medium text-muted">클라이언트
                          </th>
                          <th className="border-0 font-14 font-weight-medium text-muted px-2">프로젝트명
                          </th>

                          <th className="border-0 font-14 font-weight-medium text-muted text-center">
                            계약시작일
                          </th>

                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border-top-0 px-2 py-4">
                            <div className="d-flex no-block align-items-center">
                              <div className="me-3"><img
                                src="../assets/images/users/widget-table-pic1.jpg"
                                alt="user" className="rounded-circle" width="45"
                                height="45" /></div>
                              <div className="">
                                <h5 className="text-dark mb-0 font-16 font-weight-medium">Hanna
                                  Gover</h5>
                                <span className="text-muted font-14">hgover@gmail.com</span>
                              </div>
                            </div>
                          </td>
                          <td className="border-top-0 text-muted px-2 py-4 font-14">Elite Admin</td>


                          <td
                            className="border-top-0 text-center font-weight-medium text-muted px-2 py-4">
                            23/09/27
                          </td>

                        </tr>
                        <tr>
                          <td className="px-2 py-4">
                            <div className="d-flex no-block align-items-center">
                              <div className="me-3"><img
                                src="../assets/images/users/widget-table-pic2.jpg"
                                alt="user" className="rounded-circle" width="45"
                                height="45" /></div>
                              <div className="">
                                <h5 className="text-dark mb-0 font-16 font-weight-medium">Daniel
                                  Kristeen
                                </h5>
                                <span className="text-muted font-14">Kristeen@gmail.com</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-muted px-2 py-4 font-14">Real Homes WP Theme</td>


                          <td className="text-center text-muted font-weight-medium px-2 py-4">23/09/23</td>

                        </tr>
                        <tr>
                          <td className="px-2 py-4">
                            <div className="d-flex no-block align-items-center">
                              <div className="me-3"><img
                                src="../assets/images/users/widget-table-pic3.jpg"
                                alt="user" className="rounded-circle" width="45"
                                height="45" /></div>
                              <div className="">
                                <h5 className="text-dark mb-0 font-16 font-weight-medium">Julian
                                  Josephs
                                </h5>
                                <span className="text-muted font-14">Josephs@gmail.com</span>
                              </div>
                            </div>
                          </td>
                          <td className="text-muted px-2 py-4 font-14">MedicalPro WP Theme</td>


                          <td className="text-center text-muted font-weight-medium px-2 py-4">23/09/12</td>

                        </tr>
                        <tr>
                          <td className="border-bottom-0 px-2 py-4">
                            <div className="d-flex no-block align-items-center">
                              <div className="me-3"><img
                                src="../assets/images/users/widget-table-pic4.jpg"
                                alt="user" className="rounded-circle" width="45"
                                height="45" /></div>
                              <div className="">
                                <h5 className="text-dark mb-0 font-16 font-weight-medium">Jan
                                  Petrovic
                                </h5>
                                <span className="text-muted font-14">hgover@gmail.com</span>
                              </div>
                            </div>
                          </td>
                          <td className="border-bottom-0 text-muted px-2 py-4 font-14">Hosting Press
                            HTML</td>


                          <td
                            className="border-bottom-0 text-center text-muted font-weight-medium px-2 py-4">
                            23/09/19</td>

                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )

}


export default MainAdmin