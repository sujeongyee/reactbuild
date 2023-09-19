import React, { useState } from "react";
import Modal from "react-modal";
import "../enMain/EnMain.css";
import "../userMain/User.css";
import Loading from '../loding/Loding';

function EnglScheduleModal(){
  const [loading, setLoading] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxHeight: "85%", // Adjust the height as needed
      overflow: "auto", // Enable scrolling if content overflows
      borderRadius: "15px",
      backgroundColor: "#f9f9fd",
      zIndex:9999
    },
  };

  return (
    <>
              {/* {loading ? <Loading /> : null} */}
      <Modal
        /* className="modal-content"
        overlayClassName="modal-overlay" */
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className="detail_modal_container">
          <h2>엔지니어 정보</h2>
          <div className="detail_modal_container_inner">
            <table className="detail_modal_table">
              <tr>
                <th>
                  <div className="me-3">
                    <img
                      src="../img/widget-table-pic1.jpg"
                      alt="user"
                      className="rounded-circle"
                      width="150"
                      height="150"
                    />
                  </div>
                </th>
                <td>
                  <input type="text" value="백스이" readOnly />
                </td>
              </tr>
              <tr>
                <th>직급</th>
                <td>
                  <input type="text" value="사원" readOnly />
                </td>
              </tr>
              <tr>
                <th>소속 부서</th>
                <td>
                  <input type="text" value="기술지원 1팀" readOnly />
                </td>
              </tr>
              <tr>
                <th>입사일</th>
                <td>
                  <input type="text" value="2020-03-03" readOnly />
                </td>
              </tr>
              <tr>
                <th>내선번호</th>
                <td>
                  <input type="text" value="02-2034-3043" readOnly />
                </td>
              </tr>
              <tr>
                <th>휴대전화번호</th>
                <td>
                  <input type="text" value="010-3492-4034" readOnly />
                </td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>
                  <input type="text" value="co404@naver.com" readOnly />
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
            <div className="detail_modal_button">
              <input
                type="button"
                value="수정"
                className="detail_modal_button_print"
              />
              <input
                type="button"
                value="목록"
                className="detail_modal_button_close"
                onClick={() => setModalIsOpen(false)}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );

}
export default EnglScheduleModal