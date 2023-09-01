import React, { useState } from "react";
import "../enMain/EnMain.css";
import "../userMain/User.css";

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
                  <form action="#" method="post">
                    <div className="form-body">
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3 input-title">
                            <div style={{ textAlign: "center;" }}>
                              프로젝트명
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="제목을 입력하세요"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3 input-title">
                            <div style={{ textAlign: "center;" }}>담당자명</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="담당자명"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3 input-title">
                            <div style={{ textAlign: "center;" }}>작업일자</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="작업일자 작성"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3 input-title">
                            <div style={{ textAlign: "center;" }}>작업분류</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="점검 종류 : 정기 점검, 긴급 점검, 서버증설 등등"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3 input-title">
                            <div style={{ textAlign: "center;" }}>소요시간</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="작업시작 끝 체크하는 기능만들기"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3 input-title">
                            <div style={{ textAlign: "center;" }}>
                              서버내역 기록
                            </div>
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
                            <div style={{ textAlign: "center;" }}>비고</div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="form-group mb-3">
                            <textarea
                              className="form-control"
                              placeholder="목록에 포함되지않은 기타 작업, 상황 기록"
                              style={{ height: "300px" }}
                            ></textarea>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-2">
                          <div className="form-group mb-3 input-title">
                            <div
                              style={{
                                textAlign: "center;",
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
                        <div className="text-end">
                          <button type="submit" className="btn-writer">
                            작성하기
                          </button>
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
  );
}

export default EnWorkDetail;
