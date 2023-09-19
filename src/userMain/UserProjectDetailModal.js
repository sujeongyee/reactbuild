import React, { useEffect, useState } from "react";
import Modal from "react-modal";
import "../enMain/EnMain.css";
import "./User.css";
import axios from "axios";

function UserProjectDetailModal({ projectData }) {
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
      <button onClick={() => setModalIsOpen(true)}>
        {projectData.server_name}
      </button>
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
                <td>{projectData.pro_name}</td>
              </tr>
              <tr>
                <th>담당 엔지니어 팀</th>
                <td>{projectData.team_id}</td>
              </tr>
              <tr>
                <th>담당 엔지니어 이름</th>
                <td>{projectData.eng_name}</td>
              </tr>
              <tr>
                <th>담당 엔지니어 연락처</th>
                <td>{projectData.eng_phone}</td>
              </tr>
              <tr>
                <th>작업일자</th>
                <td>{projectData.work_date}</td>
              </tr>
              <tr>
                <th>작업분류</th>
                <td>{projectData.work_division}</td>
              </tr>
              <tr>
                <th>작업시간</th>
                <td>{projectData.work_time}</td>
              </tr>
              <tr>
                <th>CPU 사용량</th>
                <td>{projectData.work_cpu}</td>
              </tr>
              <tr>
                <th>RAM 사용량</th>
                <td>{projectData.work_ram}</td>
              </tr>
              <tr>
                <th>HDD 사용량</th>
                <td>{projectData.work_hdd}</td>
              </tr>
              <tr>
                <th>상태</th>
                <td>{projectData.work_status}</td>
              </tr>

              <tr>
                <th>작업내용</th>
                <td>{projectData.work_note}</td>
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

export default UserProjectDetailModal;
