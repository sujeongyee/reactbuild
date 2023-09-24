import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import "../enMain/EnMain.css";
import "../userMain/User.css";
import axios from "axios";

import base64 from "base-64";

function EnEngineerMyPage(props) {
  const [loading, setLoading] = useState(true);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const token = localStorage.getItem("token");
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
  const fileInputRef = useRef(null);
  const changMyImg = async (e) => {
    // e.preventDefault();
    fileInputRef.current.click();
  };
  useEffect(() => {}, []);
  const [tempImage, setTempImage] = useState(null);

  const [profileImg, setProfileImg] = useState("");
  const handleFileChange = async (e) => {
    // 선택된 파일을 처리합니다.

    const selectedImage = e.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    setTempImage(imageUrl);
  };

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>{props.engName}</button>
      <Modal
        /* className="modal-content"*/
        overlayClassName="modal-overlay"
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
                  <div className="me-3 circle-image" onClick={changMyImg}>
                    
                      <img
                        src="https://project-buket.s3.amazonaws.com/profile.jpg"
                        alt="Temporary Preview"
                        className="rounded-circle profileImage"
                      />
                    
                    <div class="cross-icon"></div>
                    <input
                      type="file"
                      ref={fileInputRef}
                      style={{ display: "none" }}
                      onChange={handleFileChange}
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
              {/* <input
                type="button"
                value="수정"
                className="detail_modal_button_print"
               /> */}

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

export default EnEngineerMyPage;