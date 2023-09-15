import React, { useEffect, useState } from "react";
import "./Timeline.css";
import { Link } from "react-router-dom";
import UserProjectDetailModal2 from "./UserProjectDetailModal2";
import axios from "axios";



function ProjectDetailChart({ serverId,projectData}) {




  // VARIABLES
  const elH = document.querySelectorAll(".timeline li > div");

  // START
  window.addEventListener("load", init);

  function init() {
    setEqualHeights(elH);
  }

  // SET EQUAL HEIGHTS
  function setEqualHeights(el) {
    let counter = 0;
    for (let i = 0; i < el.length; i++) {
      const singleHeight = el[i].offsetHeight;

      if (counter < singleHeight) {
        counter = singleHeight;
      }
    }

    for (let i = 0; i < el.length; i++) {
      el[i].style.height = `${counter}px`;
    }
  }
  const [ProjectDetailList, setProjectDetailList] = useState([]);
  const serverData = ProjectDetailList.filter(
    (item) => item.server_id === serverId
  );
  useEffect(() => {
    const getProjectDetailList = async () => {
      try {
        const response = await axios.get("/api/main/client/projectDetailChart");
        setProjectDetailList(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    getProjectDetailList(); // Call the function to fetch data
  }, []);

  return (
    <>

      <section className="timeline">
        <ol>
          {ProjectDetailList.map((item, index) => (
            <li key={index}>
              <div>
                <time>{item.work_date}</time>
                {/* Render other details as needed */}
                <UserProjectDetailModal2 projectData={item} />
              </div>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}

export default ProjectDetailChart;
