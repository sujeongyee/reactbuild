import { useCallback, useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer";


function MainInfo(){

  const completionWord = 'O.J PROJECT SOLUTION'

  const [blogTitle, setBlogTitle] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0);
          setBlogTitle('');
        }

        return result;
      });
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  });


  return(
    <>
    
     <div id="container" className="mainBody">
          <div className="infoHead"></div>
                    <div className="info">
                        <div className="mainL">
                            <h1>CHANGES</h1>
                            <h1>FOR THE BETTER</h1>
                            <h2>{blogTitle}</h2>
                            <p className="infoP"/* style="font-size: 10px; margin: 10px 0 0 0px;" */>
                                스타트업을 위한 30만 플랫폼 창업팀 , CLOUD O.J</p>

                            <a href="" className="wrapInfo">View More</a>
                        </div>
                    </div>
                </div>
                <div className="info2">
                    <div className="info2Con"/* style="width: 980px; margin: 0 auto;" */>
                        <div className="promotion"  id="Ref2">

                    
                            <p className="promotionCon">내 모든 프로젝트 내역을 한눈에 조회하고 한 곳에서 관리하세요.<br/> 
                            이제껏 경험 못 했던 쉽고 편리한 서버관리 서비스, <br/>
                            CLOUD O.J와 함께라면 당신의 일상이 새로워 질 거에요.</p>
                        </div>
                        <div className="promotionTop" id="Ref3">
                          <h3 className="promotionMain">O.J SOLUTION</h3>  
                            {/*   <p className="promotionsolution">내 프로젝트의 시작부터 성장까지,
                              O.J의 커리어 솔루션과 함께하세요.</p>  */}
                            <div className="promotionIcon" >
                                <a href="#" className="proIcon1">
                                    <h2>내 프로젝트</h2>
                                    <p>언제 어디서든, 원할때        간편하게<br />
                                        내 프로젝트를 한 곳에서 확인할 수 있어요.
                                    </p>
                                </a>
                                <a href="#" className="proIcon2">
                                    <h2>프로젝트 알림</h2>
                                    <p>프로젝트에 변동이 생기면 O.J가 알람을 보내드려요.<br />
                                        나의 프로젝트에 문제가 생길때마다 바로 확인하세요.
                                    </p>
                                </a>
                                <a href="#" className="proIcon3">
                                    <h2>프로젝트 팁</h2>
                                    <p>프로젝트가 막막하다면?<br />
                                        저희가 맞춤 엔지니어를 추천해줘요<br />
                                    
                                    </p>
                                </a>

                            </div>
                        </div>
                    </div>
                    </div>
                  <div className="info2-1">
                    <div className="info2_1Con">
                        <div className="contact">
                            <p className="contact-con">더 알고 싶으신가요?</p>
                            <a href="" className="contact-btn">VIEW MORE</a>
                        </div>
                   </div>
                </div>
                <div className="info3" id="Ref4">
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


                        </div>
                        <div className="info3_2">
                        <div className="info3Right">

                            <h2>"CLOUD O.J로 나에게 딱 맞게,<br />
                                    내 프로젝트 관리를 확인부터 관리까지"</h2>
                                <p>서버 관리 , 기존 프로젝트 등등<br/>
                               그동안 불편하게 봤던 문서들 꼼꼼히 챙기느라 고생했어요 <br/>
                                앞으로는 저희와 함께 나만의 작업내용으로 한번에 <br/>
                               확인하고 관리 할 수 있어요<br/></p>
                              
                           </div>
                        </div>
                        <div className="info3_3"></div>
                    </div>
                </div>
                
                <div className="info4_1">
                    <div className="info4_1Con"/* style="width: 980px; margin: 0 auto;" */>
                            <div className="se"><img src="./img/Group 1.png"/></div>
                        <div className="review">

                            <div className="review_1">
                                <div className="prev_btn"><img src="./img/next.png" /></div>
                               
                                <div className="rev_1">
                                  <p>"정부지원사업 선정 후에 개발해본 첫 번째 플랫폼이었습니다. 전반적인 지식이 부족했지만 창업자의 관점에서 무엇이 필요한지에 대해 적극적으로 고민해주시고 만족도를 최고로 중요하게 생각하시는 프로젝트 파트너를 통해 정말 좋은 결과물을 얻었다고 생각합니다. 최고의 결과물 도출을 했다고 생각하고 정말 정성스럽게 작업해 주셔서 감사하고 적극 추천합니다."</p>
                                  <h4>중앙정보</h4>
                                  <span>CEO</span>
                                </div>
                              
                                <div className="next_btn"><img src="./img/prev.png" /></div>
                            </div>
                            <div></div>
                        </div>
                   </div>
                </div>

                <div className="info4" id="Ref5">
                    <div className="info4Con"/* style="width: 980px; margin: 0 auto;" */>
                        <div className="contact">
                            <p className="contact-con">내 프로젝트의 시작부터     성장까지,
                              O.J의 서버관리 솔루션과 함께하세요</p>
                            <a href="" className="contact-btn">CONTACT US</a>
                        </div>
                   </div>
                </div>
       

    </>
)

}
export default MainInfo