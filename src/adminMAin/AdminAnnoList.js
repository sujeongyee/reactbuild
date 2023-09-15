import { Link } from 'react-router-dom'
import PageNation from '../pagenation/PageNation'
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { formatDate } from '@fullcalendar/core';
// import '../enMain/EnMain.css'
// import './User.css'
import Loading from '../loding/Loding';
import Search from '../userMain/Search'
function AdminAnnoList({ checkPermission }) {
    const [loading, setLoading] = useState(true);

    const [searchValue, setSearchValue] = useState([])
    const [select,setSelect]=useState("notice_title")
    const [total, setTotal] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [pageInfo, setPageInfo] = useState([])
    const postsPerPage = 10;
    const startIndex=(currentPage-1)*postsPerPage;
    const endIndex= startIndex + postsPerPage;
    const currentPosts = searchValue.slice(startIndex, endIndex);
    
    const list = async () => {//현재 목록 불러오기

        if(searchValue.length==0){

            const response = await axios.get(`/api/main/AnnoList?currentPage=${currentPage}&postsPerPage=${postsPerPage}`)
            setPageInfo(response.data);
            
            setLoading(false);
        }else{//검색결과가 1이상이라면?
            setPageInfo(currentPosts)
        }
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
    useEffect(()=>{
        setCurrentPage(1)
        handlePageChange(1)
        list()
       console.log(searchValue)
    },[searchValue])


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
   
    const selectSearch=(e)=>{
        
        setSelect(e.target.value)
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

                                <div className="card-body"style={{height:"600px"}}>
                                    <div className="table-responsive"style={{height:"450px"}}>
                                        <Search setSearchValue={setSearchValue} setTotal={setTotal} select={select} style={{ color: "rgb(198, 73, 42)" }} categori={"notice"} />
                                        <select onChange={selectSearch}>
                                            
                                            <option value="notice_title">제목</option>
                                            <option value="notice_writer">작성자</option>

                                        </select>
                                        <Link to="/admin/noticeWrite" className="write">
                                            <span style={{ background: "rgb(198, 73, 42)" }}>공지사항 작성</span>
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


                                                {pageInfo && pageInfo.slice(0, -1).map((item, index) => (
                                                    <tr key={index}>
                                                        <th scope="row">{index + 1}</th>
                                                        <td><Link to={`/admin/annoDetail`} state={{ item }} style={{padding:"0"}}>{item.notice_title}</Link></td>
                                                        <td>{item.notice_writer ? item.notice_writer  : "admin"}</td>
                                                        <td>{item.notice_regdate ? formatDateTime(item.notice_regdate) : ""}</td>
                                                    </tr>
                                                ))}

                                            </tbody>
                                        </table>
                                    </div>
                                    {total != '' ? <PageNation 
                                    
                                        currentPage={currentPage}
                                        totalPosts={total} // 전체 게시글 수를 전달
                                        onPageChange={handlePageChange}
                                        postsPerPage={postsPerPage}
                                        
                                        style={{
                                            color: "#d9534f",
                                            backgroundColor: '#ffdcdb',
                                            borderRadius: ' 35%'
                                        }} /> : null}

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