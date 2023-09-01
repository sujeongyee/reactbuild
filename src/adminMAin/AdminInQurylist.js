import { Link } from "react-router-dom";
// import "../enMain/EnMain.css";
// import "./User.css";
function AdminInQurylist() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-7 align-self-center">
              <h4 className="page-title text-truncate text-dark font-weight-medium mb-1">
                문의사항 목록
              </h4>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">NO</th>
                          <th scope="col">제목</th>
                          <th scope="col">작성자</th>
                          <th scope="col">등록일</th>
                          <th scope="col">답변여부</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>
                            <Link to="/user">프로젝트 등록 문의 드립니다.</Link>
                          </td>
                          <td>jiin0917</td>
                          <td>2023.08.27</td>
                          <td>X</td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>
                            <Link>점검 관련 문의 드립니다.</Link>
                          </td>
                          <td>jiin0917</td>
                          <td>2023.06.27</td>
                          <td>O</td>
                        </tr>
                        <tr>
                          <th scope="row">3</th>
                          <td>
                            <Link>프로젝트 등록 문의 드립니다.</Link>
                          </td>
                          <td>jiin0917</td>
                          <td>2023.05.17</td>
                          <td>X</td>
                        </tr>
                        <tr>
                          <th scope="row">4</th>
                          <td>
                            <Link>문의 관련 문의 드립니다.</Link>
                          </td>
                          <td>jiin0917</td>
                          <td>2022.10.27</td>
                          <td>O</td>
                        </tr>

                        <tr>
                          <th scope="row">5</th>
                          <td>
                            <Link>서버 관련 문의 드립니다.</Link>
                          </td>
                          <td>jiin0917</td>
                          <td>2022.09.20</td>
                          <td>O</td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td>
                            <Link>프로젝트 관련 문의 드립니다.</Link>
                          </td>
                          <td>jiin0917</td>
                          <td>2021.08.10</td>
                          <td>O</td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td>
                            <Link>프로젝트 관련 문의 드립니다.</Link>
                          </td>
                          <td>jiin0917</td>
                          <td>2021.08.10</td>
                          <td>O</td>
                        </tr>
                        <tr>
                          <th scope="row">6</th>
                          <td>
                            <Link>프로젝트 관련 문의 드립니다.</Link>
                          </td>
                          <td>jiin0917</td>
                          <td>2021.08.10</td>
                          <td>O</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="row">
                    <ul className="pagination float-end">
                      <li className="page-item disabled">
                        <Link className="page-link" href="#" tabindex="-1">
                          Prev
                        </Link>
                      </li>
                      <li className="page-item active">
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
                    <div className="col-sm-12 col-md-6">

                      <div id="zero_config_filter" className="dataTa Namebles_filter" >

                        <label style={{ display: 'flex;'  }}>
                          <span style={{ transform: 'translateY(5px)', paddingRight: '10px' , width: '40px'}}>Search:</span>
                          <input type="search" className="form-control form-control-sm" placeholder aria-controls="zero_config" style={{ width: '200px' }} />
                          <input type="button" value={'검색하기'} className="inqurylist-search" />
                        </label>
                      </div>

                    </div>

                    {/* 
                    <Link to="/admin/inQurywrite" className="write">
                      <span>문의 하기</span>
                    </Link> */}
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

export default AdminInQurylist;
