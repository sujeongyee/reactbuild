import { Fragment, useState } from "react"
import { Link, NavLink, Outlet } from "react-router-dom"
import $ from 'jquery';
import './HeaderFooter.css'
import BellIcon from "../img/BellIcon";
import Down from "../img/ChevronDownIcon";
import HomeIcon from "../img/HomeIcon";
import FileTextIcon from "../img/FileTextIcon";
import BarChartIcon from "../img/BarCartIcon";
import BoxIcon from "../img/BoxIcon";
import AirplayIcon from "../img/AirplayIcon";
import CalendarIcon from "../img/CalendarIcon";
import MessageSquareIcon from "../img/MessageSquareIcon";
import ProfileIcon from "../img/ProfileIcon";
import SettingsIcon from "../img/SettingsIcon";
import LogOutIcon from "../img/LogOutIcon";
import Modal from 'react-modal';

function HeaderFooterAd() {

  
    const [bellModal, setbellModalIsOpen] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const ms={
        textDecoration: 'none', 
        background: 'linear-gradient(to right,#8971ea,#7f72ea,#7574ea,#6a75e9,#5f76e8)',
        borderRadius:' 0 60px 60px 0',

    }


    const handleClick = (e) => {
        $(e.currentTarget).toggleClass("active")
        $(e.currentTarget).next().toggleClass("in")
    }
    return (


        <Fragment>
        <div id="main-wrapper" data-theme="light" data-layout="vertical" data-navbarbg="skin6" data-sidebartype="full" data-sidebar-position="fixed" data-header-position="fixed" data-boxed-layout="full">
            <div className="header">
                <nav className="navbar top-navbar navbar-expand-lg navbar-light">
                    <div className="navbar-header">
                        <div className="navbar-brand">
                            <a href="index.html"> 관리자 페이지~!~!~!~! </a>
                        </div>



                    </div>
                    <div className="navbar-collapse collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav float-end">
                            <li className="nav-item dropdown">
                            <button className="nav-link dropdown-toggle pl-md-3 position-relative" onClick={() => setbellModalIsOpen(true)} id="bell" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <span>
                                        <BellIcon className="feather feather-bell svg-icon" />
                                    </span>
                                    <span className="badge text-bg-primary notify-no rounded-circle">5</span>
                                </button>
                                <Modal className="bell-content" overlayClassName="bell-overlay" isOpen={bellModal} onRequestClose={() => setbellModalIsOpen(false)}>
                                    <Link to="#" className="bell-link">
                                        <div className="bell-anno">
                                            <AirplayIcon />
                                        </div>
                                        <div className="bell-middle">
                                            <h5>공지사항</h5>
                                            <p>공지사항 내용</p>
                                            <span>날짜</span>
                                        </div>
                                    </Link>
                                    <Link to="#" className="bell-link">
                                        <div className="bell-calendar">
                                            <CalendarIcon />
                                        </div>
                                        <div className="bell-middle">
                                            <h5>일정확인</h5>
                                            <p> 내용</p>
                                            <span>날짜</span>
                                        </div>
                                    </Link>
                                    <Link to="#" className="bell-link">
                                        <div className="bell-message">
                                            <MessageSquareIcon />
                                        </div>
                                        <div className="bell-middle">
                                            <h5>문의사항</h5>
                                            <p>문의사항 답변 내용</p>
                                            <span>날짜</span>
                                        </div>
                                    </Link>
                                    <Link to="#" className="bell-link">
                                        <div className="bell-calendar">
                                            <CalendarIcon />
                                        </div>
                                        <div className="bell-middle">
                                              <h5>일정확인</h5>
                                            <p> 내용</p>
                                            <span>날짜</span>
                                        </div>
                                    </Link>
                                    <Link to="#" className="bell-more">
                                        <storng> 모든 알람 확인하기</storng>
                                    </Link>
                                </Modal>
                            </li>
                            <li className="nav-item dropdown">



                                <button className="nav-link dropdown-toggle" onClick={() => setModalIsOpen(true)} data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src="../img/baek.jpg" alt="user" className="rounded-circle" width="50" height="50" />

                                    <span className="ms-2 d-none d-lg-inline-block">
                                        <span></span>
                                        <span className="text-dark" style={{ fontWeight: 700, fontSize: '15px' }}>(주)승용</span>
                                        <Down />
                                    </span>
                                </button>
                                <Modal className="modal-content" overlayClassName="modal-overlay" isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
                                    <Link to="#" className="contentIcon">
                                    <div><ProfileIcon/></div> 
                                    <span>프로필 보기</span>
                                    </Link>
                                    <Link to="#" className="contentIcon">
                                       <div><SettingsIcon/></div> 
                                       <span>회원정보 수정</span>
                                    </Link>
                                    <Link to="#" className="contentIcon">
                                    <div><LogOutIcon/></div>
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
                                <Link to="/user" className="sidebar-link sidebar-link active">
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
                                    <FileTextIcon />
                                    <span className="hide-menu hide-list ">프로젝트 목록 보기</span>
                                </a>
                                <ul aria-expanded="false" className="collapse first-level base-level-line">
                                    <li class="sidebar-item">
                                        <NavLink className='sidebar-link ' to='/user/list'  style={({isActive})=>isActive?ms:undefined} >
                                            <span class="hide-menu hide-list"  > 목록보기 </span>
                                        </NavLink>
                                    </li>
                                    <li class="sidebar-item">
                                    <NavLink className='sidebar-link ' to='/user/apply'  style={({isActive})=>isActive?ms:undefined} >

                                            <span class="hide-menu hide-list"> 신청하기 </span>
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
                                    <NavLink className='sidebar-link ' to='/user/annoList'  style={({isActive})=>isActive?ms:undefined} >
                                            <span class="hide-menu hide-list"> 공지사항 보기 </span>
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
                <BarChartIcon />
                <span className="hide-menu hide-list">작업 내역</span>
              </a>
              <ul
                aria-expanded="false"
                className="collapse first-level base-level-line"
              >
                <li class="sidebar-item">
                  <NavLink
                    className="sidebar-link "
                    to="/user/projectDetailList"
                    style={({ isActive }) => (isActive ? ms : undefined)}
                  >
                    <span class="hide-menu hide-list">
                      {" "}
                      작업 내역 보기{" "}
                    </span>
                  </NavLink>
                </li>
              </ul>
            </li>
                            


                            <li className="sidebar-item">
                                <a className='sidebar-link has-arrow' href="javascript:void(0)" onClick={handleClick} aria-expanded="false">
                                    <BoxIcon />
                                    <span className="hide-menu hide-list" >문의사항</span>
                                </a>
                                <ul aria-expanded="false" className="collapse first-level base-level-line">
                                    <li class="sidebar-item">
                                    <NavLink className='sidebar-link ' to='/user/inQurylist'  style={({isActive})=>isActive?ms:undefined} >
                                            <span class="hide-menu hide-list"> 문의사항 목록 </span>
                                     </NavLink>
                                     <NavLink className='sidebar-link ' to='/user/inQurywrite'  style={({isActive})=>isActive?ms:undefined} >
                                            <span class="hide-menu hide-list"> 문의사항 작성하기</span>
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

export default HeaderFooterAd