import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import Modal from "react-modal"; // react-modal import
function Calendar() {
  const [events, setEvents] = useState([
    // 초기 이벤트 데이터 배열
    {
      title: "점기점검",
      date: "2023-09-01",
      description: {
        점검종류: "정기점검",
        점검내용: "이러이런거 했습니다",
        "프로젝트 명": "프로젝트 이름",
      },
    },
    // 기존 이벤트 데이터 추가
  ]);

  const [isAddEventModalOpen, setIsAddEventModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: "",
    start: "",
    end: "",
    description: {
      점검종류: "",
      점검내용: "",
      "프로젝트 명": "",
    },
  });
  //   Modal.setAppElement('#root'); // 모달의 루트 요소 설정
  // 일정 추가 모달 열기
  const openAddEventModal = () => {
    setIsAddEventModalOpen(true);
  };
  ////
  // 일정 추가 모달 닫기
  const closeAddEventModal = () => {
    setIsAddEventModalOpen(false);
  };

  // 새로운 일정 추가
  const addEvent = () => {
    setEvents([...events, newEvent]);
    closeAddEventModal();
  };
  const Click = (e) => {
    console.log(e);
  };
  return (
    <div id="myCalender">
      <h1>내 일정 확인</h1>
      <button
        onClick={openAddEventModal}
        style={{ backgroundColor: "rgb(42, 198, 97)" }}
      >
        일정 추가
      </button>
      <FullCalendar
        plugins={[dayGridPlugin]}
        initialView="dayGridMonth"
        events={events}
        eventClick={Click}
      />

      <Modal
        className="modal-content"
        overlayClassName="modal-overlay"
        isOpen={isAddEventModalOpen}
        onRequestClose={closeAddEventModal}
      >
        <h2>일정 추가</h2>
        <input
          type="text"
          placeholder="제목"
          value={newEvent.title}
          onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="시작 날짜"
          value={newEvent.start}
          onChange={(e) => setNewEvent({ ...newEvent, start: e.target.value })}
        />
        <input
          type="text"
          placeholder="종료 날짜"
          value={newEvent.end}
          onChange={(e) => setNewEvent({ ...newEvent, end: e.target.value })}
        />
        {/* 추가 정보 입력 */}
        <input
          type="text"
          placeholder="점검종류"
          value={newEvent.description["점검종류"]}
          onChange={(e) =>
            setNewEvent({
              ...newEvent,
              description: {
                ...newEvent.description,
                점검종류: e.target.value,
              },
            })
          }
        />
        <input
          type="text"
          placeholder="점검내용"
          value={newEvent.description["점검내용"]}
          onChange={(e) =>
            setNewEvent({
              ...newEvent,
              description: {
                ...newEvent.description,
                점검내용: e.target.value,
              },
            })
          }
        />
        <input
          type="text"
          placeholder="프로젝트 명"
          value={newEvent.description["프로젝트 명"]}
          onChange={(e) =>
            setNewEvent({
              ...newEvent,
              description: {
                ...newEvent.description,
                "프로젝트 명": e.target.value,
              },
            })
          }
        />
        {/* 추가 정보 입력 */}
        <button onClick={addEvent}>추가</button>
      </Modal>
    </div>
  );
}

export default Calendar;
