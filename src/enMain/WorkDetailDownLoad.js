import React, { useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import "../enMain/EnMain.css";
import "../enMain/EnCss.css";
import "../userMain/User.css";
import axios from "axios";
import { Line } from "react-chartjs-2";
import Loading from '../loding/Loding';

function WorkDetailDownLoad(props) {
  console.log(props);
  
  const [loading, setLoading] = useState(true);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  }

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


  const [WorkDetailData,setWorkDetailData]=useState('')
  const [file, setFile] = useState({})
  const [form, setForm] = useState({
    work_num: WorkDetailData.work_num,
    
  })  


  const getFile = async () => {
    const file_num = WorkDetailData.work_num

    const response = await axios.get(`/api/main/getPoto?user_id=${file_num}`)
    if (response.data === '파일 없음') {
        return;
    } else {
        setFile(response.data)
        return;
    }
}
  useEffect(() => {
    getFile();
  }, []);



  const down = async () => {

    const link = document.createElement('a')
    link.href = file.file_path
    link.download = file.file_name
    link.click()
}

  return (
    <>
      <button onClick={openModal}>다운로드</button>
      <Modal
        // overlayClassName="modal-overlay"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="detail_modal_container">
          <h2>파일 다운로드</h2>
          <div className="detail_modal_container_inner">
          <table
              className="workDetailDownLoadList"
              style={{ margin: "0 auto", marginBottom: "20px" }}
            >
              <thead>
                <tr>
                  <th>No.</th>
                  <th>파일이름</th>
                  <th>등록일자</th>
                  <th>등록인</th>
                  <th>다운로드받기</th>
                </tr>
              </thead>
              <thead>
                    <tr>
                      <td>{1}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>
                      {file.file_name != null ? <button onClick={down} className="fileDown" style={{ color: 'black' }}>{file.file_name}</button> : <button>파일이 없습니다</button>

}
                      </td>
                    </tr>
            
              </thead>
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
export default WorkDetailDownLoad;
