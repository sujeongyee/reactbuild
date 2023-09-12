import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Calendar from '@toast-ui/react-calendar';
import '@toast-ui/calendar/dist/toastui-calendar.min.css'; // Calendar 스타일
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import Modal from "react-modal";

function EnglEngDetail() {
  const { eng_enid } = useParams();
  const [list, setList] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const customStyles = {
    content: {
      top: "55%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      maxHeight: "85%", // Adjust the height as needed
      overflow: "auto", // Enable scrolling if content overflows
      borderRadius: "15px",
      backgroundColor: "#f9f9fd",
      zIndex: 9999, // 높은 z-index 값 설정
    },
  };

  useEffect(() => {
    axios.get(`/engleader/getEngInfo/${eng_enid}`)
      .then(response => {
        setList(response.data.serverList);
        console.log(response.data);
      });
  }, []);

  const handleEventClick = (event) => {
    console.log(event)
    setSelectedEvent(event.event);
    setModalIsOpen(true);
  };

  //   const array = [];
  // homeList.map((item: any) =>
  //     array.push({
  //       title: item.HOUSE_NM,
  //       date: item.RCEPT_ENDDE,
  //       id: item.PBLANC_NO,
  //     }),
  // );

  const events = [
    // 초기 이벤트 데이터 배열
    {
      title: '정기점검',
      start: '2023-09-02',
      end: '2023-09-06',
      description: {
        '점검종류': '정기점검',
        '점검내용': '이러이런거 했습니다',
        '프로젝트 명': '프로젝트 이름',
      },
    },
    {
      title: '장애대응',
      start: '2023-09-05',
      end: '2023-09-07',
      color: 'rgb(240 102 102)'
    },
    {
      title: '수정생일',
      start: '2023-11-10',
      end: '2023-11-13'
    }
    // 기존 이벤트 데이터 추가
  ];

  return (
    <>
    <div className='page-wrapper englschedule'>
      <div>
        <h3>담당 서버 리스트</h3>
      </div>

      <div className='englCalendar'>
        <h3>일정 확인</h3>
        <div id="calendar" style={{ height: '800px' }}>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            eventClick={(event) => handleEventClick(event)}
          />




          {selectedEvent && (
            <div>
              <h2>{selectedEvent.title}</h2>
              <p>Start: {selectedEvent.start.toISOString()}</p>
              <p>End: {selectedEvent.end.toISOString()}</p>
              {/* 다른 이벤트 정보 표시 */}
            </div>
          )}


        </div>


      </div>
      
    </div>
      <div className="fc-event fc-event-start fc-event-end fc-event-past fc-daygrid-event fc-daygrid-block-event fc-h-event">
      <Modal

        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={customStyles}
      >
        <div className="sche_modal">
          내용~
        </div>
      </Modal>
      </div>
      </>
  );
}

export default EnglEngDetail;
