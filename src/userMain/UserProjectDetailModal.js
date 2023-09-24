import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import "../enMain/EnMain.css";
import "./User.css";
import axios from "axios";

function UserProjectDetailModal({ projectDetailList }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  console.log(projectDetailList)
  const printableAreaRef = useRef(null);

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

   //모달창 인쇄하기
   const printPageArea = () => {
    const printContent = printableAreaRef.current.innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = printContent;
    window.print();
    window.location.reload();
    document.body.innerHTML = originalContent;
    console.log("인쇄 버튼 클릭됨");
  };


  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>
        {projectDetailList.pro_name}
      </button>

      <Modal
        /* className="modal-content"
        overlayClassName="modal-overlay" */
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className="detail_modal_container" ref={printableAreaRef}>
          <h2>작업 상세보기</h2>
          <div className="detail_modal_container_inner">
            <table className="detail_modal_table">
              <tr>
                <th>프로젝트명</th>

                <td>{projectDetailList.pro_name}</td>
              </tr>
              <tr>
                <th>담당 엔지니어 팀</th>
                <td>{projectDetailList.team_id}</td>
              </tr>
              <tr>
                <th>담당 엔지니어 이름</th>
                <td>{projectDetailList.eng_name}</td>
              </tr>
              <tr>
                <th>담당 엔지니어 연락처</th>
                <td>{projectDetailList.eng_phone}</td>
              </tr>
              <tr>
                <th>작업일자</th>
                <td>{projectDetailList.work_date}</td>
              </tr>
              <tr>
                <th>작업분류</th>
                <td>{projectDetailList.work_division}</td>
              </tr>
              <tr>
                <th>작업시간</th>
                <td>{projectDetailList.work_time}</td>
              </tr>
              <tr>
                <th>CPU 사용량</th>
                <td>{projectDetailList.work_cpu}</td>
              </tr>
              <tr>
                <th>RAM 사용량</th>
                <td>{projectDetailList.work_ram}</td>
              </tr>
              <tr>
                <th>HDD 사용량</th>
                <td>{projectDetailList.work_hdd}</td>
              </tr>
              <tr>
                <th>상태</th>
                <td>{projectDetailList.work_status}</td>
              </tr>

              <tr>
                <th>작업내용</th>

                <td>{projectDetailList.work_note}</td>
              </tr>
            </table>
            <div className="detail_modal_button">
              <input
                type="button"
                onClick={printPageArea}
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
