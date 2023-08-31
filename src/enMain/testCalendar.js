import React from "react";
import Calendar from "@toast-ui/react-calendar";
import "@toast-ui/calendar/dist/toastui-calendar.min.css";

import "tui-date-picker/dist/tui-date-picker.css";
import "tui-time-picker/dist/tui-time-picker.css";
/* import "./EnMain.css"; */

class TestCalendar extends React.Component {
  constructor(props) {
    super(props);
    this.calendarRef = React.createRef();
  }

  // ---------- Instance method ---------- //

  // 다음 주로 이동하는 버튼
  handleClickNextButton = () => {
    const calendarInstance = this.calendarRef.current.getInstance();

    calendarInstance.next();
  };

  // 한 주 스케줄 보기    ( defaultView = month 로 수정해놓았습니다 )
  weekChangeButton = () => {
    const calendarInstance = this.calendarRef.current.getInstance();

    calendarInstance.changeView("week", true);
  };

  // ---------- Event ---------- //

  // week 상태에서 요일 클릭
  handleClickDayname = (ev) => {
    console.group("onClickDayname");
    console.log(ev.date);
    console.groupEnd();
  };

  beforeCreateSchedule = (ev) => {
    console.group("onbeforeCreateSchedule");
    console.log(ev.date);
    console.groupEnd();
  };

  render() {
    const selectedView = "month"; // default view
    /* const calendarHeight = "600px";
    const calendarWidth = "600px"; */

    //인스턴스 생성
    const container = document.getElementById("calendar");
    const options = {
      defaultView: "month",
      timezone: {
        zones: [
          {
            timezoneName: "Asia/Seoul",
            displayLabel: "Seoul",
          },
        ],
      },
      calendars: [
        {
          id: "cal1",
          name: "김짱수 ",
          backgroundColor: "#03bd9e",
        },
        {
          id: "cal2",
          name: "김정수",
          backgroundColor: "#00a9ff",
        },
      ],
    };

    const calendar = new Calendar(container, options);

    return (
      <>
        <div
          className="wrap-calender"
          style={{
            width: "600px",
            height: "600px",
            transform: "translate(10px, 100px)",
            margin: "0 auto",
          }}
        >
          <button onClick={this.weekChangeButton}>Week</button>
          <Calendar
            ref={this.calendarRef}
            onClickDayname={this.handleClickDayname}
            onbeforeCreateSchedule={this.beforeCreateSchedule}
            calendars={[]}
            disableDblClick={true}
            disableClick={false}
            isReadOnly={false}
            schedules={[]}
            scheduleView
            taskView
            template={{
              milestone(schedule) {
                return `<span style="color:#fff;background-color: ${schedule.bgColor};">${schedule.title}</span>`;
              },
              milestoneTitle() {
                return "Milestone";
              },
              allday(schedule) {
                return `${schedule.title}<i class="fa fa-refresh"></i>`;
              },
              alldayTitle() {
                return "All Day";
              },
            }}
            theme="" // 어두운 테마 사용가능
            timezones={[
              {
                timezoneOffset: 540,
                displayLabel: "GMT+09:00",
                tooltip: "Seoul",
              },
            ]}
            useDetailPopup
            useCreationPopup
            view={selectedView} // You can also set the `defaultView` option.
            week={{
              daynames: ["일", "월", "화", "수", "목", "금", "토"],
              showTimezoneCollapseButton: true,
              timezonesCollapsed: true,
            }}
            month={{
              daynames: ["일", "월", "화", "수", "목", "금", "토"],
              //narrowWeekend: true // 토, 일은 사이즈 작게
            }}
          />
          <button onClick={this.handleClickNextButton}>Go next!</button>

          <div
            className="container-fluid"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "120px",
            }}
          >
            <div id="calendar" class="fc fc-unthemed fc-ltr"></div>
            <div class="fc-toolbar fc-header-toolbar"></div>

            <div id="schedule">
              <table>
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
        </div>
      </>
    );
  }
}

export default TestCalendar;
