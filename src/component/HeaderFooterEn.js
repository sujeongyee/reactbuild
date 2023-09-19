import { Fragment, useState } from "react"
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom"
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
import axios from "axios";

function HeaderFooterEn() {
    const [bellModal, setbellModalIsOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const ms = {
        textDecoration: 'none',
        borderRadius: ' 0 60px 60px 0',
        background: '#2ac661',
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
        
      };

    const handleClick = (e) => {
        $(e.currentTarget).toggleClass("active")
        $(e.currentTarget).next().toggleClass("in")
    }
    const user_id = 'customer1';
  const [alarmList, setAlarmList] = useState([]);
  const [firstAlarm, setFirstAlarm] = useState([]);

  useEffect(() => {
    if (user_id !== '') {
      axios.get('/api/main/alarm/getAlarmList', {
        params: { user_id: user_id }
      })
        .then(response => {
          setAlarmList(response.data)
          setFirstAlarm(response.data)
          console.log(alarmList)
        })
        .catch(err => { alert('에러') })
    }
  }, [user_id]);

  const getAllAlarm = (event) => {
    const click = document.getElementById('allorsome');
    if(click.innerHTML === '모든 알람 보기'){
      if (user_id !== null) {
        axios.get('/api/main/alarm/getAllAlarm', {
          params: {
            user_id: user_id
          }
        })
          .then(response => {
            setAlarmList(response.data)
            console.log(alarmList)
          })
          .catch(err => { alert('에러') })
      }
      click.innerHTML = '안 읽은 알람만 보기';
    }else{
      setAlarmList(firstAlarm);
      click.innerHTML='모든 알람 보기'
    }
    
  }
  const clickAlarmno = (alarmNum, event) => {

    if (event.currentTarget.innerHTML === '안읽음') {
      event.currentTarget.innerHTML = '읽음'
      axios.post(('/api/main/alarm/changeAlarm'), { alarmNum: alarmNum })
      alert('알람을 확인 했습니다.')
    }
  }


    return (


        <Fragment>
        <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
            <div className="header">
                <nav className="navbar top-navbar navbar-expand-lg navbar-light">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            <a href="index.html"> 기술지원 A팀 </a>
                        </div>



                    </div>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav float-end">
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle pl-md-3 position-relative" onClick={() => setbellModalIsOpen(true)} id="bell" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span>
                                        <BellIcon className="feather feather-bell svg-icon" />
                                    </span>
                                    <span style={{backgroundColor:'#2ac661'}}className="badge text-bg-primary notify-no rounded-circle">5</span>
                                </button>
                                <Modal className="bell-content" overlayClassName="bell-overlay" isOpen={bellModal} onRequestClose={() => setbellModalIsOpen(false)}>

                    {alarmList.map((list, index) => {
                      // Timestamp 문자열을 Date 객체로 파싱
                      const dateObject = new Date(list.alarm_date);

                      // Date 객체를 "yyyy/MM/dd HH:mm" 형식으로 변환
                      const formattedDate = `${dateObject.getFullYear()}/${String(dateObject.getMonth() + 1).padStart(2, '0')
                        }/${String(dateObject.getDate()).padStart(2, '0')} ${String(dateObject.getHours()).padStart(2, '0')
                        }:${String(dateObject.getMinutes()).padStart(2, '0')}`;

                      const backgroundColor = list.alarm_check_yn === 'Y' ? 'rgb(197 197 197 / 8%)' : '';

                      return (
                        <div className="bell-link" key={index} style={{ backgroundColor: backgroundColor }}>

                          <div className="bell-middle alarm-list" style={{ backgroundColor: backgroundColor }}>
                            {/* <h5>{list.alarm_TYPE}</h5> */}
                            <p>{list.alarm_content}</p>
                            <span>{formattedDate}</span>
                            <span className="checkalarmbtn" style={{ marginLeft: '10px' }} onClick={(event) => clickAlarmno(list.alarm_num, event)}>{list.alarm_check_yn === 'Y' ? '읽음' : '안읽음'}</span>
                          </div>
                        </div>
                      );
                    })}

                    <button className="bell-more all-alarm" onClick={getAllAlarm}>

                      <storng id="allorsome"> 모든 알람 보기</storng>
                    </button>
                  </Modal>
                            </li>
                            <li className="nav-item dropdown">



                                <button className="nav-link dropdown-toggle" onClick={() => setModalIsOpen(true)} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="../img/baek.jpg" alt="user" className="rounded-circle" width="50" height="50" />

                                    <span className="ms-2 d-none d-lg-inline-block">
                                        <span></span>
                                        <span className="text-dark" style={{ fontWeight: 700, fontSize: '15px' }}>[대리]백승용</span>
                                        <Down />
                                    </span>
                                </button>
                                <Modal className="modal-content" overlayClassName="modal-overlay" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                                    <Link to="#" className="contentIcon">
                                        <div><ProfileIcon /></div>
                                        <span>프로필 보기</span>
                                    </Link>
                                   
                                    <Link to="#"onClick={logout}  className="contentIcon">
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
                                <Link to="/engineer" style={{background: '#2ac661'}} className="sidebar-link sidebar-link active">
                                    <HomeIcon />
                                    <span className="hide-menu">메인페이지</span>
                                </Link>
                            </li>
                            <li className="list-divider"></li>
                            <li className="nav-small-cap">
                                <span className="hide-menu"></span>
                            </li>

                            <li className="sidebar-item">

                                <a className='sidebar-link has-arrow ' onClick={handleClick} aria-expanded="false">
                                    <TeamIcon />
                                    <span className="hide-menu hide-list ">팀원보기</span>
                                </a>
                                <ul aria-expanded="false" className="collapse first-level base-level-line">
                                    <li class="sidebar-item">
                                        <NavLink className='sidebar-link ' to='/engineer/engineerList' style={({ isActive }) => isActive ? ms : undefined} >
                                            목록보기
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
                                    <BriefcaseIcon />
                                    <span className="hide-menu hide-list">프로젝트 관리</span>
                                </a>
                                <ul
                                    aria-expanded="false"
                                    className="collapse first-level base-level-line"
                                >
                                    <li class="sidebar-item">
                                        <NavLink
                                            className="sidebar-link "
                                            to="/engineer/newList"
                                            style={({ isActive }) => (isActive ? ms : undefined)}
                                        >

                                            내 프로젝트
                                        </NavLink>
                                    </li>
                                    <li class="sidebar-item">
                                        <NavLink
                                            className="sidebar-link "
                                            to="/engineer/inspectionList"
                                            style={({ isActive }) => (isActive ? ms : undefined)}>
                                            점검 목록
                                        </NavLink>
                                    </li>
                                    <li class="sidebar-item">
                                        <NavLink
                                            className="sidebar-link "
                                            to="/engineer/workDetail"
                                            style={({ isActive }) => (isActive ? ms : undefined)}
                                        >

                                            점검 세부사항 등록
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li className="sidebar-item">
                                <a className='sidebar-link has-arrow' href="javascript:void(0)" onClick={handleClick} aria-expanded="false">
                                    <BarChartIcon />
                                    <span className="hide-menu hide-list" >공지사항</span>
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
                                    <BoxIconEn />
                                    <span className="hide-menu hide-list" >문의사항</span>
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

export default HeaderFooterEn