import ChartComponent1 from "./ChartComponent1";
//import "normalize.css";
import "./client-main-pro.css";

function MainUser() {
  return (
    <>
      <div class="page-wrapper">
        <div class="container-fluid">
          <div id="projectList">
            <h4 class="listTitle text-dark font-weight-medium mb-1">
              프로젝트 진행 현황
            </h4>

            <div class="projectArea">
              <div class="project">
                <div class="projectInfo">
                  <table>
                    <tr>
                      <th>프로젝트명</th>
                      <td>서울대학교 전산시스템</td>
                    </tr>
                    <tr>
                      <th>작업 분류</th>
                      <td>유지보수</td>
                    </tr>
                    <tr>
                      <th>기간</th>
                      <td>23.08.06 ~ 23.12.30</td>
                    </tr>
                    <tr>
                      <th>서버</th>
                      <td>localhost</td>
                    </tr>
                    <tr>
                      <th>담당 엔지니어</th>
                      <td>김짱수</td>
                    </tr>
                    <tr>
                      <th>정기점검일</th>
                      <td>매달 10일</td>
                    </tr>
                  </table>
                  <a href="#">
                    <figure>
                      <figcaption>자세히보기</figcaption>
                    </figure>
                  </a>
                </div>
              </div>
              <progress value="20" max="100"></progress>
            </div>

            <div class="projectArea">
              <div class="project">
                <div class="projectInfo">
                  <table>
                    <tr>
                      <th>프로젝트명</th>
                      <td>ICT대학교 학생관리시스템</td>
                    </tr>
                    <tr>
                      <th>작업 분류</th>
                      <td>유지보수</td>
                    </tr>
                    <tr>
                      <th>기간</th>
                      <td>23.06.01 ~ 23.10.30</td>
                    </tr>
                    <tr>
                      <th>서버</th>
                      <td>localhost</td>
                    </tr>
                    <tr>
                      <th>담당 엔지니어</th>
                      <td>김짱수</td>
                    </tr>
                    <tr>
                      <th>정기점검일</th>
                      <td>매달 15일</td>
                    </tr>
                  </table>
                  <a href="#">
                    <figure>
                      <figcaption>자세히보기</figcaption>
                    </figure>
                  </a>
                </div>
              </div>
              <progress value="50" max="100"></progress>
            </div>

            <div class="projectArea">
              <div class="project">
                <div class="projectInfo">
                  <table>
                    <tr>
                      <th>프로젝트명</th>
                      <td>정보처리기술학원</td>
                    </tr>
                    <tr>
                      <th>작업 분류</th>
                      <td>유지보수</td>
                    </tr>
                    <tr>
                      <th>기간</th>
                      <td>23.04.06 ~ 23.09.27</td>
                    </tr>
                    <tr>
                      <th>서버</th>
                      <td>localhost</td>
                    </tr>
                    <tr>
                      <th>담당 엔지니어</th>
                      <td>김짱수</td>
                    </tr>
                    <tr>
                      <th>정기점검일</th>
                      <td>매달 5일</td>
                    </tr>
                  </table>
                  <a href="#">
                    <figure>
                      <figcaption>자세히보기</figcaption>
                    </figure>
                  </a>
                </div>
              </div>
              <progress value="80" max="100"></progress>
            </div>

            <div class="projectArea">
              <div class="nextProject">
                <i data-feather="arrow-right-circle" class="feather-icon"></i>
              </div>
            </div>
          </div>

          <div id="totalChart">
            <div
              class="row"
              style={{ marginTop: "50px", float: "none", margin: "0 auto" }}
            >
              <div
                class="col-lg-10 col-md-12"
                style={{ float: "none", margin: "50px auto" }}
              >
                <div class="card">
                  <div class="card-body">
                    <h4 class="card-title">프로젝트 별 점검상황</h4>

                    <div
                      id="chart-area"
                      style={{ width: "100%" }}
                      class="col-lg-6 col-md-12"
                    >
                      <ChartComponent1 />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MainUser;
