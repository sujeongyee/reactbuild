import './Admin.css'

function NoticeWrite(){


    return(

    <>
        <div className="page-wrapper" >

            <div className="page-breadcrumb">
              <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                        <h4 className="card-title title-name" style={{fontWeight:'bold' ,color:'rgb(78, 89, 104)'}}>공지사항</h4>
                                        <form action="#" method="post" >
                                            <div className="form-body">
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <div className="form-group mb-3 input-title">
                                                          <div style={{textAlign: 'center;'}}>제목</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group mb-3">
                                                            <input type="text" className="form-control" placeholder="제목을 입력하세요" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                  <div className="col-md-2">
                                                      <div className="form-group mb-3 input-title">
                                                        <div style={{textAlign: 'center;'}}>작성자명</div>
                                                      </div>
                                                  </div>
                                                  <div className="col-md-4">
                                                      <div className="form-group mb-3">
                                                          <input type="text" className="form-control" placeholder="admin"/>
                                                      </div>
                                                  </div>
                                              </div>
                                              <div className="row">
                                                <div className="col-md-2">
                                                    <div className="form-group mb-3 input-title">
                                                      <div style={{textAlign: 'center;'}}>작성일</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group mb-3">
                                                        <input type="text" className="form-control" placeholder="작성일"/>
                                                    </div>
                                                </div>
                                              </div>
                                              <div className="row">
                                                <div className="col-md-2">
                                                    <div className="form-group mb-3 input-title">
                                                      <div style={{textAlign: 'center;'}}>공지대상</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                   <div className="form-group mb-3">
                                                      <select class="custom-select custom-select-set form-control bg-white border-0 custom-shadow custom-radius">           
                                                      <option>엔지니어</option>
                                                      <option>유저</option>
                                                      </select>  
                                                    </div>
                                                </div>
                                              </div>      
                                              <div className="row">
                                                <div className="col-md-2">
                                                    <div className="form-group mb-3 input-title">
                                                      <div style={{textAlign: 'center;'}}>댓글여부</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                   <div className="form-group mb-3">
                                                      <select class="custom-select custom-select-set form-control bg-white border-0 custom-shadow custom-radius">           
                                                      <option>O</option>
                                                      <option>X</option>
                                                      </select>  
                                                    </div>
                                                </div>
                                              </div>










                                              <div className="row">
                                                <div className="col-md-2">
                                                    <div className="form-group mb-3 input-title">
                                                      <div style={{textAlign: 'center;'}}>공지내용</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group mb-3">
                                                        <textarea className="form-control" placeholder="공지내용"  style={{height:'300px'}}></textarea>
                                                    </div>
                                                </div>
                                              </div>

                                            
                                              <div className="row">
                                                <div className="col-md-2">
                                                    <div className="form-group mb-3 input-title">
                                                      <div style={{textAlign: 'center;',transform:'translateY(12px)'}}>첨부파일</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group mb-3">
                                                      <form className="mt-4">
                                                        <div className="input-group flex-nowrap" >  
                                                          <div className="custom-file w-100 file-upload" >
                                                              <input className="form-control" type="file"style={{transform:'translateY(5px)'}}/>
                                                          </div>

                                                        </div>
                                                      </form>
                                                    </div>
                                                </div>
                                              </div>
                                              

                                              <div className="form-actions">
                                                <div className="text-end">
                                                    <button type="submit"className="btn-writer">작성하기</button>
                                                </div>
                                              </div>
  
                                              </div>
                                              
      
      

        
                                                
                                               

                                        </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
              </div>

      </div>
    </>
    )

}

export default NoticeWrite