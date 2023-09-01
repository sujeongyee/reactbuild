import React, { useState } from "react";
import "../enMain/EnMain.css";
import "../userMain/User.css";

function EnWorkDetail() {
  return (
    <>
      <div>
        <div className="page-wrapper">
          <div className="page-breadcrumb">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-body">
                    <h2 className="card-title title-name">작업 상세보기</h2>
                    <div className="form-body">
                      <table className="">
                        <tr>
                          <th>프로젝트명</th>
                          <td>
                            <input type="text" />
                          </td>
                        </tr>
                        <tr>
                          <th>담당 엔지니어 팀</th>
                          <td>
                            <input type="text" />
                          </td>
                        </tr>
                        <tr>
                          <th>담당 엔지니어 이름</th>
                          <td>
                            <input type="text" />
                          </td>
                        </tr>
                        <tr>
                          <th>담당 엔지니어 연락처</th>
                          <td>
                            <input type="text" />
                          </td>
                        </tr>
                        <tr>
                          <th>작업분류</th>
                          <td>
                            <input type="text" />
                          </td>
                        </tr>
                        <tr>
                          <th>작업일자</th>
                          <td>
                            <input type="text" />
                          </td>
                        </tr>
                        <tr>
                          <th>소요시간</th>
                          <td>
                            <input type="text" />
                          </td>
                        </tr>
                      </table>
                      <table className="detail_modal_table_content">
                        <tr>
                          <th>작업내용</th>
                          <td>
                            <textarea
                              name="modal_textarea"
                              id="modal_textarea"
                              cols="60"
                              rows="10"
                              readOnly
                            ></textarea>
                          </td>
                        </tr>
                      </table>
                      <div className="">
                        <input type="button" value="출력" className="" />
                        <input type="button" value="취소" className="" />
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
  );
}

export default EnWorkDetail;
