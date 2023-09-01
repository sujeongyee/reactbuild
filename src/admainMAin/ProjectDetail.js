
import './Admin.css';
import AdminproModal from './AdminproModal.js';

function ProjectDetail() {


  return (
    <>
      <div className="page-wrapper pro-d" >
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 col-lg-12 detail-pro">
              <div className="card detail-pro">
                <div className="card-body detail-pro">
                  <h3>프로젝트 상세정보</h3>
                  <hr />
                  <div className="card">
                    <div className="card-body detail2">
                      <div className="detail-list">
                      <span>프로젝트명 : </span><p>web server</p>
                      </div>
                      <div className="detail-list">
                      <span>프로젝트 계약 상태 : </span><p>1년 계약</p>
                      </div>
                      <div className="detail-list">
                      <span>프로젝트 시작 :</span><p> 23/09/27</p>
                      </div>
                       <div className="detail-list">
                      <span>프로젝트 끝 :</span><p> 24/09/27</p>
                      </div> 
                      <div className="detail-list">
                      <span>프로젝트 담당자 : </span><p>백승용</p>
                      </div>
                      <div className="detail-list">
                      <span>정기점검 날짜 : </span><p>매월 30일</p>
                      </div>
                      <div className="detail-list">
                      <button type="button" className="team-button"><AdminproModal name="팀 배정하기"/></button>
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

export default ProjectDetail