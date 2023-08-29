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
    </>
)

}
export default MainInfo