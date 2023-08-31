import { Link } from "react-router-dom"

function MainInfo(){

return(
    <>
    <h1>창 이동하기</h1>
    <ul>
     <li><Link to="/engineer">엔지니어페이지</Link></li>
     <li><Link to="/user">회원페이지</Link></li>
     <li><Link to="/admin">관리자페이지</Link></li>

     </ul>
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
                <div className="info2">
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
                        <div className="info3_1">

                            <div className="info3Left">
                                <p>저희에게 <br />
                                    맡기세요!</p>
                                <p>아아아아아아ㅏ아아ㅏ아아ㅏ아아ㅏ아아ㅏㅇ<br />
                                    아아ㅏ아아ㅏ아ㅏ아ㅏ앙<br />
                                    아ㅏ아ㅏ아아아아ㅏ아아ㅏ아아ㅏ아아아</p>
                            </div>
                            <div className="info3Right"></div>

                        </div>
                        <div className="info3_1">오!</div>
                    </div>
                </div>

            </div>

    </>
)

}
export default MainInfo