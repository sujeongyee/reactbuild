import { Route, Routes } from "react-router-dom";
import EnMain from "./enMain/EnMain";
import HeaderFooterAd from "./component/HeaderFooterAd";
import HeaderFooterUs from "./component/HeaderFooterUs";

import HeaderFooterEn from "./component/HeaderFooterEn";

import Main from "./main/Main";
import MainInfo from "./main/MainInfo";
import UserList from "./userMain/UserAnnoList";
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

import NoticeWrite from "./adminMAin/NoticeWrite";
import UserInQuryWrite from "./userMain/UserInQuryWrite";
import UserInQuryDetail from "./userMain/UserInQuryDetail";
import MainAdmin from "./adminMAin/MainAdmin";


function App() {

    return (

        <Routes>
            <Route element={<Main/>}>
            <Route path="/" element={<MainInfo/>}/>
            
            
            </Route>
            <Route path='/login_join' element={<Login_join/>}/> 
            
            <Route element={<HeaderFooterEn />}>{/* 엔지니어 페이지 */}

                <Route path='/engineer' element={<EnMain />} />
                <Route path='/engineer/calendar' element={<EnCalendar/>} />
                <Route path="/engineer/engineerList" element={<EnEngineerList />} />  
            </Route>

            <Route element={<HeaderFooterAd />}>{/* 관리자 페이지; */}

                <Route path='/admin' element={<MainAdmin/>} />
                <Route path='/admin/noticeWrite' element={<NoticeWrite />} />
            </Route>



            <Route element={<HeaderFooterUs />}>
              
                <Route path='/user' element={<MainUser/>} />
                <Route path='/user/list' element={< UserList/>} />
                <Route path='/user/apply' element={< UserApply/>} />
                <Route path='/user/inQurylist'element={< UserInQurylist/>} />
                <Route path='/user/inQurywrite'element={< UserInQuryWrite/>} />
                <Route path='/user/inQuryDetail'element={< UserInQuryDetail/>} />
                <Route path='/user/annoList'element={< UserAnnoList/>} />

                

                <Route path="/user/projectDetailList" element={<UserProjectDetailList />}
        />
        <Route
          path="/user/projectDetail"
          element={<UserProjectDetailModal />}
        />
        <Route
          path="/user/projectDetail2"
          element={<UserProjectDetailModal2 />}
        />


            </Route>


        </Routes>

    )

}

export default App;
