
import $ from 'jquery';
import './EnMain.css'
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import EnCalendar from "./EnCalendar";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOn, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import List from "./List"
import Calendar from "./Calendar"


function EnMain() {
    const [isToggled, setToggled] = useState(true);

    const toggleButton = () => {
        setToggled(!isToggled);
    };
    return (

        <>
            <div className="page-wrapper" >
                <div className="container-fluid">

                    <div className="card">
                        <div className="">
                            <div className="row">
                                <div className="col-lg-9">
                                    <div className="card-body b-l calender-sidebar">
                                        <div className='row'>
                                        <b>
                                        <button onClick={toggleButton}>
                                            <FontAwesomeIcon style={{fontSize:'37px', color:'rgb(42, 198, 97)'}} icon={isToggled ? faToggleOn : faToggleOff} />
                                        </button>
                                        <p>{isToggled ? '달력으로 보기' : '목록으로 보기'}</p>
                                        </b>
                                        </div>
                                        {isToggled ? <Calendar /> : <List />}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </>

    )

}

export default EnMain