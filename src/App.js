import { Route, Routes } from "react-router-dom";
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


import EnInspectionList from "./enMain/EnInspectionList";

import EnL_newProject from "./enMain/EnL_newProject";
import EnL_newProjectDetail from "./enMain/EnL_newProjectDetail";
import EnL_TeamassingmentModal from "./enMain/EnL_TeamassginmentModal";

import UserProList from "./userMain/UserProList";
import UserDetailPro from "./userMain/UserDetailPro";


function App() {
    return (

        <Routes>
            <Route element={<Main />}>
                <Route path="/" element={<MainInfo />} />


            </Route>
            <Route path='/login_join' element={<Login_join />} />

            <Route element={<HeaderFooterEn />}>{/* 엔지니어 페이지 */}

                <Route path='/engineer' element={<EnMain />} />
                <Route path='/engineer/calendar' element={<EnCalendar />} />
                <Route path='/engineer/engineerList' element={<EnEngineerList />} />
                <Route path='/engineer/inQurylist' element={< EnInQurylist />} />
                <Route path='/engineer/inQurywrite' element={< EnInQuryWrite />} />
                <Route path='/engineer/inQuryDetail' element={< EnInQuryDetail />} />
                <Route path='/engineer/annoList' element={<EnAnnoList />} />
                <Route path='/engineer/annoDetail' element={<EnAnnoDetail />} />

                <Route path='/engineer/inspectionList' element={<EnInspectionList/>} />

                <Route path="/engineer/workDetail" element={<EnWorkDetail />} />

                <Route path='/engineer/newList' element={<EnL_newProject/>}/>
                <Route path='/engineer/newProjectDetail' element={<EnL_newProjectDetail/>} />
                <Route path='/engineer/newProjectDetail2' element={<EnL_TeamassingmentModal/>}/>



            </Route>

            <Route element={<HeaderFooterAd />}>{/* 관리자 페이지; */}

                <Route path='/admin' element={<MainAdmin />} />
                <Route path='/admin/noticeWrite' element={<NoticeWrite />} />
                <Route path='/admin/projectdetail' element={< ProjectDetail />} />
                <Route path='/admin/inQurylist' element={< AdminInQurylist />} />
                <Route path='/admin/inQuryDetail' element={< AdminInQuryDetail />} />
                <Route path='/admin/annoList' element={<AdminAnnoList />} />
                <Route path='/admin/annoDetail' element={<AdminAnnoDetail />} />
                <Route path="/admin/userList" element={<AdUserList />} />
                <Route path="/admin/projectList" element={<AdProjectList />} />


            </Route>



            <Route element={<HeaderFooterUs />}>

                <Route path='/user' element={<MainUser />} />
                <Route path='/user/list' element={< UserProList/>} />
                <Route path='/user/apply' element={< UserApply />} />
                <Route path='/user/inQurylist' element={< UserInQurylist />} />
                <Route path='/user/inQurywrite' element={< UserInQuryWrite />} />
                <Route path='/user/inQuryDetail' element={< UserInQuryDetail />} />
                <Route path='/user/annoList' element={< UserAnnoList />} />
                <Route path='/user/annoDetail' element={<UserAnnoDetail />} />
                <Route path='/user/prodetail' element={<UserDetailPro/>}/>
                <Route path="/user/projectDetailList" element={<UserProjectDetailList />} />
                <Route path="/user/projectDetail" element={<UserProjectDetailModal />} />
                <Route path="/user/projectDetail2" element={<UserProjectDetailModal2 />} />
            </Route>
        </Routes>
    );
}

export default App;
