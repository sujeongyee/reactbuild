import "./InspectionList.css";
import "./EnMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToggleOn, faToggleOff } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import InspectionList from "./InspectionList";
import EndInsList from "./EndInsList";

function EnInspectionList() {
  const [isToggled, setToggled] = useState(true);

  const toggleButton = () => {
    setToggled(!isToggled);
  };
  return (
    <>
      {/* {loading ? <Loading /> : null} */}
      <div className="page-wrapper">
        <div className="container-fluid">
          <h3 className="page-title text-truncate text-dark font-weight-medium mb-1">
            점검목록
          </h3>

          <div className="card">
            <div className="">
              <div className="row">
                <div className="col-lg-9">
                  <div className="card-body b-l calender-sidebar">
                    <div className="row">
                      {/* <b>
                                        <button onClick={toggleButton}>
                                            <FontAwesomeIcon style={{fontSize:'37px', color:'rgb(42, 198, 97)'}} icon={isToggled ? faToggleOn : faToggleOff} />
                                        </button>
                                        <p>{isToggled ? '종료 목록 보기' : '진행중인 점검 목록 보기'}</p>
                                        </b> */}
                    </div>
                    {isToggled ? <InspectionList /> : <EndInsList />}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {isToggled ? <InspectionList /> : <EndInsList />}
        </div>
      </div>
    </>
  );
}

export default EnInspectionList;