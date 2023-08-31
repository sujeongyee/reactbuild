import { Link } from "react-router-dom"
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
                            <li><Link to="/user">회원가입</Link></li>
                            <li><Link to="/user">로그인</Link></li>
                        </ul>
                    </div>
                </div>

            </header>



            <div id="container" className="mainBody">
                <div className="infoHead"/* style="width: 980px; margin: 0 auto;" */>
                    <div className="info">
                        <div className="mainL">
                            <h1>CHANGES</h1>
                            <h1>FOR THE BETTER</h1>
                            <p className="infoP"/* style="font-size: 10px; margin: 10px 0 0 0px;" */>더 나은 서버 관리를 위해 어쩌구<br />
                                저쩌구<br />
                                대충 멋있는 말 넣으면 될듯듯</p>

                            <a href="" className="wrapInfo">View More</a>
                        </div>
                    </div>
                </div>
                <div className="info2" ref={Ref2}>
                    <div className="info2Con"/* style="width: 980px; margin: 0 auto;" */>
                        <div className="promotion">

                            <p className="promotionMain">회사 소개 글</p>
                            <p className="promotionCon">저희 회사는 xxxx년 창립 이후 여러 회사들의 효율적인 관리를 통해 <br /><br />
                                최상의 프로젝트를 수행 할 수 있도록 서버관리 서비스를 제공하고 있습니다.</p>
                        </div>
                        <div className="promotionTop">
                            <div className="promotionIcon">
                                <a href="#" className="proIcon1">
                                    <p>밑에 설명</p>
                                    <p>asdasndad<br />
                                        asdasndad<br />
                                        asdasndad<br />
                                        asdasndad<br />
                                        asdasndad<br />
                                    </p>
                                </a>
                                <a href="#" className="proIcon2">
                                    <p>밑에 설명</p>
                                    <p>asdasndad<br />
                                        asdasndad<br />
                                        asdasndad<br />
                                        asdasndad<br />
                                        asdasndad<br />
                                    </p>
                                </a>
                                <a href="#" className="proIcon3">
                                    <p>밑에 설명</p>
                                    <p>asdasndad<br />
                                        asdasndad<br />
                                        asdasndad<br />
                                        asdasndad<br />
                                        asdasndad<br />
                                    </p>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
                <div className="info3">
                    <div className="info3Con"/* style="width: 980px; margin: 0 auto;" */>
                        <div className="info3_1" ref={Ref3}>

                            <div className="info3Left">
                                <p>저희에게 <br />
                                    맡기세요!</p>
                                <p>아아아아아아ㅏ아아ㅏ아아ㅏ아아ㅏ아아ㅏㅇ<br />
                                    아아ㅏ아아ㅏ아ㅏ아ㅏ앙<br />
                                    아ㅏ아ㅏ아아아아ㅏ아아ㅏ아아ㅏ아아아</p>
                            </div>
                            <div className="info3Right"></div>

                        </div>
                    </div>
                    <div className="info3Con"/* style="width: 980px; margin: 0 auto;" */>
                        <div className="info3_1"  ref={Ref4}>오!</div>
                        </div>
                </div>

            </div>


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