import { Link } from "react-router-dom"

function MainInfo(){

return(
    <>
    
     <div id="container" className="mainBody">
                <div className="infoHead"/* style="width: 980px; margin: 0 auto;" */>
                    <div className="info">
                        <div className="mainL">
                            <h1>CHANGES</h1>
                            <h1>FOR THE BETTER</h1>
                            <h2>하이하잏이</h2>
                            <p className="infoP"/* style="font-size: 10px; margin: 10px 0 0 0px;" */>
                                스타트업을 위한 30만 플랫폼 창업팀 , CLOUD O.J</p>

                            <a href="" className="wrapInfo">View More</a>
                        </div>
                    </div>
                </div>
                <div className="info2">
                    <div className="info2Con"/* style="width: 980px; margin: 0 auto;" */>
                        <div className="promotion">

                    
                            <p className="promotionCon">내 모든 프로젝트 내역을 한눈에 조회하고 한 곳에서 관리하세요. <br />
                                이제껏 경험 못 했던 쉽고 편리한 금융 서비스, <br/>
                                CLOUD O.J와 함께라면 당신의 일상이 새로워 질 거에요.</p>
                        </div>
                        <div className="promotionTop">
                     {/*        <p className="promotionMain">회사 소개 글</p> */}
                            <div className="promotionIcon">
                                <a href="#" className="proIcon1">
                                    <h2>서비스 기획</h2>
                                    <p>서비스 분석<br />
                                        요구기능 정의<br />
                                        비지니스 모델링<br />
                                        사용자 정의<br />
                                        핵심기능 도출<br />
                                    </p>
                                </a>
                                <a href="#" className="proIcon2">
                                    <h2>긴급정검 서비스</h2>
                                    <p>asdasndad<br />
                                        asdasndad<br />
                                        asdasndad<br />
                                        asdasndad<br />
                                        asdasndad<br />
                                    </p>
                                </a>
                                <a href="#" className="proIcon3">
                                    <h2>맞춤 엔지니어</h2>
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
                                <h2>"실전 경험 풍부한 창업팀,<br />
                                    사용자 중심의 프로젝트 서비스"</h2>
                                <p>CLOUD O.J와 함께라면,<br/>
                                기존 외주 서버 개발 사이트에서 느껴보지 못했던 느낌.<br/>
                                한배를 타고 서비스를 함께 고민하며 운영해 나가는 <br/>
                                그 특별한 느낌을 받아보실 수 있을 거에요<br/></p>
                                <p>더불어 6개월간 자체 서비스를 성공시킨 경험과<br/>
                                서비스 전반에 걸친 개발과 운영에 대한 노하우로<br/>
                                어떠한 프로젝트도 마법처럼 도움을 드립니다. <br/></p>
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