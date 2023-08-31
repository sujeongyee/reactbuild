import React from "react";
/* Node.js 환경에서 ES6 모듈 */
import Calendar from '@toast-ui/react-calendar';
/* Node.js 환경에서 ES6 모듈 */
import '@toast-ui/calendar/dist/toastui-calendar.min.css'; // Calendar 스타일

// If you use the default popups, use this.
import 'tui-date-picker/dist/tui-date-picker.css';
import 'tui-time-picker/dist/tui-time-picker.css';
import './EnMain.css'
import './EnCalendar.css'


function testCalendar() {

  

  const calendars = [
    {
      id: '0',
      name: '김짱수',
      backgroundColor: '#9e5fff',
      borderColor: '#9e5fff',
    },
    {
      id: '1',
      name: '유현주',
      backgroundColor: '#00a9ff',
      borderColor: '#00a9ff',
    },
    
  ];
  const calendarRef = React.createRef();

  const handleTodayClick = () => {
    const calendarInstance = calendarRef.current.getInstance();
    const today = new Date();

    calendarInstance.today();
    calendarInstance.setDate(today);
  };

  const handlePrevMonthClick = () => {
    const calendarInstance = calendarRef.current.getInstance();
    const currentDate = calendarInstance.getDate();
    const prevMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);

    calendarInstance.setDate(prevMonthDate);
  };

  const handleNextMonthClick = () => {
    const calendarInstance = calendarRef.current.getInstance();
    const currentDate = calendarInstance.getDate();
    const nextMonthDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);

    calendarInstance.setDate(nextMonthDate);
  };



  const initialEvents = [
    {
      id: '1',
      calendarId: '1-1',
      title: '유지보수',
      category: 'time',
      start: '2023-08-28T12:00:00',
      end: '2023-08-31T13:30:00',
    },
    {
      id: '2',
      calendarId: '김정수',
      title: '장애대응',
      category: 'time',
      start: '2023-09-06T15:00:00',
      end: '2023-09-08T15:30:00',
    },
  ];

  const onAfterRenderEvent = (event) => {
    console.log(event.title);
  };


  const handleBeforeCreateSchedule = (event) => {
    const { calendarId, start, end, title, isAllDay } = event;
    // 필요한 정보 추출

    // 이벤트 핸들러 로직 구현
    // 예: 서버에 일정 추가 요청을 보내거나 상태 업데이트 등
    console.log("일정 생성 전 이벤트 발생");
    console.log("calendarId:", calendarId);
    console.log("start:", start);
    console.log("end:", end);
    console.log("title:", title);
    console.log("isAllDay:", isAllDay);

  };




  return (
    <> 
    <div>
    <div class="buttonArea" style={{margin: '0 auto', marginLeft: '180px'}}>
    <button class="button is-rounded today">Today</button>
            <button class="button is-rounded prev">
              <img alt="prev" src="./images/ic-arrow-line-left.png" srcset="
                  ./images/ic-arrow-line-left@2x.png 2x,
                  ./images/ic-arrow-line-left@3x.png 3x"/>
            </button>
            <button class="button is-rounded next">
              <img alt="prev" src="./images/ic-arrow-line-right.png" srcset="
                  ./images/ic-arrow-line-right@2x.png 2x,
                  ./images/ic-arrow-line-right@3x.png 3x"/>
            </button>
      <button onClick={handleTodayClick} class="button is-rounded today" /*style={{border: '1px solid #000', marginTop: '150px', marginLeft: '300px', marginRight: '10px', padding: '10px'}}*/>TODAY</button>
      <button onClick={handlePrevMonthClick} style={{border: '1px solid #000', marginTop: '150px', marginRight: '10px', padding: '10px'}}>PREV</button>
      <button onClick={handleNextMonthClick} style={{border: '1px solid #000', marginTop: '150px', marginRight: '10px', padding: '10px'}}>NEXT</button>
      
      <p style={{fontSize: '30px', display: 'inline' , marginLeft: '10px'}}>{new Date().getMonth() + 1}월</p>
    </div>
  

    <div class="calendarArea">
      <Calendar
        view="month"
        month={{
          dayNames: ['일', '월', '화', '수', '목', '금', '토'],
          visibleWeeksCount: 4,
          isAlways6Weeks: false,
        }}
        calendars={calendars}
        events={initialEvents}
        onAfterRenderEvent={onAfterRenderEvent}
        usageStatistics={false}
        useDetailPopup={true}
        useCreationPopup={true}
        ref={calendarRef}
        isReadOnly={false}
        theme={{

        }}
        onBeforeCreateSchedule={handleBeforeCreateSchedule}
        popup={{
          component: "scheduler",
        }}

      />
      </div>

      <div id="schedule" >
        <table style={{border: '1px solid #000'}} className="scheduleTable">
          <tr>
            <th>번호</th>
            <th>프로젝트</th>
            <th>담당 엔지니어</th>
            <th>팀</th>
          </tr>
          <tr>
            <td>1</td>
            <td>중앙정보처리학원</td>
            <td>김정수</td>
            <td>A팀</td>
          </tr>
          <tr>
            <td>2</td>
            <td>중앙정보처리학원</td>
            <td>유현주</td>
            <td>A팀</td>
          </tr>
        </table>
        </div>
    </div>
    </> 
  );
}

export default testCalendar