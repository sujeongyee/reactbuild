


/* ES6 in Node.js */
import UserIcon from "../img/UserIcon";
import FolderIcon from "../img/FolderIcon";
import FolderPlusIcon from "../img/FolderPlusIcon";
import PenToolIcon from "../img/PenToolIcon";
import PieChartComponent from './PieChartComponent';
import LineChart from "./LineChart";
import MoreVerticalIcon from "../img/MoreVerticalIcon";
function User() {
    // const pieChartData = [
    //     { name: 'facebook', data: 200000 },
    //     { name: 'insta', data: 15000000 },
    //     { name: 'twitter', data: 10000000 },
    //     { name: 'telegram', data: 4000000 },
    //   ];
    // // const data=[
    //     {
    //       "id": "temp.",
    //       "ranges": [
    //         34,
    //         37,
    //         46,
    //         0,
    //         100
    //       ],
    //       "measures": [
    //         78
    //       ],
    //       "markers": [
    //         87
    //       ]
    //     },
    //     {
    //       "id": "power",
    //       "ranges": [
    //         0.48035245507398494,
    //         0.42016366724601084,
    //         1.1666708309389993,
    //         0,
    //         2
    //       ],
    //       "measures": [
    //         0.22365479550191675,
    //         1.6956324780455652
    //       ],
    //       "markers": [
    //         1.7750464680807774
    //       ]
    //     },
    //     {
    //       "id": "volume",
    //       "ranges": [
    //         14,
    //         0,
    //         25,
    //         10,
    //         3,
    //         16,
    //         0,
    //         40
    //       ],
    //       "measures": [
    //         12
    //       ],
    //       "markers": [
    //         26
    //       ]
    //     },
    //     {
    //       "id": "cost",
    //       "ranges": [
    //         458007,
    //         7028,
    //         485403,
    //         0,
    //         500000
    //       ],
    //       "measures": [
    //         303286,
    //         340261
    //       ],
    //       "markers": [
    //         490173
    //       ]
    //     },
    //     {
    //       "id": "revenue",
    //       "ranges": [
    //         5,
    //         2,
    //         6,
    //         0,
    //         11
    //       ],
    //       "measures": [
    //         8
    //       ],
    //       "markers": [
    //         9.230197149116378,
    //         8.370326815164743
    //       ]
    //     }
    //   ]

    // const data = [
    //     { name: "facebook", value: 200000 },
    //     { name: 'insta', value: 15000000 },
    //     { name: "twiter", value: 10000000 },
    //     { name: 'telegram', value: 4000000 }
    // ]

    return (


        <>
            {/* <div style={{height:'500px',width:'600px'}}>
        <Graph1 data={data}/>
        </div> */}
            <div class="page-wrapper" >
                {/* <ResponsiveContainer style={{height:'500px',width:'600px'}} >
                <PieChart>
                    <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />

                </PieChart>
            </ResponsiveContainer> */}

                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-6 col-lg-3">
                            <div class="card border-end">
                                <div class="card-body">

                                    <div class="d-flex align-items-center">
                                        <div>
                                            <div class="d-inline-flex align-items-center">
                                                <h2 class=" mb-1 font-weight-medium change-color">236명</h2>
                                            </div>

                                            <h6 class="text-muted font-weight-normal mb-0 w-100 text-truncate">클라이언트 </h6>

                                        </div>
                                        <div class="ms-auto mt-md-3 mt-lg-0">
                                            <span class="opacity-7 text-muted">
                                                <UserIcon />

                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                        <div class="col-sm-6 col-lg-3">
                            <div class="card border-end">
                                <div class="card-body">

                                    <div class="d-flex align-items-center">
                                        <div>
                                            <div class="d-inline-flex align-items-center">
                                                <h2 class=" mb-1 font-weight-medium change-color">230개</h2>
                                            </div>

                                            <h6 class="text-muted font-weight-normal mb-0 w-100 text-truncate">진행중인프로젝트 </h6>

                                        </div>
                                        <div class="ms-auto mt-md-3 mt-lg-0">
                                            <span class="opacity-7 text-muted">
                                                <FolderIcon />

                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="card border-end">
                                <div class="card-body">

                                    <div class="d-flex align-items-center">
                                        <div>
                                            <div class="d-inline-flex align-items-center">
                                                <h2 class=" mb-1 font-weight-medium change-color">4개</h2>
                                            </div>

                                            <h6 class="text-muted font-weight-normal mb-0 w-100 text-truncate">신규요청 프로젝트 </h6>

                                        </div>
                                        <div class="ms-auto mt-md-3 mt-lg-0">
                                            <span class="opacity-7 text-muted">
                                                <FolderPlusIcon />

                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-sm-6 col-lg-3">
                            <div class="card border-end">
                                <div class="card-body">

                                    <div class="d-flex align-items-center">
                                        <div>
                                            <div class="d-inline-flex align-items-center">
                                                <h2 class=" mb-1 font-weight-medium change-color">200명</h2>
                                            </div>

                                            <h6 class="text-muted font-weight-normal mb-0 w-100 text-truncate">엔지니어</h6>

                                        </div>
                                        <div class="ms-auto mt-md-3 mt-lg-0">
                                            <span class="opacity-7 text-muted">
                                                <PenToolIcon />

                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div class="row">
                        <div class="col-lg-6 col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">총 프로젝트 현황</h4>
                                    <div id="chart-area" class="col-lg-6 col-md-12"/* style={{ width: '466px', height: '350px' }} */>
                                        <PieChartComponent />

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="col-lg-6 col-md-12">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">월 별 계약 수 </h4>
                                    <div id="chart-area2" class="col-lg-6 col-md-12">
                                        <LineChart />
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>


                <div class="row" style={{ float: 'none', margin: '0 auto' }}>
                    <div class="col-8" style={{ float: 'none', margin: '0 auto' }}>
                    <div class="card">
                          <div class="card-body">
                              <div class="d-flex align-items-center mb-4">
                                  <h4 class="card-title">신규요청리스트</h4>
                                  <div class="ms-auto">
                                      <div class="dropdown sub-dropdown">
                                          <button class="btn btn-link text-muted dropdown-toggle" type="button"
                                              id="dd1" data-bs-toggle="dropdown" aria-haspopup="true"
                                              aria-expanded="false">
                                              <i data-feather="more-vertical"></i>
                                          </button>
                                          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dd1">
                                              <a class="dropdown-item" href="#">Insert</a>
                                              <a class="dropdown-item" href="#">Update</a>
                                              <a class="dropdown-item" href="#">Delete</a>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="table-responsive">
                                  <table class="table no-wrap v-middle mb-0">
                                      <thead>
                                          <tr class="border-0">
                                              <th class="border-0 font-14 font-weight-medium text-muted">클라이언트
                                              </th>
                                              <th class="border-0 font-14 font-weight-medium text-muted px-2">프로젝트명
                                              </th>
                                              
                                              <th class="border-0 font-14 font-weight-medium text-muted text-center">
                                                  계약시작일
                                              </th>
                                              
                                          </tr>
                                      </thead>
                                      <tbody>
                                          <tr>
                                              <td class="border-top-0 px-2 py-4">
                                                  <div class="d-flex no-block align-items-center">
                                                      <div class="me-3"><img
                                                              src="../assets/images/users/widget-table-pic1.jpg"
                                                              alt="user" class="rounded-circle" width="45"
                                                              height="45" /></div>
                                                      <div class="">
                                                          <h5 class="text-dark mb-0 font-16 font-weight-medium">Hanna
                                                              Gover</h5>
                                                          <span class="text-muted font-14">hgover@gmail.com</span>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td class="border-top-0 text-muted px-2 py-4 font-14">Elite Admin</td>

                                              
                                              <td
                                                  class="border-top-0 text-center font-weight-medium text-muted px-2 py-4">
                                                  23/09/27
                                              </td>
                                              
                                          </tr>
                                          <tr>
                                              <td class="px-2 py-4">
                                                  <div class="d-flex no-block align-items-center">
                                                      <div class="me-3"><img
                                                              src="../assets/images/users/widget-table-pic2.jpg"
                                                              alt="user" class="rounded-circle" width="45"
                                                              height="45" /></div>
                                                      <div class="">
                                                          <h5 class="text-dark mb-0 font-16 font-weight-medium">Daniel
                                                              Kristeen
                                                          </h5>
                                                          <span class="text-muted font-14">Kristeen@gmail.com</span>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td class="text-muted px-2 py-4 font-14">Real Homes WP Theme</td>
                                              
                                              
                                              <td class="text-center text-muted font-weight-medium px-2 py-4">23/09/23</td>
                                              
                                          </tr>
                                          <tr>
                                              <td class="px-2 py-4">
                                                  <div class="d-flex no-block align-items-center">
                                                      <div class="me-3"><img
                                                              src="../assets/images/users/widget-table-pic3.jpg"
                                                              alt="user" class="rounded-circle" width="45"
                                                              height="45" /></div>
                                                      <div class="">
                                                          <h5 class="text-dark mb-0 font-16 font-weight-medium">Julian
                                                              Josephs
                                                          </h5>
                                                          <span class="text-muted font-14">Josephs@gmail.com</span>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td class="text-muted px-2 py-4 font-14">MedicalPro WP Theme</td>
                                              
                                              
                                              <td class="text-center text-muted font-weight-medium px-2 py-4">23/09/12</td>
                                              
                                          </tr>
                                          <tr>
                                              <td class="border-bottom-0 px-2 py-4">
                                                  <div class="d-flex no-block align-items-center">
                                                      <div class="me-3"><img
                                                              src="../assets/images/users/widget-table-pic4.jpg"
                                                              alt="user" class="rounded-circle" width="45"
                                                              height="45" /></div>
                                                      <div class="">
                                                          <h5 class="text-dark mb-0 font-16 font-weight-medium">Jan
                                                              Petrovic
                                                          </h5>
                                                          <span class="text-muted font-14">hgover@gmail.com</span>
                                                      </div>
                                                  </div>
                                              </td>
                                              <td class="border-bottom-0 text-muted px-2 py-4 font-14">Hosting Press
                                                  HTML</td>
                                              
                                             
                                              <td
                                                  class="border-bottom-0 text-center text-muted font-weight-medium px-2 py-4">
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


export default User