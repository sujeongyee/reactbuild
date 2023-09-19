import { useState } from "react";
import "../enMain/EnMain.css";

function UserApply() {
  const [loading, setLoading] = useState(true);

  const [allChecked, setAllChecked] = useState(false);
  const handleCheck = (e) => {
    const isChecked = e.target.checked;
    setAllChecked(isChecked);
    const checkboxes = document.querySelectorAll(".custom-control-input");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = isChecked;
    });
  };
  return (
    <>
      {/* {loading ? <Loading /> : null} */}
      <div className="page-wrapper">
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
                    <div className="form-body">
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">회사명</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="가입정보 불러오기"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">대표자명</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="대표자명"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">회사 전화번호</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="(-)없이 표기"
                            />
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
                            <input
                              type="text"
                              className="form-control"
                              placeholder="가입정보 불러오기"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">사업자 주소</div>
                          </div>
                        </div>

                        <div className="col-md-2 col-md-2-1">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="(우편번호)"
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="가입정보 불러오기"
                            />
                          </div>
                        </div>
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">계약기간</div>
                          </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-4">
                          <div>
                            <div className="form-group">
                              <input type="date" className="form-control" />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-2">
                            <div className="form-group mb-3">
                              <div className="infoUser">서버 보유 현황</div>
                            </div>
                          </div>

                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <div className="server">서버 대수</div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="서버 대수 입력"
                              />
                            </div>
                            <div className="form-group mb-3">
                              <div className="server">네트워크 대수</div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="네트워크 대수 입력"
                              />
                            </div>
                            <div className="form-group mb-3">
                              <div className="server">DBMS 대수</div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="DBMS 대수 입력"
                              />
                            </div>
                            <div className="form-group mb-3">
                              <div className="server">APM 대수</div>
                              <input
                                type="text"
                                className="form-control"
                                placeholder="APM 대수 입력"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-md-2">
                            <div className="form-group mb-3">
                              <div className="infoUser">관리대상 OS</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="관리하실 대상의 OS 종류를 입력해주세요. (ex:Windowns, Linux, HPUX 등)"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div className="form-group mb-3">
                              <div className="infoUser">대표 IP</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <input
                                type="text"
                                class="form-control"
                                placeholder="사용자의 대표 공인 IP 주소를 입력해주세요. (확인방법 : 네이버 접속 > 내 IP 확인 검색)"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div className="form-group mb-3">
                              <div className="infoUser">담당자</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="담당자"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-2">
                            <div className="form-group mb-3">
                              <div className="infoUser">담당자 연락처</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="(-)빼고 입력"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row ">
                          <div className="col-md-2">
                            <div className="form-group mb-3">
                              <div className="infoUser">담당자 이메일</div>
                            </div>
                          </div>
                          <div className="col-md-4">
                            <div className="form-group mb-3">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="abc@gmail.com"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="row rowCheck">
                          <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              value="checkall"
                              id="customCheck1"
                              onClick={
                                handleCheck
                              } /* onclick="checkALL(this)" */
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck1"
                            >
                              {" "}
                              기업 회원 가입 전체 약관에 동의합니다.{" "}
                            </label>
                          </div>

                          <hr />
                          <div className="custom-control custom-checkbox1">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              value="checkall"
                              id="customCheck1" /* onclick="checkALL(this)" */
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck1"
                            >
                              {" "}
                              기업 회원 가입 약관에 동의합니다.{" "}
                            </label>
                            <label>
                              <a href="#">자세히보기</a>
                            </label>
                          </div>
                          <div className="custom-control custom-checkbox1">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              value="checkall"
                              id="customCheck1" /* onclick="checkALL(this)" */
                            />
                            <label
                              className="custom-control-label"
                              for="customCheck1"
                            >
                              {" "}
                              기업 정보 및 이용에 동의합니다.
                            </label>
                            <label>
                              <a href="#">자세히보기</a>
                            </label>
                          </div>
                        </div>
                        <button type="submit" className="btn btn-info">
                          계약 상담 신청하기
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <form action="#" method="post">
                  <div className="form-body">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3">
                          <div className="infoUser">회사명</div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="가입정보 불러오기"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3">
                          <div className="infoUser">대표자명</div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="대표자명"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3">
                          <div className="infoUser">회사 전화번호</div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="(-)없이 표기"
                          />
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
                          <input
                            type="text"
                            className="form-control"
                            placeholder="가입정보 불러오기"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3">
                          <div className="infoUser">사업자 주소</div>
                        </div>
                      </div>

                      <div className="col-md-2 col-md-2-1">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="(우편번호)"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="가입정보 불러오기"
                          />
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-group mb-3">
                          <div className="infoUser">계약기간</div>
                        </div>
                      </div>
                      <div className="col-sm-12 col-md-6 col-lg-4">
                        <div>
                          <div className="form-group">
                            <input type="date" className="form-control" />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">서버 보유 현황</div>
                          </div>
                        </div>

                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <div className="server">서버 대수</div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="서버 대수 입력"
                            />
                          </div>
                          <div className="form-group mb-3">
                            <div className="server">네트워크 대수</div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="네트워크 대수 입력"
                            />
                          </div>
                          <div className="form-group mb-3">
                            <div className="server">DBMS 대수</div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="DBMS 대수 입력"
                            />
                          </div>
                          <div className="form-group mb-3">
                            <div className="server">APM 대수</div>
                            <input
                              type="text"
                              className="form-control"
                              placeholder="APM 대수 입력"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">관리대상 OS</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="관리하실 대상의 OS 종류를 입력해주세요. (ex:Windowns, Linux, HPUX 등)"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">대표 IP</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              class="form-control"
                              placeholder="사용자의 대표 공인 IP 주소를 입력해주세요. (확인방법 : 네이버 접속 > 내 IP 확인 검색)"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">담당자</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="담당자"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">담당자 연락처</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="(-)빼고 입력"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row ">
                        <div className="col-md-2">
                          <div className="form-group mb-3">
                            <div className="infoUser">담당자 이메일</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="abc@gmail.com"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row rowCheck">
                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            value="checkall"
                            id="customCheck1"
                            onClick={handleCheck} /* onclick="checkALL(this)" */
                          />
                          <label
                            className="custom-control-label"
                            for="customCheck1"
                          >
                            {" "}
                            기업 회원 가입 전체 약관에 동의합니다.{" "}
                          </label>
                        </div>

                        <hr />
                        <div className="custom-control custom-checkbox1">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            value="checkall"
                            id="customCheck1" /* onclick="checkALL(this)" */
                          />
                          <label
                            className="custom-control-label"
                            for="customCheck1"
                          >
                            {" "}
                            기업 회원 가입 약관에 동의합니다.{" "}
                          </label>
                          <label>
                            <a href="#">자세히보기</a>
                          </label>
                        </div>
                        <div className="custom-control custom-checkbox1">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            value="checkall"
                            id="customCheck1" /* onclick="checkALL(this)" */
                          />
                          <label
                            className="custom-control-label"
                            for="customCheck1"
                          >
                            {" "}
                            기업 정보 및 이용에 동의합니다.
                          </label>
                          <label>
                            <a href="#">자세히보기</a>
                          </label>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-info">
                        계약 상담 신청하기
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserApply;