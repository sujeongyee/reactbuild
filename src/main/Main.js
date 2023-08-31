import { Link, Outlet } from "react-router-dom"
import './Main.css';
import './Body.css';
function Main() {

    


    return (
        <>
            <header>
                <div id="header">

                    <div className="mainLogo"><a href="#"><img className="mainLogo1" src="./img/logo1.png"/></a></div>
                    <div className="HeaderCategoriBox">
                        <div className="HeaderCategori">

                            <a href="#">COMPANY</a>
                            <a href="#">BUSINESS</a>
                            <a href="#">SOLUTION</a>
                            <a href="#">CONTACT US</a>
                        </div>
                    </div>
                    <div className="login_singup">
                        <ul>
                            <li><Link to="/user">회원가입</Link></li>
                            <li><Link to="/login_join">로그인</Link></li>
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