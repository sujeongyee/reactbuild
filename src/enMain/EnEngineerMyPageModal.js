import React, { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import "../enMain/EnMain.css";
import "../userMain/User.css";
import axios from "axios";

import base64 from 'base-64';
function EnEngineerMyPage() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
    const token=localStorage.getItem("token");
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
      backgroundColor: "#f9f9fd"
    },
  };
  const fileInputRef = useRef(null);
const changMyImg=async(e)=>{
    // e.preventDefault();
    fileInputRef.current.click();
   
}
useEffect(()=>{




},[])
const [tempImage, setTempImage] = useState(null);

const [profileImg,setProfileImg]=useState('');
const handleFileChange = async(e) => {
    // 선택된 파일을 처리합니다.

    const selectedImage = e.target.files[0];
    const imageUrl = URL.createObjectURL(selectedImage);
    setTempImage(imageUrl);
    // const selectedFile = e.target.files[0];
    // if( selectedFile.size / 1000000 > 50) {
    //     alert("파일은 최대 50MB이하만 허용됩니다");
    //     return;
    // }
    // if (selectedFile) {
    //     const fileName = selectedFile.name;
    //     const validExtensions = ['jpg', 'jpeg', 'png'];
    //     const fileExtension = fileName.split('.').pop().toLowerCase();
    //     let payload = token.substring(token.indexOf('.') + 1, token.lastIndexOf('.'));
    //     console.log("순서 2")
    //     let dec = JSON.parse(base64.decode(payload));
    //     // 파일 확장자가 유효한지 확인합니다.
    //     if (validExtensions.includes(fileExtension)) {

    //         const userId=dec.sub;
    //         let formData=new FormData();
    //         formData.append('file_data',selectedFile);
    //         formData.append('userId', userId);
    //         const config = {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             }
    //         };
    //         console.log(userId)
    //        const response= axios.post('/api/cloudUpload',formData,config)
    //         console.log(response.data)
    //        setProfileImg(response.data)
    //     } else {
    //       // 유효하지 않은 파일 확장자인 경우 사용자에게 알립니다.
    //       alert('jpg, jpeg, png 파일만 업로드 가능합니다.');
    //       // 선택한 파일을 초기화합니다.
    //       e.target.value = '';
    //     }
    //   }
    };

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>김아무개</button>
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
                  {tempImage && <img src={tempImage} alt="Temporary Preview" 
                      className="rounded-circle profileImage"/>}
                     <div class="cross-icon"></div>
                     <input type="file" ref={fileInputRef} style={{ display: 'none' }}onChange={handleFileChange} />
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

export default EnEngineerMyPage;
