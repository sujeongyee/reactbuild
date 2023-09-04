
import { useState } from 'react'
import '../enMain/EnMain.css'

function UserApply() {

  const [allChecked, setAllChecked] = useState(false);
  const [serverFields, setServerFields] = useState([
    
  ]);
  const handleCheck = (e) => {
    const isChecked = e.target.checked;
    setAllChecked(isChecked);
    const checkboxes = document.querySelectorAll('.custom-control-input');
    checkboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  };

  

  const addServerField = (e) => {
    setServerFields([...serverFields, { serverName: '', ipAddress: '', os: '', cpu: '', ram: '', disk: '' }]);
    e.preventDefault();
  };
  const removeServerField = (index ,e) => {
    e.preventDefault();
    const updatedServerFields = [...serverFields];
    updatedServerFields.splice(index, 1);
    setServerFields(updatedServerFields);
    
  };

  const day = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

  return (

    <>
      <div className="page-wrapper" >
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-7 align-self-center">
              <h4 className="page-title text-truncate text-dark font-weight-medium mb-1">
                프로젝트(서버 유지보수) 계약 신청
              </h4>
            </div>


          </div>
        </div>



        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <form action="#" method="post">
                    <div className="form-body" id="regist-form">

                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">회사명</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="가입정보 불러오기" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">담당자명</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="담당자명" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">담당자 전화번호</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="(-)없이 표기" />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                          <div className="col-md-2">
                            <div className="form-group mb-3">
                              <div className="infoUser">담당자 이메일</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <input type="text" className="form-control" placeholder="abc@gmail.com" />
                            </div>
                          </div>

                        </div>

                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">사업자 등록번호</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="가입정보 불러오기" />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">회사 주소</div>
                          </div>
                        </div>

                        <div className="col-md-2 col-md-2-1">
                          <div className="form-group mb-3">
                            <input type="text" class="form-control" placeholder="(우편번호)" />

                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <input type="text" className="form-control" placeholder="가입정보 불러오기" />

                          </div>

                        </div>
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">계약 시작일 지정 <p>(계약은 1년 단위 입니다)</p></div>

                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                          <div>

                            <div className="form-group">
                              <input type="date" className="form-control" />
                              <p>시작일은 오늘 이후로의 날짜로 지정해주세요.</p>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">정기점검날짜</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3 select-day">
                            <p>매월</p>
                            <select className='select-op'>
                            {day.map((day, index) => (
                              <option>{day}</option>
                              ))}
                            </select>
                            <p>일</p>
                          </div>
                        </div>
                      </div>
                        
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">프로젝트정보</div>
                          </div>
                        </div> 
                        <div className="col-md-4 projec-info">
                          <textarea className='info-txt'>ex 웹 애플리케이션을 개발하여 새로운 기능을 추가하고 버그를 수정합니다.</textarea>
                        </div>
                       </div>
                  

                        <div className="row">
                          <div className='col-md-2'></div>
                          <div className="col-md-8">
                            <div className="infoUser infoServer">서버 정보(하나의 서버 정보는 필수입니다.)</div>
                            <button className='sevaddbtn' onClick={addServerField}>서버추가하기</button>
                            

                          </div>

                        </div>
                        <div className="row all-server">
                          <div className="col-md-8 all-server-info">
                            <p className='sever-n'>서버 1</p>
                            <div></div>
                            <div className="form-group server-info-list">
                              <div className="server" >서버이름</div>
                              <input type="text" className="form-control server-info-input" placeholder="서버 이름 입력" />


                            </div>
                            <div className="form-group server-info-list">
                              <div className="server" >IP주소</div>
                              <input type="text" className="form-control server-info-input" placeholder="IP 주소 입력" />


                            </div>
                            <div className="form-group server-info-list">
                              <div className="server" >운영체제</div>
                              <input type="text" className="form-control server-info-input" placeholder="운영체제 입력" />


                            </div>
                            <div className="form-group server-info-list">
                              <div className="server" >CPU</div>
                              <input type="text" className="form-control server-info-input" placeholder="CPU 정보 입력" />
                            </div>
                            <div className="form-group server-info-list">
                              <div className="server" >RAM</div>
                              <input type="text" className="form-control server-info-input" placeholder="RAM 용량 입력" />
                            </div>
                            <div className="form-group server-info-list">
                              <div className="server" >디스크</div>
                              <input type="text" className="form-control server-info-input" placeholder="디스크 용량 입력" />
                            </div>
                          </div>
                       

                        </div>
                        {serverFields.map((server, index) => (
                        <div className="row all-server" key= {index}>
                          
                          <div className="col-md-8 all-server-info">
                            <div>
                            <p className='sever-n'>서버 {index+2}</p>
                          <button className='sevdelbtn' onClick={(e) => removeServerField(index,e)}>x</button>
                          </div>
                            <div className="form-group server-info-list">
                              <div className="server" >서버이름</div>
                              <input type="text" className="form-control server-info-input" placeholder="서버 이름 입력" />


                            </div>
                            <div className="form-group server-info-list">
                              <div className="server" >IP주소</div>
                              <input type="text" className="form-control server-info-input" placeholder="IP 주소 입력" />


                            </div>
                            <div className="form-group server-info-list">
                              <div className="server" >운영체제</div>
                              <input type="text" className="form-control server-info-input" placeholder="운영체제 입력" />


                            </div>
                            <div className="form-group server-info-list">
                              <div className="server" >CPU</div>
                              <input type="text" className="form-control server-info-input" placeholder="CPU 정보 입력" />
                            </div>
                            <div className="form-group server-info-list">
                              <div className="server" >RAM</div>
                              <input type="text" className="form-control server-info-input" placeholder="RAM 용량 입력" />
                            </div>
                            <div className="form-group server-info-list">
                              <div className="server" >디스크</div>
                              <input type="text" className="form-control server-info-input" placeholder="디스크 용량 입력" />
                            </div>
                           
                          </div>
                          

                        </div>
                        ))}



                        {/* <div className="col-md-4">
                            <div className="form-group mb-3">
                              <input type="text" className="form-control" placeholder="관리하실 대상의 OS 종류를 입력해주세요. (ex:Windowns, Linux, HPUX 등)" />
                            </div>
                          </div>



                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <input type="text" class="form-control" placeholder="사용자의 대표 공인 IP 주소를 입력해주세요. (확인방법 : 네이버 접속 > 내 IP 확인 검색)" />
                            </div>
                          </div> */}




                        <div className='row rowCheck'>
                          <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" value="checkall" id="customCheck1" onClick={handleCheck} /* onclick="checkALL(this)" */ />
                            <label className="custom-control-label" for="customCheck1"> 기업 회원 가입 전체 약관에 동의합니다. </label>

                          </div>

                          <hr />
                          <div className="custom-control custom-checkbox1">
                            <input type="checkbox" className="custom-control-input" value="checkall" id="customCheck1" /* onclick="checkALL(this)" */ />
                            <label className="custom-control-label" for="customCheck1">  기업 회원 가입 약관에 동의합니다. </label>
                            <label>
                              <a href="#">자세히보기</a>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox1">
                            <input type="checkbox" className="custom-control-input" value="checkall" id="customCheck1" /* onclick="checkALL(this)" */ />
                            <label className="custom-control-label" for="customCheck1"> 기업 정보 및 이용에 동의합니다.</label>
                            <label>
                              <a href="#">자세히보기</a>
                            </label>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-info">계약 상담 신청하기</button>
                      </div>

                    </div>

                  </form>

                </div>

              </div>


            </div>

          </div>


        </div >





      </div >

    </>

  )

}

export default UserApply