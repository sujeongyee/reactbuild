function Calendar(){


    return(
        <>
        
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
        </>
    )
}

export default Calendar

