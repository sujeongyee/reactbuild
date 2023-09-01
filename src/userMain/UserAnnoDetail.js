import { Link } from 'react-router-dom'
// import '../enMain/EnMain.css'
// import './User.css'
function UserAnnoDetail() {


    return (
        <>
            <div className="page-wrapper" >

          
            <div class="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{height:'100%'}}>
                            <div className="card-body" style={{padding:'30px 70px 0 100px', height: '750px'}} >
                              <Link to="/user/AnnoList" className="inq-back">
                                ← 공지 목록
                              </Link>
                               <h1 className="css-148cvwt edhjjyh1 inq-title">(필독)전체 공지사항입니다</h1>
                                  <div className="list-flex">
                                    <div>
                                     <span className='inq-writer'>작성자</span>  
                                      <span className='inq-writer2'>Admin</span>
                                    </div>
                                    <div>
                                     <span className='inq-writer'>등록일자</span>  
                                     <span className='inq-writer2'>2023.09.12</span>
                                    </div>
                                    <div>
                                     <span className='inq-writer inq-view'>조회수</span>  
                                     <span className='inq-writer2'>24</span>
                                    </div>
                                  </div>
                            
                            <article className="inq-content">
                            <p>전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.
                            전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.
                            전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.
                            전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.
                            전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.
                            전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.
                            전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.
                            전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.
                            전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.
                            전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.전체공지드립니다. 확인부탁드립니다.
                            </p>

                            </article>




                        



                            <div className="card-body border-top replyComment">
                                <div className="reply">
                                  <div className="row">
                                      <p className="replyId">유저 이름</p>
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
                                <div className="card-body border-top inq-q">
                                <div className="row inq-answer">
                                    <div className="comment" >
                                        <div className="input-field mt-0 mb-0 inq-answer-input">
                                            <input id="textarea1" placeholder="댓글"
                                                className="form-control border-0" type="text"/>
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
                            </div>
                          
                            </div>







                            </div>
                            
                            </div>

                            
                        </div>
                        
                    </div>

                    




           



        </>
    )
}

export default UserAnnoDetail