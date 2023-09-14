import { Link } from "react-router-dom";
import "../enMain/EnMain.css";
import "./User.css";
import "../enMain/EnCss.css";
import UserProjectDetailModal from "./UserProjectDetailModal";
import FormControlIcon from "../img/FormControlIcon";
import { useEffect, useRef, useState } from "react";
import axios from "axios";
import ProjectDetailChart from "./ProjectDetailChart";
import Search from "./Search";
function UserProjectDetailList() {

  const [ProjectDetailList, setProjectDetailList] = useState([]);
  const [searchValue , setSearchValue] = useState("");
  const [activeRow, setActiveRow] =useState(null);
  const wrapperRef = useRef(null);
  const [selectedServer, setSelectedServer] = useState(null);





  useEffect(() => {
    axios.get("/api/client/projectDetailList") // Spring Boot API 엔드포인트
      .then(response =>
        setProjectDetailList(response.data))
      .catch(error => console.log(error))
  }, []);

 /* const toggleDropDown = (e) => {
    console.log(e.currentTarget.nextElementSibling.querySelector('.hide'))
    const nextTarget = e.currentTarget.nextElementSibling.querySelector('.hide');
    if(nextTarget){
      nextTarget.classList.toggle('hide')
    }else{
      return;
    }
  }*/

  useEffect(()=>{
    function handleClickOutside(e){
      if(wrapperRef.current && !wrapperRef.current.contains(e.target)){
        setActiveRow(null);
      }
    }
    document.addEventListener("mousedown",handleClickOutside);
    return () => {
      document.removeEventListener("mousedown",handleClickOutside);
    }
  })

  function toggleDropDown(index) {
    if (activeRow === index) {
      setActiveRow(null);
      setSelectedServer(null); // Deselect the server
    } else {
      setActiveRow(index);
      setSelectedServer(index); // Set the selected server
    }
  }

/*   useEffect(() => {
    const getProjectDetailList = async () => {
      try {s
        const response = await axios.get("/api/client/projectDetailList");
        setProjectDetailList(response.data);
        console.log(response.data)
      } catch (error) {
        console.log("Error", error);
      }
    };
    getProjectDetailList(); // Call the function to fetch data
  }, []); */
  
  return (
    <>
      <div className="page-wrapper">
        <div className="page-breadcrumb">
          <div className="row">
            {/* <div className="col-7 align-self-center">
              <h3 className="page-title text-truncate text-dark font-weight-medium mb-1">
                프로젝트별 작업 내역
              </h3>
              <div className="d-flex align-items-center">
                <nav aria-label="breadcrumb"></nav>
              </div>
            </div> */}
            <div className="col-5 align-self-center">
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                <div className="col-md-4 ">
                        <div className="form-group mb-3">

                        </div>
                      </div>
                  <Search setSearchValue={setSearchValue}/>


                  <div className="table-responsive">
                    <div className="project-table">
                    <div ref={wrapperRef}>

                      <table className="table">

                        <thead>
                          <tr>
                            <th scope="col">NO</th>
                            <th scope="col">서버 이름</th>
                            <th scope="col">작업 분류</th>
                            <th scope="col">최근 점검</th>
                            <th scope="col">작업 상태</th>
                            <th scope="col">담당 엔지니어</th>
                          </tr>
                        </thead>

                        <tbody>
                        {ProjectDetailList
                            .map((item, index) => ({ ...item, index }))
                            .filter((value) => {
                              if (searchValue === "") {
                                return true;
                              } else if (
                                value.server_name.toLowerCase().includes(searchValue.toLowerCase()) ||
                                value.work_division.toLowerCase().includes(searchValue.toLowerCase()) ||
                                value.eng_name.toLowerCase().includes(searchValue.toLowerCase())
                              ) {
                                return true;
                              }
                              return false;
                            })
                            .map((filteredItem, index) => (
                            <>
                             <tr key={index} onClick={() => toggleDropDown(index)}>
                           
                              <th scope="row">{index + 1}</th>
                              <td>
                                <UserProjectDetailModal projectData={filteredItem}/>
                              </td>
                              <td>{filteredItem.work_division}</td>
                              <td>{filteredItem.work_date}</td>
                              <td>
                                <button type="button" className="button-danger" style={ 
                                                                filteredItem.work_status === '완료'
                                                                ? { backgroundColor: '#00c870' }
                                                                :
                                                                 { backgroundColor: '#ff0030' } 
                                                               }>
                                {filteredItem.work_status}
                                </button>
                              </td>
                              <td className="border-top-0 px-2 py-4">
                                <div className="d-flex no-block ">
                                  <div className="me-3">
                                    <img
                                      src="../img/widget-table-pic1.jpg"
                                      alt="user"
                                      className="rounded-circle"
                                      width="45"
                                      height="45"
                                    />
                                  </div>
                                  <div>
                                    <h5 className="text-dark mb-0 font-16 font-weight-medium">
                                      {filteredItem.eng_name}
                                    </h5>
                         
                                  </div>
                                </div>
                              </td>
                             </tr>
                            {selectedServer === index && (
                                <tr>
                                  <td colSpan="9" className={`trans ${activeRow === index ? '' : 'hide'}`} >
                                  <ProjectDetailChart serverId={filteredItem.server_id} projectData={filteredItem} />
                                  </td>
                                </tr>
                              )}
                             </>
                          ))}

                        </tbody>
                        </table>
                        </div>

                    </div>
                  </div>
                  <ul className="pagination float-end list">
                    <li className="page-item disabled">
                      <Link className="page-link" href="#" tabindex="-1">
                        Prev
                      </Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link" href="#">
                        1
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        2 <span className="sr-only">(current)</span>
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        3
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link" href="#">
                        Next
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserProjectDetailList;
