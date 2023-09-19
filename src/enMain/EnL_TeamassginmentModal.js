import React, { useState } from "react";
import Modal from "react-modal";
import "../enMain/EnMain.css";
import "./EnTeam.css";

function EnL_TeamassingmentModal() {
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
      maxWidth: "100%", // Adjust the width as needed
      maxHeight: "85%", // Adjust the height as needed
      overflow: "auto", // Enable scrolling if content overflows
      borderRadius: "15px",
    },
  };

  return (
    <>
      <button
        type="button"
        className="assingment-btn"
        onClick={() => setModalIsOpen(true)}
      >
        팀원배정
      </button>

      <Modal
        /* className="modal-content"
        overlayClassName="modal-overlay" */
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className="team-table">
          <div className="team-select">
            <table className="team-select-table">
              <thead>
                <tr>
                  <th scope="col">NO</th>
                  <th scope="col">이름</th>
                  <th scope="col">직급</th>
                  <th scope="col">소속</th>
                  <th scope="col">전화번호</th>
                  <th scope="col">선택</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">1</td>
                  <td>
                    <div className="team-list-flex">
                      <div className="team-list">
                        <img
                          src="../img/widget-table-pic1.jpg"
                          alt="user"
                          className="rounded-circle"
                          width="13"
                          height="13"
                        />
                      </div>
                      <div className="team-member-name">
                        <td>장지인</td>
                      </div>
                    </div>
                  </td>
                  <td>팀장</td>
                  <td>기술지원 2팀</td>
                  <td>010-2350-9845</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">2</td>
                  <td>
                    <div className="team-list-flex">
                      <div className="team-list">
                        <img
                          src="../img/widget-table-pic1.jpg"
                          alt="user"
                          className="rounded-circle"
                          width="13"
                          height="13"
                        />
                      </div>
                      <div className="team-member-name">
                        <td>장지인</td>
                      </div>
                    </div>
                  </td>
                  <td>팀장</td>
                  <td>기술지원 2팀</td>
                  <td>010-2350-9845</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">3</td>
                  <td>
                    <div className="team-list-flex">
                      <div className="team-list">
                        <img
                          src="../img/widget-table-pic1.jpg"
                          alt="user"
                          className="rounded-circle"
                          width="13"
                          height="13"
                        />
                      </div>
                      <div className="team-member-name">
                        <td>장지인</td>
                      </div>
                    </div>
                  </td>
                  <td>팀장</td>
                  <td>기술지원 2팀</td>
                  <td>010-2350-9845</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">4</td>
                  <td>
                    <div className="team-list-flex">
                      <div className="team-list">
                        <img
                          src="../img/widget-table-pic1.jpg"
                          alt="user"
                          className="rounded-circle"
                          width="13"
                          height="13"
                        />
                      </div>
                      <div className="team-member-name">
                        <td>장지인</td>
                      </div>
                    </div>
                  </td>
                  <td>팀장</td>
                  <td>기술지원 2팀</td>
                  <td>010-2350-9845</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
                <tr>
                  <td scope="row">5</td>
                  <td>
                    <div className="team-list-flex">
                      <div className="team-list">
                        <img
                          src="../img/widget-table-pic1.jpg"
                          alt="user"
                          className="rounded-circle"
                          width="13"
                          height="13"
                        />
                      </div>
                      <div className="team-member-name">
                        <td>장지인</td>
                      </div>
                    </div>
                  </td>
                  <td>팀장</td>
                  <td>기술지원 2팀</td>
                  <td>010-2350-9845</td>
                  <td>
                    <input type="checkbox" />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="detail_modal_btn">
              <input
                type="button"
                value="배정"
                className="detail_modal_btn_show"
                onClick={() => {
                  alert("배정 완료");
                  setModalIsOpen(false);
                }}
              />
              <input
                type="button"
                value="취소"
                className="detail_modal_btn_close"
                onClick={() => setModalIsOpen(false)}
              />
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default EnL_TeamassingmentModal;