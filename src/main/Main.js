
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom"
import './Main.css';
import './Body.css';
import React, { useRef } from "react";
import { useEffect, useState } from "react";
import Logout from "./Logout";
import { Link as ScrollLink } from 'react-scroll';


function Main() {
    const token = localStorage.getItem('token');



    const TestFunction = async () => {
        if (token == null) {
            return;
        }
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        try {
            
            // 여기에서 response를 사용할 수 있음
        } catch (error) {
            // 오류 처리
        }
    }

    const location=useLocation();
    const showAlert=location.state?.showAlert;
    const alertMessage=location.state?.alertMessage;
    if (showAlert) {
                // showAlert가 true일 때 alert를 띄우고, 다음에 해당 alert가 다시 뜨지 않도록 showAlert 상태를 false로 설정합니다.
                window.alert(alertMessage);
            }
    // const [showAlert, setShowAlert] = useState(false);
    // useEffect(() => {
    //     // showAlert 상태가 true로 변경될 때 실행되는 효과를 추가합니다.
    //     console.log(location.state?.showAlert)
    //     setShowAlert(location.state?.showAlert)
    //     if (showAlert) {
    //         // showAlert가 true일 때 alert를 띄우고, 다음에 해당 alert가 다시 뜨지 않도록 showAlert 상태를 false로 설정합니다.
    //         alert('잘못된 접근입니다.');

    //         // showAlert 상태를 false로 업데이트하여 다음에 alert가 표시되지 않도록 합니다.
    //         setShowAlert(false);
    //     }
    // }, []);
    

    useEffect(() =>{
        TestFunction()
    }, [])

    // const Ref2 = useRef(null);
    // const Ref3 = useRef(null);
    // const Ref4 = useRef(null);

    // const handleClick1 = () => {
    //     Ref2.current?.scrollIntoView({ behavior: 'smooth' });
    // }
    // const handleClick2 = () => {
    //     Ref3.current?.scrollIntoView({ behavior: 'smooth' });
    // }
    // const handleClick3 = () => {
    //     Ref4.current?.scrollIntoView({ behavior: 'smooth' });
    // }
    // const handleClick4 = () => {
    //     // Ref5.current?.scrollIntoView({ behavior: 'smooth' });
    // }
    // const handleClickMenu = (e) => {
    //   e.preventDefault();
    //   if (e.target.classList.contains("infoHead")) {
    //     const id = e.target.getAttribute("to");
    //     document.querySelector(id).scrollIntoView({
    //       behavior: "smooth",
    //     });
    //   }
    // };




    return (
        <>
            <header>
                <div id="header">

                    <div className="mainLogo"><a href="#"><img className="mainLogo1" src="./img/logo1.png" /></a></div>
                    <div className="HeaderCategoriBox">
                        <div className="HeaderCategori">

                        <ScrollLink to="Ref2" smooth={true}><button>COMPANY</button></ScrollLink>
                        <ScrollLink to="Ref3" smooth={true}><button>BUSINESS</button></ScrollLink>
                        <ScrollLink to="Ref4" smooth={true}><button>SOLUTION</button></ScrollLink>
                        <ScrollLink to="Ref5" smooth={true}><button>CONTACT US</button></ScrollLink>
                        </div>
                    </div>
                    <div className="login_singup">
                        <ul>
                            {token==null?
                              <li><Link to="/login_join?class=sing-up">회원가입</Link></li>
                            :<Logout/>}
                           {token==null?
                              <li><Link to="/login_join?class=sing-in">로그인</Link></li>
                            :null}
                           
                        </ul>
                    </div>
                </div>

            </header>



            <Outlet />


            <footer>
                <section className="FloatingInquirystyle__FloatingInquiry-sc-5whm20-0 ylzFj gtm-inquiry">
                    <button type="button">

                        <img src="../img/channeltalk_character.png" alt="바로문의" />
                    </button>
                </section>
                <div id="footer">
             
                      <div className="footerLeft">
                        <a href="#">CLOUD O.J</a>
                        <a href="#">110-35-33020</a>
                        <a href="#">ojService@cloud.com</a>
                        <a href="#">서울특별시 강남구 에스코빌딩 6층</a>
                          <p>Copyrightⓒ 2023 CLOUDOJ All right reserved</p>
                          <span>CLO</span>

                      </div>
            
                    <div className="footerMid">

                           <h4>서비스 소개</h4>
                           <a href="#">BUSINESS</a>
                           <a href="#">COMPANY</a>
                           <a href="#">SOLUTION</a>
                           <a href="#">CONTACT US</a>
        

                    </div>
                    <div className="footerRight">
                        <h4>서비스 정책</h4>
                        <a href="#">이용 약관</a><br/>
                        <a href="#">개인정보보호정책</a>
{/*                     <a href="#" className="logo1"></a>
                        <a href="#" className="logo2"></a>
                        <a href="#" className="logo3"></a> */}
                    </div>
                </div>

            </footer>
        </>
    )

}
export default Main