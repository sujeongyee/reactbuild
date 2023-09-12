import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Comment() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  // useEffect(() => {
  //   // 공지사항에 대한 댓글 목록을 불러오는 함수
  //   const fetchComments = async () => {
  //     const response = await axios.get('/api/eng/{noticeId}'); // noticeId에 공지사항 ID를 넣어주세요
  //     setComments(response.data);
  //   };
  //   fetchComments();
  // }, []);

  const handleCreateComment = async () => {
    // 새 댓글 생성 함수
    const response = await axios.post('/api/eng/comments', {
      writer: '사용자 이름',
      content: newComment,
    });
    setComments([...comments, response.data]);
    setNewComment('');
  };


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
                                            className="form-control border-0" type="text"  value={newComment}
                                            onChange={(e) => setNewComment(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="commentBtn">
                                    <div className="btn-list">
                                        <button type="button"
                                           className="btn waves-effect waves-light - inq-answer-btn" onClick={handleCreateComment} style={{backgroundColor:'#5cb85c'}}>등록
                                        </button>
            
                                    </div>
                                </div>
                            </div>
                        </div>
   </>
  )
}

export default Comment