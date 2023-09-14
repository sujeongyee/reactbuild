import { Link } from 'react-router-dom'
import '../enMain/EnMain.css'
import FormControlIcon from '../img/FormControlIcon';
// import './User.css'
import Loading from '../loding/Loding';
import { useState } from 'react';

function EnAnnoList() {
  const [loading, setLoading] = useState(true);

    return (

        <>
               {loading ? <Loading /> : null}
            <div className="page-wrapper" >

                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-7 align-self-center">
                            <h4 className="page-title text-truncate text-dark font-weight-medium mb-1">
                                공지 사항
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
                                        <label style={{ display: 'flex' }}>
                                            <span style={{ transform: 'translateY(5px)', padding: '7px 10px 0 0', width: '8%', color: 'rgb(42, 198, 97)' }}>Search:</span>
                                            <input type="search" className="form-control form-control-sm" placeholder aria-controls="zero_config" style={{ width: '200px' }} />
                                            <button style={{ marginLeft: '5px' }}>
                                                <FormControlIcon />
                                            </button>
                                        </label>
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">NO</th>
                                                    <th scope="col">제목</th>
                                                    <th scope="col">작성자</th>
                                                    <th scope="col">등록일</th>
                                                </tr>

                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <th scope="row">1</th>
                                                    <td><Link to="/engineer/annoDetail">(필독)전체 공지사항입니다</Link></td>
                                                    <td>Admin</td>
                                                    <td>2023.08.27</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">2</th>
                                                    <td><Link to="/user">[공지사항]리액트 너무 어렵습니다.</Link></td>
                                                    <td>Admin</td>
                                                    <td>2023.08.27</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">3</th>
                                                    <td><Link to="/user">[공지사항]리액트 너무 어렵습니다.</Link></td>
                                                    <td>Admin</td>
                                                    <td>2023.08.27</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">4</th>
                                                    <td><Link to="/user">[공지사항]리액트 너무 어렵습니다.</Link></td>
                                                    <td>Admin</td>
                                                    <td>2023.08.27</td>
                                                </tr>
                                                <tr>
                                                    <th scope="row">5</th>
                                                    <td><Link to="/user">[공지사항]리액트 너무 어렵습니다.</Link></td>
                                                    <td>Admin</td>
                                                    <td>2023.08.27</td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <ul className="pagination paginationEn" >
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
                                                    2
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
    )


}


export default EnAnnoList;