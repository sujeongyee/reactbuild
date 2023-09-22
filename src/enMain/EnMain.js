
import $ from 'jquery';
import './EnMain.css'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import EnCalendar from "./EnCalendar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Calendar from "./Calendar"
import Loading from '../loding/Loding';
import DataTest from '../data/DataTest';


function EnMain({checkPermission}) {
  const [loading, setLoading] = useState(true);


  const [isToggled, setToggled] = useState(true);

  const toggleButton = () => {
    setToggled(!isToggled);
  };
  return (

    <>
      {/* {loading ? <Loading /> : null} */}
      <div className="page-wrapper" >
        <div className='eng-main-cal'>
          <div className='row tog-btn'>
            <b>
              <button onClick={toggleButton} className='tog-btn'>
                {isToggled ? '일정 확인하기' : '서버상태 확인하기'} <FontAwesomeIcon style={{ fontSize: '37px', color: 'rgb(42, 198, 97)' }} icon={isToggled ? faToggleOn : faToggleOff} />
              </button>

            </b>
          </div>
          {isToggled ? <Calendar /> : <DataTest id={checkPermission.sub}/>}
        </div>
      </div>



    </>

  )

}

export default EnMain