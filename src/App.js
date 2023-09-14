import { Route, Router, Routes, useLocation } from "react-router-dom";
import EnMain from "./enMain/EnMain";
import HeaderFooterAd from "./component/HeaderFooterAd";
import HeaderFooterUs from "./component/HeaderFooterUs";

import HeaderFooterEn from "./component/HeaderFooterEn";

import Main from "./main/Main";
import MainInfo from "./main/MainInfo";

import UserApply from "./userMain/UserApply";
import UserInQurylist from "./userMain/UserInQurylist";
import UserAnnoList from "./userMain/UserAnnoList";

import UserProjectDetailList from "./userMain/UserProjectDetailList";
import UserProjectDetailModal from "./userMain/UserProjectDetailModal";
import UserProjectDetailModal2 from "./userMain/UserProjectDetailModal2";

import EnEngineerList from "./enMain/EnEngineerList";
import Login_join from "./main/Login_join";
import EnCalendar from "./enMain/EnCalendar";

import MainUser from "./userMain/MainUser";
import "./userMain/client-main-pro.css";

import NoticeWrite from "./adminMain/NoticeWrite";
import UserInQuryWrite from "./userMain/UserInQuryWrite";
import UserInQuryDetail from "./userMain/UserInQuryDetail";

import MainAdmin from "./adminMain/MainAdmin";
import EnAnnoList from "./enMain/EnAnnoList";
import EnInQuryDetail from "./enMain/EnInQuryDetail";
import EnInQuryWrite from "./enMain/EnInQuryWrite";
import EnInQurylist from "./enMain/EnInQurylist";
import AdminInQurylist from "./adminMain/AdminInQurylist";
import AdminInQuryDetail from "./adminMain/AdminInQuryDetail";
import AdminAnnoList from "./adminMain/AdminAnnoList";
import EnAnnoDetail from "./enMain/EnAnnoDetail";
import AdminAnnoDetail from "./adminMain/AdminAnnoDetail";
import UserAnnoDetail from "./userMain/UserAnnoDetail";
import ProjectDetail from "./adminMain/ProjectDetail";

import AdUserList from "./adminMain/AdUserList";
import AdProjectList from "./adminMain/AdProjectList";
import EnWorkDetail from "./enMain/EnWorkDetail";
import AnEngineerList from "./adminMain/AnEngineerList";

import EnInspectionList from "./enMain/EnInspectionList";

import EnL_newProject from "./enMain/EnL_newProject";
import EnL_newProjectDetail from "./enMain/EnL_newProjectDetail";
import EnL_TeamassingmentModal from "./enMain/EnL_TeamassginmentModal";
import base64 from 'base-64';
import UserProList from "./userMain/UserProList";
import UserDetailPro from "./userMain/UserDetailPro";
import PrivateRoute from "./checkRole/PrivateRoute";
import PrivateRouteAd from "./checkRole/PrivateRouteAd";
import PrivateRouteEn from "./checkRole/PrivateRouteEn";
import PrivateRouteMa from "./checkRole/PrivateRouteMa";
import PrivateRouteLogin from "./checkRole/PrivateRouteLogin";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {





    const location = useLocation();

    const token = localStorage.getItem('token');
    const [info, setInfo] = useState({})
    function checkPermission() {


        if (!token) {
            return null;
        }
        let payload = token.substring(token.indexOf('.') + 1, token.lastIndexOf('.'));
        let dec = JSON.parse(base64.decode(payload));
        if (dec == null) {
            return;
        }
        return dec;
    }
    const Info = async () => {
        if (checkPermission() == null) {
            return;
        }
        if (checkPermission().role === "ROLE_USER") {

            const cus_id = checkPermission().sub


            const response1 = await axios.get(`/api/main/getInfo?cus_id=${cus_id}`)
            setInfo(response1.data)
        }
return;
    }
    useEffect(() => {

        Info()

    }, [])

    return (

        <Routes>

            <Route element={<PrivateRouteMa />}>
                <Route element={<Main />}>
                    <Route path="/" element={<MainInfo />} />
                </Route>
            </Route>
            <Route element={<PrivateRouteLogin checkPermission={checkPermission()} />}>
                <Route path='/login_join' element={<Login_join />} />
            </Route>



            <Route element={<PrivateRouteEn checkPermission={checkPermission()} />} >
                <Route element={<HeaderFooterEn checkPermission={checkPermission()} />}>{/* 엔지니어 페이지 */}

                    <Route path='/engineer' element={<EnMain checkPermission={checkPermission()} />} />
                    <Route path='/engineer/calendar' element={<EnCalendar checkPermission={checkPermission()} />} />
                    <Route path='/engineer/engineerList' element={<EnEngineerList checkPermission={checkPermission()} />} />
                    <Route path='/engineer/inQurylist' element={< EnInQurylist checkPermission={checkPermission()} />} />
                    <Route path='/engineer/inQurywrite' element={< EnInQuryWrite checkPermission={checkPermission()} />} />
                    <Route path='/engineer/inQuryDetail' element={< EnInQuryDetail checkPermission={checkPermission()} />} />
                    <Route path='/engineer/annoList' element={<EnAnnoList checkPermission={checkPermission()} />} />
                    <Route path='/engineer/annoDetail' element={<EnAnnoDetail checkPermission={checkPermission()} />} />

                    <Route path='/engineer/inspectionList' element={<EnInspectionList checkPermission={checkPermission()} />} />

                    <Route path="/engineer/workDetail" element={<EnWorkDetail checkPermission={checkPermission()} />} />

                    <Route path='/engineer/newList' element={<EnL_newProject checkPermission={checkPermission()} />} />
                    <Route path='/engineer/newProjectDetail' element={<EnL_newProjectDetail checkPermission={checkPermission()} />} />
                    <Route path='/engineer/newProjectDetail2' element={<EnL_TeamassingmentModal checkPermission={checkPermission()} />} />


                </Route>



            </Route>

            <Route element={<PrivateRouteAd checkPermission={checkPermission()} />} >
                <Route element={<HeaderFooterAd  checkPermission={checkPermission()} />}>{/* 관리자 페이지; */}

                    <Route path='/admin' element={<MainAdmin  checkPermission={checkPermission()}/>} />
                    <Route path='/admin/noticeWrite' element={<NoticeWrite  checkPermission={checkPermission()}/>} />
                    <Route path='/admin/projectdetail' element={< ProjectDetail  checkPermission={checkPermission()}/>} />
                    <Route path='/admin/inQurylist' element={< AdminInQurylist  checkPermission={checkPermission()}/>} />
                    <Route path='/admin/inQuryDetail' element={< AdminInQuryDetail  checkPermission={checkPermission()}/>} />
                    <Route path='/admin/annoList' element={<AdminAnnoList  checkPermission={checkPermission()}/>} />
                    <Route path='/admin/annoDetail' element={<AdminAnnoDetail  checkPermission={checkPermission()}/>} />
                    <Route path="/admin/userList" element={<AdUserList  checkPermission={checkPermission()}/>} />
                    <Route path="/admin/projectList" element={<AdProjectList  checkPermission={checkPermission()}/>} />
                    <Route path="/admin/engineerList" element={<AnEngineerList  checkPermission={checkPermission()}/>} />


                </Route>
            </Route>



            <Route element={<PrivateRoute checkPermission={checkPermission()} />}  >
                <Route element={<HeaderFooterUs checkPermission={checkPermission()} />}>
                    <Route path='/user' element={<MainUser state={info} />} />
                    <Route path='/user/list' element={< UserProList />} />
                    <Route path='/user/apply' element={< UserApply />} />
                    <Route path='/user/inQurylist' element={< UserInQurylist />} />
                    <Route path='/user/inQurywrite' element={< UserInQuryWrite />} />
                    <Route path='/user/inQuryDetail' element={< UserInQuryDetail />} />
                    <Route path='/user/annoList' element={< UserAnnoList />} />
                    <Route path='/user/annoDetail' element={<UserAnnoDetail />} />
                    <Route path='/user/prodetail' element={<UserDetailPro />} />
                    <Route path="/user/projectDetailList" element={<UserProjectDetailList />} />
                    <Route path="/user/projectDetail" element={<UserProjectDetailModal />} />
                    <Route path="/user/projectDetail2" element={<UserProjectDetailModal2 />} />
                </Route>

            </Route>

        </Routes>


    );
}

export default App;
