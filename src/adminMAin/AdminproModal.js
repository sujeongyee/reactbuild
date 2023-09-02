import React, { useState } from "react";
import Modal from "react-modal";
import './Admin.css';

function AdminproModal(props){

  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const customStyles = {
    content: {
      top: "55%",
      left: "60%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "100%", // Adjust the width as needed
      maxHeight: "85%", // Adjust the height as needed
      overflow: "auto", // Enable scrolling if content overflows
      backgroundColor: "#f9f9fd",
      zIndex:'0'
    },
  };

  

  return (
    <>
      <button onClick={() => setModalIsOpen(true)}>{props.name}</button>
      <Modal
        /* className="modal-content"
        overlayClassName="modal-overlay" */
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className="detail_modal_container team-check">
          <h2>팀 배정하기</h2>
          <hr/>
          <span>팀 리스트</span>
          <br/>
          <div>
          <span>a팀</span><input type="checkbox"></input>
          </div>
          <div>
          <span>b팀</span><input type="checkbox"></input>
          </div>
          <div>
          <span>c팀</span><input type="checkbox"></input>
          </div>
          <div>
          <span>d팀</span><input type="checkbox"></input>
          </div>
          <div className="detail_modal_container_inner">
            
            <div className="detail_modal_button">
              <input
                type="button"
                value="배정하기"
                className="detail_modal_button_print"
                onClick={()=>{alert('배정 완료');setModalIsOpen(false)}}
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

export default AdminproModal