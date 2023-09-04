import { Link } from "react-router-dom"


function UserDetailPro() {


  return (
    <>

      <div className="page-wrapper" >

        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-7 align-self-center">
              <h3>
                프로젝트 정보
              </h3>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="row">
            <div className="col-6">

              <div className="card">

                <div className="card-body pro-body">
                    
                    <div className="pro-info">
                    프로젝트 이름 :  <span>클라우드 마이그레이션</span>
                    </div>
                    
                    <div className="pro-info">
                    프로젝트 시작일 :  <span>23.08.18</span>
                    </div>
                    <div className="pro-info">
                    프로젝트 만료일 :  <span>24.08.18</span>
                    </div>
                    <div className="pro-info">
                    프로젝트 계약 상태 :  <span>진행중</span>
                    </div>
                    <div className="pro-info">
                    프로젝트 정보 :  <span>온프레미스 시스템에서 클라우드로의 애플리케이션 마이그레이션 프로젝트입니다.</span>
                    </div>
                    <div className="pro-info">
                    프로젝트 정기점검 날짜 : <span>매월 7일</span>
                    </div>
                    <div className="pro-info">
                    서버 종류 :  <span>Server001 , Server002 , Server003</span>
                    
                    
                    `<button className="emergency"><Link to="/user/projectDetailList" className="linkto">긴급요청하기</Link></button>`
                    <button className="server-btn"><Link to="/user/projectDetailList" className="linkto">서버별 점검내역 보러가기</Link></button>
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
export default UserDetailPro