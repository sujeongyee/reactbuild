import React, { useState } from "react";
import Modal from "react-modal";
import "../enMain/EnMain.css";
import "../userMain/User.css";

function AdEngineerMyPage(props) {
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
      backgroundColor: "#f9f9fd",
    },
  };

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>{props.engName}</button>
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
                  <input type="text" value={props.engName} readOnly />
                </td>
              </tr>
              <tr>
                <th>직급</th>
                <td>
                  <input type="text" value={props.engRank} readOnly />
                </td>
              </tr>
              <tr>
                <th>소속 부서</th>
                <td>
                  <input type="text" value={props.team_Id} readOnly />
                </td>
              </tr>
              <tr>
                <th>이메일</th>
                <td>
                  <input type="text" value={props.engEmail} readOnly />
                </td>
              </tr>
              
              <tr>
                <th>휴대전화번호</th>
                <td>
                  <input type="text" value={props.engPhone} readOnly />
                </td>
              </tr>

            </table>
            
            <div className="detail_modal_button">
              
              <input
                type="button"
                value="목록보기"
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

export default AdEngineerMyPage;
