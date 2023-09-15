import { Link } from 'react-router-dom'
import PageNation from '../pagenation/PageNation'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { formatDate } from '@fullcalendar/core';
// import '../enMain/EnMain.css'
// import './User.css'
import Loading from '../loding/Loding';
function AdminAnnoList({ checkPermission }) {
    const [loading, setLoading] = useState(true);


    const [total, setTotal] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInfo, setPageInfo] = useState([])
    const postsPerPage = 10;

    const list = async () => {//현재 목록 불러오기

        const response = await axios.get(`/api/main/AnnoList?currentPage=${currentPage}&postsPerPage=${postsPerPage}`)
        setPageInfo(response);

        setLoading(false);
    }
    const totalListNum = async () => {//토탈 목록 불러오기
        const response = await axios.get("/api/main/admin/AnnoTotal")
        setTotal(response.data);
        setLoading(false);
    }

    useEffect(() => {
        list()

        totalListNum()
    }, []);


    useEffect(() => {

        list()

    }, [currentPage]);
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber); // 페이지 변경 시 현재 페이지 업데이트
    };

    function formatDateTime(timestamp) {
        const date = new Date(timestamp);

        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 1을 더하고 2자리로 포맷팅
        const day = String(date.getDate()).padStart(2, '0'); // 일을 2자리로 포맷팅
        const hours = String(date.getHours()).padStart(2, '0'); // 시간을 2자리로 포맷팅
        const minutes = String(date.getMinutes()).padStart(2, '0'); // 분을 2자리로 포맷팅

        const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}`;
        return formattedDateTime;
    }


    return (

        <>
            {loading ? <Loading /> : null}
            <div className="page-wrapper">

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
                                        <Link to="/admin/noticeWrite"className="write">
                                            <span  style={{background:"rgb(198, 73, 42)"}}>공지사항 작성</span>
                                        </Link>
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


                                                {pageInfo.data && pageInfo.data.map((item, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td><Link to={`/admin/annoDetail`} state={{ item }} >{item.notice_title}</Link></td>
                                                        <td>{item.notice_writer?item.notice_writer:"admin"}</td>
                                                        <td>{item.notice_regdate ? formatDateTime(item.notice_regdate) : ""}</td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>
                                    {total != '' ? <PageNation currentPage={currentPage}
                                        totalPosts={total} // 전체 게시글 수를 전달
                                        onPageChange={handlePageChange}
                                        postsPerPage={postsPerPage} 
                                        style={{
                                            color:"#d9534f",
                                            backgroundColor: '#ffdcdb',
                                            borderRadius:' 35%'
                                        }}/> : null}

                                </div>

                            </div>
                        </div>

                    </div>



                </div>
            </div>

        </>

    )


}


export default AdminAnnoList