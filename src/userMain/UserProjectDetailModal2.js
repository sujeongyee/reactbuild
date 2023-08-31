import React, { useState } from "react";
import Modal from "react-modal";
import "../enMain/EnMain.css";
import "./User.css";

function UserProjectDetailModal2() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "100%", // Adjust the width as needed
      maxHeight: "85%", // Adjust the height as needed
      overflow: "auto", // Enable scrolling if content overflows
      borderRadius: "15px",
    },
  };

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>정기점검</button>
      <Modal
        /* className="modal-content"
        overlayClassName="modal-overlay" */
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className="detail_modal_container">
          <h2>작업 상세보기</h2>
          <div className="detail_modal_container_inner">
            <table className="detail_modal_table">
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
                  ></textarea>
                </td>
              </tr>
            </table>
            <div className="detail_modal_button">
              <input
                type="button"
                value="출력"
                className="detail_modal_button_print"
              />
              <input
                type="button"
                value="취소"
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

export default UserProjectDetailModal2;
