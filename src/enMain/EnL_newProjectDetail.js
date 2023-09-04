
import { useState } from 'react'
import '../enMain/EnMain.css'

import '../enMain/EnTeam.css';
import EnL_TeamassingmentModal from './EnL_TeamassginmentModal';


function EnL_newProjectDetail() {




    return (

        <>
            <div className="page-wrapper" >
                <div className="page-breadcrumb">
                    <div className="row">
                        <div className="col-7 align-self-center">
                            <h4 className="page-title text-truncate text-dark font-weight-medium mb-1">
                                프로젝트 세부
                            </h4>
                        </div>


                    </div>
                </div>



                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="card1">
                                <div className="card-body">
                                    <form action="#" method="post">
                                        <div className="form-body">

                                            <div className="row">
                                                <div className="col-md-2">
                                                    <div className="form-group mb-3">
                                                        <div className="infoUser">회사명</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group mb-3">
                                                        <p className="infoUser-answer">(주)지인</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <div className="form-group mb-3">
                                                        <div className="infoUser">대표자명</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group mb-3">
                                                    <p className="infoUser-answer">장지인</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <div className="form-group mb-3">
                                                        <div className="infoUser">회사 전화번호</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group mb-3">
                                                     <p className="infoUser-answer">010-2522-2233</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-2">
                                                    <div className="form-group mb-3">
                                                        <div className="infoUser">사업자 등록번호</div>
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-group mb-3">
                                                     <p className="infoUser-answer">11111122-20-223</p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-2">
                                                    <div className="form-group mb-3">
                                                        <div className="infoUser">사업자 주소</div>
                                                    </div>
                                                </div>

                                                <div className="col-md-2 col-md-2-1">
                                                    <div className="form-group mb-3">
                                                      <p className="infoUser-answer">462-456</p>

                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group mb-3">
                                                        <p className="infoUser-answer">서울특별시 강남구 에스코빌딩 6층</p>

                                                    </div>

                                                </div>
                                                <div className="col-md-2">
                                                    <div className="form-group mb-3">
                                                        <div className="infoUser">계약기간</div>


                                                        
                                                    </div>
                                                </div>
                                                <div className="col-sm-12 col-md-6 col-lg-4">
                                                    <div>
                                                       
                                                        <div className="form-group">
                                                            <p className="infoUser-answer">2023-02-01 ~ 2023-09-17</p>
                                                        </div>
                                                    </div>
                                                </div>



                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <div className="form-group mb-3">
                                                            <div className="infoUser">관리대상 OS</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group mb-3">
                                                            <p className="infoUser-answer">Linux</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <div className="form-group mb-3">
                                                            <div className="infoUser">대표 IP</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group mb-3">
                                                            <p className="infoUser-answer">59.9.186.138</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <div className="form-group mb-3">
                                                            <div className="infoUser">담당자</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group mb-3">
                                                            <p className="infoUser-answer">장지인</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row">
                                                    <div className="col-md-2">
                                                        <div className="form-group mb-3">
                                                            <div className="infoUser">담당자 연락처</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group mb-3">
                                                           <p className="infoUser-answer">010-2235-5758</p>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row ">
                                                    <div className="col-md-2">
                                                        <div className="form-group mb-3">
                                                            <div className="infoUser">담당자 이메일</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group mb-3">
                                                          <p className="infoUser-answer">jiin0917@gmail.com</p>
                                                        </div>
                                                    </div>


                                               
                                                <div className="row">

                                                    <div className="col-md-2">
                                                        <div className="form-group mb-3">
                                                            <div className="infoUser">서버 이름</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <div className="form-group mb-3">
                                                          <p className="infoUser-answer">서버이름 ,....</p>
                                                        </div>
                                                    </div>
                                                    <EnL_TeamassingmentModal/>
                                                </div> 












                                                </div>
                                              
                                                    
                                             
    
                                            </div>

                                        </div>

                                    </form>

                                </div>

                            </div>


                        </div>

                    </div>


                </div>





            </div>

        </>

    )

}

export default EnL_newProjectDetail