import { Link, Outlet } from "react-router-dom"
import './Main.css';
import './Body.css';
import { useRef } from "react";
function Main() {
    const Ref2=useRef(null);
    const Ref3=useRef(null);
    const Ref4=useRef(null);
   
    const handleClick1=()=>{
       Ref2.current?.scrollIntoView({ behavior: 'smooth' });
    }
    const handleClick2=()=>{
        Ref3.current?.scrollIntoView({ behavior: 'smooth' });
     }
     const handleClick3=()=>{
        Ref4.current?.scrollIntoView({ behavior: 'smooth' });
     }
     const handleClick4=()=>{
        // Ref5.current?.scrollIntoView({ behavior: 'smooth' });
     }
    return (
        <>
            <header>
                <div id="header">

                    <div className="mainLogo"><a href="#"><img className="mainLogo1" src="./img/logo1.png"/></a></div>
                    <div className="HeaderCategoriBox">
                        <div className="HeaderCategori">

                            <button onClick={handleClick1} value="Ref2">COMPANY</button>
                            <button onClick={handleClick2} value="Ref3">BUSINESS</button>
                            <button onClick={handleClick3} value="Ref4">SOLUTION</button>
                            <button onClick={handleClick4} value="Ref5">CONTACT US</button>
                        </div>
                    </div>
                    <div className="login_singup">
                        <ul>
                            <li><Link to="/login_join?class=sing-up">회원가입</Link></li>
                            <li><Link to="/login_join?class=sing-in">로그인</Link></li>
                        </ul>
                    </div>
                </div>

            </header>



            <Outlet />
        

            <footer>
                <section className="FloatingInquirystyle__FloatingInquiry-sc-5whm20-0 ylzFj gtm-inquiry">
                    <button type="button">

                        <img src="../img/channeltalk_character.png" alt="바로문의"/>
                    </button>
                </section>
                <div id="footer">
                    <div className="footerLeft"><a href="#">회사 이름</a></div>
                    <div className="footerMid">
                        <ul className="midTop">
                            <li><a href="#">이용약관</a></li>
                            <li><a className="policy"href="#"/*  style="color: red;" */>운영정책</a></li>
                            <li><a href="#">개인정보 처리 방침</a></li>
                        </ul>
                        <p className="midBot">주소</p>
                    </div>
                    <div className="footerRight">
                        <a href="#" className="logo1"></a>
                        <a href="#" className="logo2"></a>
                        <a href="#" className="logo3"></a>
                    </div>
                </div>

            </footer>
        </>
    )

}
export default Main