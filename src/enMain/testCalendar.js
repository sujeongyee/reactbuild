import React from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import EnCalendar from "./EnCalendar";



function TestCalendar() {




  
  return (
    <>
     <div className="page-wrapper" >
      <div className="container-fluid">
        <div className="row calArea" style={{width: "600px", height: "500px", float: "left"}}>
          <div className="col-md-12">
            <div className="card">
              <div className="">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="card-body b-l calender-sidebar">
                      <FullCalendar
                        plugins={[dayGridPlugin]} // DayGrid 플러그인을 사용합니다.
                        initialView="dayGridMonth" // 초기 뷰 설정 (월 단위)
                        events={[
                          // 이벤트 데이터 배열을 여기에 추가
                          { title: 'Event One', date: '2023-09-01' },
                          { title: 'Event Two', date: '2023-09-05' },
                          { title: 'Event Three', date: '2023-09-15' },
                          { title: 'Event Four', date: '2023-09-20' },
                        ]}
                        />
                    </div>
                  </div>
                  <div className="col-lg-3 border-end pr-0">
                  </div>
                </div>
              </div>
            </div>
          </div>
         </div>
           <div id="schedule" style={{width: "600px" ,float: "right"}} >
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
      </div>
    </>
  );
}

export default TestCalendar;
