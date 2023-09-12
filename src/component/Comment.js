import React from 'react'

function Comment() {
  return (
   <>
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
                                           className="btn waves-effect waves-light - inq-answer-btn" style={{backgroundColor:'#5cb85c'}}>등록
                                        </button>
            
                                    </div>
                                </div>
                            </div>
                        </div>
   </>
  )
}

export default Comment