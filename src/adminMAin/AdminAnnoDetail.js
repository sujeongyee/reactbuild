import { Link, useLocation } from 'react-router-dom'
// import '../enMain/EnMain.css'
// import './User.css'
function AdminAnnoDetail() {
    const location = useLocation();
    const DetailData = location.state.item;
    console.log(DetailData.notice_comment)

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
            <div className="page-wrapper" >

                <div class="page-breadcrumb">

                </div>
                <div class="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-body" style={{ padding: '30px 70px 0 100px', height: '750px' }} >
                                    <Link to="/admin/annoList" className="inq-back" >
                                        ← 공지 목록
                                    </Link>
                                    <h1 className="css-148cvwt edhjjyh1 inq-title">{DetailData.notice_title}</h1>
                                    <div className="list-flex">
                                        <div>
                                            <span className='inq-writer'>작성자</span>
                                            <span className='inq-writer2'>Admin</span>
                                        </div>
                                        <div>
                                            <span className='inq-writer'>등록일자</span>
                                            <span className='inq-writer2'>{DetailData.notice_regdate ? formatDateTime(DetailData.notice_regdate) : ""}</span>
                                        </div>
                                        <div>
                                            <span className='inq-writer inq-view'>조회수</span>
                                            <span className='inq-writer2'>24</span>
                                        </div>
                                    </div>

                                    <article className="inq-content" style={{ height: '300px' }}>
                                        <p>{DetailData.notice_content}
                                        </p>

                                    </article>



                                    {DetailData.notice_comment == 'y' ?
                                        <div className="card-body border-top inq-q">
                                            <div className="row inq-answer">
                                                <div className="comment" >
                                                    <div className="input-field mt-0 mb-0 inq-answer-input">
                                                        <input id="textarea1" placeholder="문의에 대한 답변을 적어주세요"
                                                            className="form-control border-0" type="text" />
                                                    </div>
                                                </div>
                                                <div className="commentBtn">
                                                    <div className="btn-list">
                                                        <button type="button"
                                                            className="btn waves-effect waves-light - inq-answer-btn">등록
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                        : null}

                                    {DetailData.notice_comment == 'y' ?
                                        <div className="card-body border-top replyComment">
                                            <div className="reply">
                                                <div className="row">
                                                    <p className="replyId">관리자 이름..?</p>
                                                    <div>
                                                        <button className="replySet">수정</button>
                                                        <button className="replyDelete">삭제</button>
                                                    </div>
                                                </div>
                                                <div>
                                                    내용
                                                </div>
                                            </div>
                                        </div>
                                        : null}
                                </div>
                            </div>







                        </div>

                    </div>


                </div>

            </div>










        </>
    )
}

export default AdminAnnoDetail