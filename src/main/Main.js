import { Link, Outlet } from "react-router-dom"
import './Main.css';
import './Body.css';
import React, { useRef } from "react";


function Main() {
    const Ref2=useRef(null);
    const Ref3=useRef(null);
    const Ref4=useRef(null);
   
    // const handleClick1=()=>{
    //    Ref2.current?.scrollIntoView({ behavior: 'smooth' });
    // }
    // const handleClick2=()=>{
    //     Ref3.current?.scrollIntoView({ behavior: 'smooth' });
    //  }
    //  const handleClick3=()=>{
    //     Ref4.current?.scrollIntoView({ behavior: 'smooth' });
    //  }
    //  const handleClick4=()=>{
    //     // Ref5.current?.scrollIntoView({ behavior: 'smooth' });
    //  }

    const scrollToSection = (
      elementRef: React.MutableRefObject<HTMLButtonElement | null>,
    ) => {
      if (elementRef.current !== null) {
        const offset = elementRef.current.offsetTop;
        window.scrollTo({
          top: offset,
          behavior: 'smooth',
        });
      }
    };
    return (
        <>
            <header>
                <div id="header">

                    <div className="mainLogo"><a href="#"><img className="mainLogo1" src="./img/logo1.png"/></a></div>
                    <div className="HeaderCategoriBox">
                        <div className="HeaderCategori">

                            <Link to="Ref2" ><button onClick={() => scrollToSection(Ref2)}/* onClick={handleClick1} */ value="Ref2">COMPANY</button></Link>
                            <Link to="Ref3"><button /* onClick={handleClick2} */ value="Ref3">BUSINESS</button></Link>
                            <Link to="Ref4"><button /* onClick={handleClick3} */ value="Ref4">SOLUTION</button></Link>
                            <Link to="Ref5"><button /* onClick={handleClick4} */ value="Ref5">CONTACT US</button></Link>
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