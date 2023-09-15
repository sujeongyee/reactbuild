import React, { useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import "../enMain/EnMain.css";
import "../enMain/EnCss.css";
import "../userMain/User.css";
import axios from "axios";
import { Line } from "react-chartjs-2";

function EnServerDetailModal(props, areaID) {

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const[data, setData] = useState([]);

  const printableAreaRef = useRef(null);




  useEffect(()=>{
    if(modalIsOpen){
      console.log('여기'+props.serverName)
      console.log('이건 가니'+ props.serverId )
      //axios.post('/api/main/engineer/inspectionList2',{serverName:props.serverName})
      axios.post('/api/main/engineer/inspectionList2',{serverId:props.serverId})
      .then(response => {
        setData(response.data);
        console.log(response.data);
        
      })
      .catch((error)=>{
        console.log(error)
      })

    }
  },[modalIsOpen]);

  const customStyles = {
    content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxWidth: "100%", 
      maxHeight: "85%", 
      overflow: "auto", 
      borderRadius: "15px",
      backgroundColor: "#f9f9fd",
    },
  };



  const openModal = () => {
    setModalIsOpen(true);
  }

 

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

   const closeModal = () => {
    setModalIsOpen(false);
  }


  // const printArea = () => {
  //   if (!isPrinting) {
  //     setInitBody(document.body.innerHTML);
  //     document.body.innerHTML = idPrintRef.current.innerHTML;
  //     setIsPrinting(true);
  
  //     // window.print()를 호출하여 인쇄 다이얼로그를 열어준다
  //     window.print();
  
  //     // window.print() 호출 이후 인쇄 다이얼로그가 나타나고 닫히는 시점을 감지하여 복구 작업을 수행한다
  //     window.onafterprint = () => {
  //       document.body.innerHTML = initBody;
  //       setIsPrinting(false);
  //     };
  //   }
  // };
  


  return (
    <>
      <button onClick={openModal}>{props.serverName}</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="detail_modal_container" ref={printableAreaRef}  id={areaID} >
          <h2>서버 상세보기</h2>
          <div className="detail_modal_container_inner" >
            
            <table className="detail_modal_table" style={{margin: '0 auto'}}>
                <tr>
                  <th>프로젝트명</th>
                  <td>
                    <input type="text" value={props.proName} readOnly />
                  </td>
                </tr>
                <tr>
                  <th>서버이름</th>
                  <td>
                    <input type="text" value={props.serverName} readOnly />
                  </td>
                </tr>
                <tr>
                  <th>IP주소</th>
                  <td>
                    <input type="text"  value={data.IP_ADDRESS} readOnly />
                  </td>
                </tr>
                <tr>
                  <th>운영체제</th>
                  <td>
                    <input type="text" value={data.OPERATING_SYSTEM} readOnly />
                  </td>
                </tr>
                <tr>
                  <th>CPU</th>
                  <td>
                    <input type="text" value={data.CPU} readOnly />
                  </td>
                </tr>
                <tr>
                  <th>RAM</th>
                  <td>
                    <input type="text" value={data.RAM} readOnly />
                  </td>
                </tr>
                <tr>
                  <th>HDD</th>
                  <td>
                    <input type="text" value={data.DISK_CAPACITYGB} readOnly />
                  </td>
                </tr>
            </table>
            <hr/>
            <h2>과거 점검 이력</h2>
            
            <table className="pastInspectionHistoryList" style={{margin: '0 auto', marginBottom: '20px'}}>
              <thead>
                <tr>
                  <th>No.</th>
                  <th>작업분류</th>
                  <th>점검일자</th>
                  <th>담당 엔지니어</th>
                  <th>CPU</th>
                  <th>RAM사용량</th>
                  <th>HDD사용량</th>
                  <th>상태</th>
                </tr>
              </thead>
              <thead>
                {data.list && data.list.map((workInfo2, index)=>(

                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{workInfo2.work_division}</td>
                  <td>{workInfo2.work_date}</td>
                  <td>{props.engName}</td>
                  <td>{workInfo2.work_cpu}</td>
                  <td>{workInfo2.work_ram}</td>
                  <td>{workInfo2.work_hdd}</td>
                  <td>{workInfo2.work_status}</td>
                </tr>
                  ))}

                
                
              </thead>
            </table>
              
            

            <div className="detail_modal_button">
              <input type="button" onClick={printPageArea} value="인쇄하기" className="detail_modal_button_print"/>
              {/* <button onClick={printPageArea}  className="detail_modal_button_print">인쇄하기</button> */}

              <input type="button"  value="목록보기" className="detail_modal_button_close" onClick={() => setModalIsOpen(false)}/>
            </div>
          </div>
        </div>

      </Modal>
    </>
  )

}
export default EnServerDetailModal;