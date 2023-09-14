import { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
// import '../enMain/EnMain.css'
// import './User.css'
function AdminInQuryDetail() {



    return (
        <>
            <div className="page-wrapper" >

            <div class="page-breadcrumb">
                <div class="row">
                    {/* <div class="col-7 align-self-center">
                        <h3 class="page-title text-truncate text-dark font-weight-medium mb-1">엔지니어</h3>
                        <div class="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol class="breadcrumb m-0 p-0">
                                    <li class="breadcrumb-item"><a href="index.html">문의사항</a>
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div> */}

                </div>
            </div>
            <div class="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body" style={{padding:'30px 70px 0 100px', height: '750px'}} >
                              <a className="inq-back">
                                ← 문의 목록
                              </a>
                               <h1 className="css-148cvwt edhjjyh1 inq-title">프로젝트 등록 문의드립니다.</h1>
                                  <div className="list-flex">
                                    <div>
                                     <span className='inq-writer'>작성자</span>  
                                      <span className='inq-writer2'>jiin0917</span>
                                    </div>
                                    <div>
                                     <span className='inq-writer'>등록일자</span>  
                                     <span className='inq-writer2'>2023.09.17</span>
                                    </div>
                                    <div>
                                     <span className='inq-writer inq-view'>조회수</span>  
                                     <span className='inq-writer2'>3</span>
                                    </div>
                                  </div>
                            
                            <article className="inq-content">
                            <p>프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는 
                                프로젝트 관련 문의 남깁니다 답변 부탁드립니다 . 저희 회사는  </p>

                            </article>




                            <div className="card-body border-top inq-q">
                                <div className="row inq-answer">
                                    <div className="comment" >
                                        <div className="input-field mt-0 mb-0 inq-answer-input">
                                            <input id="textarea1" placeholder="문의에 대한 답변을 적어주세요"
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
                            </div>

                            </div>







                            </div>
                            
                            </div>

                            
                        </div>
                        
                    </div>

                    




           



        </>
    )
}

export default AdminInQuryDetail