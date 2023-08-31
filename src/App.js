import { Route, Routes } from "react-router-dom";
import EnMain from "./enMain/EnMain";
import HeaderFooterAd from "./component/HeaderFooterAd";
import HeaderFooterUs from "./component/HeaderFooterUs";
import User from "./userMain/User";
import Admin from "./adminMAin/Admin";
import HeaderFooterEn from "./component/HeaderFooterEn";
import Main from "./main/Main";
import MainInfo from "./main/MainInfo";
import UserList from "./userMain/UserAnnoList";
import UserApply from "./userMain/UserApply";
import UserInQurylist from "./userMain/UserInQurylist";
import UserInQuryWrite from "./userMain/UserInQuryWrite";
import UserAnnoList from "./userMain/UserAnnoList";
import UserProjectDetailList from "./userMain/UserProjectDetailList";
import UserProjectDetailModal from "./userMain/UserProjectDetailModal";
import UserProjectDetailModal2 from "./userMain/UserProjectDetailModal2";
import TestCalendar from "./enMain/testCalendar";
import EnEngineerList from "./enMain/EnEngineerList";

const menu = [
  { title: "Home", link: "/" },
  { title: "Page1", link: "page1" },
  { title: "Page2", link: "page2" },
  { title: "Page3", link: "page3" },
];

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<MainInfo />} />
      </Route>

      <Route element={<HeaderFooterEn />}>
        <Route path="/engineer" element={<EnMain />} />
        <Route path="/engineer/test" element={<TestCalendar />} />
        <Route path="/engineer/engineerList" element={<EnEngineerList />} />
      </Route>

      <Route element={<HeaderFooterAd />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
      <Route element={<HeaderFooterUs />}>
        <Route path="/user" element={<User />} />
        <Route path="/user/list" element={<UserList />} />
        <Route path="/user/apply" element={<UserApply />} />
        <Route path="/user/inQurylist" element={<UserInQurylist />} />
        <Route path="/user/inQurywrite" element={<UserInQuryWrite />} />
        <Route path="/user/annoList" element={<UserAnnoList />} />
        <Route
          path="/user/projectDetailList"
          element={<UserProjectDetailList />}
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
  );
}

export default App;
