import { Fragment, useState , useEffect} from "react"
import { Link, NavLink, Outlet , useNavigate} from "react-router-dom"
import $ from 'jquery';
import './HeaderFooter.css'
import BellIcon from "../img/BellIcon";
import Down from "../img/ChevronDownIcon";
import HomeIcon from "../img/HomeIcon";
import BarChartIcon from "../img/BarCartIconEn";
import BoxIconEn from "../img/BoxIconEn";
import AirplayIcon from "../img/AirplayIcon";
import CalendarIcon from "../img/CalendarIcon";
import MessageSquareIcon from "../img/MessageSquareIcon";
import ProfileIcon from "../img/ProfileIcon";
import SettingsIcon from "../img/SettingsIcon";
import LogOutIcon from "../img/LogOutIcon";
import Modal from 'react-modal';
import TeamIcon from "../img/TeamIcon";
import BriefcaseIcon from "../img/BriefcaseIcon";
import '../engineerLeader/EngLeader.css';
import axios from "axios";

function HeaderFooterEnl(props) {

  console.log(props.name);
  const [bellModal, setbellModalIsOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const ms = {
    textDecoration: 'none',
    borderRadius: ' 0 60px 60px 0',
    background: 'rgb(44, 117, 70)',
    transition: 'ease-out .2s',
    height: '36px',
    color: 'white',
    fontSize: '16px'
  }
 
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    alert("로그아웃 되었습니다😎");
    navigate("/");
    window.location.reload();
  };


  const handleClick = (e) => {
    $(e.currentTarget).toggleClass("active")
    $(e.currentTarget).next().toggleClass("in")
  }

  const [alarmList, setAlarmList] = useState([]);

  useEffect(() => {
    const user_id = 'admin'
    axios.get(`/api/main/alarm/getAlarmList/${user_id}`)
      .then(response => {
        setAlarmList(response.data)
        console.log(alarmList)
      })
      .catch(err => { alert('에러') })


  }, []);

  const leader_id = 'eng_1';

  return (


    <Fragment>
      <div id="main-wrapper" className="englmain" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
        <div className="header">
          <nav className="navbar top-navbar navbar-expand-lg navbar-light">
            <div className="navbar-header">
              <div className="navbar-brand">
              <Link to="/engineerleader" style={{color:'black'}}>기술지원 2팀 </Link> 
              </div>



            </div>
            <div className="navbar-collapse collapse" id="navbarSupportedContent">
              <ul className="navbar-nav float-end">
                <li className="nav-item dropdown">
                  <button className="nav-link dropdown-toggle pl-md-3 position-relative" onClick={() => setbellModalIsOpen(true)} id="bell" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span>
                      <BellIcon className="feather feather-bell svg-icon" />
                    </span>
                    <span style={{ backgroundColor: 'rgb(44, 117, 70)' }} className="badge text-bg-primary notify-no rounded-circle">5</span>
                  </button>
                  <Modal className="bell-content" overlayClassName="bell-overlay" isOpen={bellModal} onRequestClose={() => setbellModalIsOpen(false)}>

                    {alarmList.map((list, index) => {
                      // Timestamp 문자열을 Date 객체로 파싱
                      const dateObject = new Date(list.alarm_DATE); 

                      // Date 객체를 "yyyy/MM/dd HH:mm" 형식으로 변환
                      const formattedDate = `${dateObject.getFullYear()}/${String(dateObject.getMonth() + 1).padStart(2, '0')
                        }/${String(dateObject.getDate()).padStart(2, '0')} ${String(dateObject.getHours()).padStart(2, '0')
                        }:${String(dateObject.getMinutes()).padStart(2, '0')}`;

                      return (
                        <Link to="#" className="bell-link" key={index}>
                          
                          <div className="bell-middle alarm-list">
                            <h5>{list.alarm_TYPE}</h5>
                            <p>{list.alarm_CONTENT}</p>
                            <span>{formattedDate}</span>
                          </div>
                        </Link>
                      );
                    })}

                    <Link to="#" className="bell-more all-alarm">
                      <storng> 모든 알람 확인하기</storng>
                    </Link>
                  </Modal>
                </li>
                <li className="nav-item dropdown">



                  <button className="nav-link dropdown-toggle" onClick={() => setModalIsOpen(true)} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="/img/ddu.jpg" alt="user" className="rounded-circle" width="50" height="50" />

                    <span className="ms-2 d-none d-lg-inline-block">
                      <span></span>
                      <span className="text-dark" style={{ fontWeight: 700, fontSize: '15px' }}>[팀장]박수정</span>
                      <Down />
                    </span>
                  </button>
                  <Modal className="modal-content" overlayClassName="modal-overlay" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                    <Link to="#" className="contentIcon">
                      <div><ProfileIcon /></div>
                      <span>프로필 보기</span>
                    </Link>
                    <Link to="#" className="contentIcon">
                      <div><SettingsIcon /></div>
                      <span>회원정보 수정</span>
                    </Link>
                    <Link to="#" onClick={logout} className="contentIcon">
                      <div><LogOutIcon /></div>
                      <span>로그아웃</span>
                    </Link>

                  </Modal>

                </li>
              </ul>


            </div>
          </nav>


        </div>
        <aside className="left-sidebar" data-sidebarbg="skin6">
          <div className="scroll-sidebar ps-container ps-theme-default" data-sidebarbg="skin6" data-ps-id="49c8c710-23b9-874c-d968-f904306f1d70">
            <nav className="sidebar-nav">
              <ul id="sidebarnav" className="in">
                <li className="sidebar-item selected">
                  <Link to="/engineerleader" style={{ background: 'rgb(44 117 70)' }} className="sidebar-link sidebar-link active">
                    <HomeIcon name="팀장"/>
                    <span className="hide-menu">메인페이지</span>
                  </Link>
                </li>
                <li className="list-divider"></li>
                <li className="nav-small-cap">
                  <span className="hide-menu"></span>
                </li>

                <li className="sidebar-item">

                  <a className='sidebar-link has-arrow ' onClick={handleClick} aria-expanded="false">
                    <TeamIcon name="팀장"/>
                    <span className="hide-menu hide-list engl_menu">팀원관리</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level base-level-line">
                    <li class="sidebar-item">
                      <NavLink className='sidebar-link ' to='/engineerleader/engineerList' style={({ isActive }) => isActive ? ms : undefined} >
                        목록보기
                      </NavLink>
                    </li>
                    <li class="sidebar-item">
                      <NavLink className='sidebar-link ' to={{ pathname: `/engineerleader/allSchedule/${leader_id}`}} style={({ isActive }) => isActive ? ms : undefined} >
                        팀원 일정보기
                      </NavLink>
                    </li>

                  </ul>

                </li>
                <li className="sidebar-item">
                  <a
                    className="sidebar-link has-arrow"
                    href="javascript:void(0)"
                    onClick={handleClick}
                    aria-expanded="false"
                  >
                    <BriefcaseIcon name="팀장" />
                    <span className="hide-menu hide-list engl_menu">클라이언트 서비스</span>
                  </a>
                  <ul
                    aria-expanded="false"
                    className="collapse first-level base-level-line"
                  >
                    <li class="sidebar-item">
                      <NavLink
                        className="sidebar-link "
                        to="/engineerleader/projectList"
                        style={({ isActive }) => (isActive ? ms : undefined)}
                      >

                        모든 프로젝트
                      </NavLink>
                    </li>
                    <li class="sidebar-item">
                      <NavLink
                        className="sidebar-link "
                        to="/engineerleader/clientList"
                        style={({ isActive }) => (isActive ? ms : undefined)}>
                        모든 고객사 정보
                      </NavLink>
                    </li>
                    
                  </ul>
                </li>
                <li className="sidebar-item">
                  <a className='sidebar-link has-arrow' href="javascript:void(0)" onClick={handleClick} aria-expanded="false">
                    <BarChartIcon name="팀장" />
                    <span className="hide-menu hide-list engl_menu" >공지사항</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level base-level-line">
                    <li class="sidebar-item">
                      <NavLink className='sidebar-link ' to='/engineer/annoList' style={({ isActive }) => isActive ? ms : undefined} >
                        공지사항 보기
                      </NavLink>

                    </li>
                  </ul>

                </li>





                <li className="sidebar-item">
                  <a className='sidebar-link has-arrow' href="javascript:void(0)" onClick={handleClick} aria-expanded="false">
                    <BoxIconEn name="팀장" />
                    <span className="hide-menu hide-list engl_menu " >문의사항</span>
                  </a>
                  <ul aria-expanded="false" className="collapse first-level base-level-line">
                    <li class="sidebar-item">
                      <NavLink className='sidebar-link ' to='/engineer/inQurylist' style={({ isActive }) => isActive ? ms : undefined} >
                        문의사항 목록
                      </NavLink>
                      <NavLink className='sidebar-link ' to='/engineer/inQurywrite' style={({ isActive }) => isActive ? ms : undefined} >
                        문의사항 작성하기
                      </NavLink>
                    </li>
                  </ul>

                </li>
              </ul>

            </nav>


          </div>

        </aside>

        <Outlet />

      </div>
    </Fragment>



  )

}

export default HeaderFooterEnl