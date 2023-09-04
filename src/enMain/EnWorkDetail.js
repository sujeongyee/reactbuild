import React, { useState } from "react";
import "../enMain/EnMain.css";
import "../userMain/User.css";
import "../enMain/EnCss.css";
import Timer from './Timer';




function EnWorkDetail() {
  return (
    <>
      <div className="page-wrapper">
        <div className="page-breadcrumb">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <h4
                    className="card-title title-name"
                    style={{ fontWeight: "bold", color: "rgb(78, 89, 104)" }}
                  >
                    작업 상세 내역
                  </h4>
                  {/* <form action="#" method="post"> */}
                  <div className="form-body">
                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3 input-title">
                          <div>프로젝트명</div>
                        </div>
                      </div>
                      <div className="col-md-4 ">
                        <div className="form-group mb-3">
                          <select className="project-select" name="" id="">
                            프로젝트 선택
                            <option value="서울대 서울캠퍼스">
                              서울대 서울캠퍼스
                            </option>
                            <option value="롯데월드 잠실본점">
                              롯데월드 잠실본점
                            </option>
                            <option value="중앙학원 서울캠퍼스">
                              중앙학원 서울캠퍼스
                            </option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2" style={{ marginTop: "0px" }}>
                        <div className="form-group mb-3 input-title">
                          <div
                            style={{
                              paddingTop: "9px",
                            }}
                          >
                            담당자명
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="담당자명(프로젝트 값으로 띄우기)"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3 input-title">
                          <div
                            style={{
                              paddingTop: "9px",
                            }}
                          >
                            작업일자
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2">
                        <div className="form-group mb-3">
                          <div>
                            <div className="form-group">
                              <input type="date" className="form-control" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3 input-title">
                          <div>작업분류</div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="점검 종류 : 정기 점검, 긴급 점검, 서버증설 등등 셀렉트로 만드는게 데이터 관리하기 편할듯"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3 input-title">
                          <div>점검 시간</div>
                        </div>
                      </div>
                      
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          {/* <input
                              type="text"
                              className="form-control"
                              placeholder="점검 시간 기입"
                          /> */}
                          <Timer/>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3 input-title">
                          <div>CPU 현황</div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="서버 작업에 대해 어떻게 기록할 것인가"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3 input-title">
                          <div>RAM 사용량</div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="서버 작업에 대해 어떻게 기록할 것인가"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3 input-title">
                          <div>서버 HDD 사용량</div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="서버 작업에 대해 어떻게 기록할 것인가"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3 input-title">
                          <div>서버 상태 체크버튼</div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <select className="project-select" name="" id="">
                            <option value="">양호</option>
                            <option value="">경고</option>
                            <option value="">위험</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3 input-title">
                          <div>비고</div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <textarea
                            className="form-control"
                            placeholder="목록에 포함되지않은 기타 작업, 상황 기록"
                            style={{ height: "200px", resize:"none" }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-2">
                        <div className="form-group mb-3 input-title">
                          <div
                            style={{
                              transform: "translateY(12px)",
                            }}
                          >
                            첨부파일
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="form-group mb-3">
                          <form className="mt-4">
                            <div className="input-group flex-nowrap">
                              <div className="custom-file w-100 file-upload">
                                <input
                                  className="form-control"
                                  type="file"
                                  style={{ transform: "translateY(5px)" }}
                                />
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>

                    <div className="form-actions">
                      <div className="text-end button-wrap">
                        <button type="submit" className="button-writer right">
                          수정하기
                        </button>
                        <button type="submit" className="button-writer left">
                          작성하기
                        </button>
                      </div>
                    </div>
                  </div>
                  {/*  </form> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EnWorkDetail;
