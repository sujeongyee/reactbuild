import React from "react";
import "./Timeline.css";
import { Link } from "react-router-dom";
import UserProjectDetailModal2 from "./UserProjectDetailModal2";

function ProjectDetailChart() {
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

  return (
    <>
      <section className="timeline">
        <ol>
          <li>
            <div>
              <time>2023-01-05</time>

              <UserProjectDetailModal2 />
            </div>
          </li>
          <li>
            <div>
              <time>2023-02-05</time> 정기점검
            </div>
          </li>
          <li>
            <div>
              <time>2023-03-05</time> 정기점검
            </div>
          </li>
          <li>
            <div>
              <time>2023-04-05</time> 장애발생 긴급점검
            </div>
          </li>
          <li>
            <div>
              <time>2023-04-15</time> 장애발생 긴급점검
            </div>
          </li>
          <li>
            <div>
              <time>2023-05-05</time> 정기점검
            </div>
          </li>
          <li>
            <div>
              <time>2023-06-05</time> 정기점검
            </div>
          </li>
          <li>
            <div>
              <time>2023-07-05</time> 장애발생 긴급점검
            </div>
          </li>
          <li>
            <div>
              <time>2023-08-05</time> 정기점검
            </div>
          </li>
          <li>
            <div>
              <time>2023-08-07</time> 트래픽초과
            </div>
          </li>
          <li>
            <div>
              <time>2023-08-10</time> 추가점검
            </div>
          </li>
          <li>
            <div>
              <time>2023-09-05</time> 계약종료
            </div>
          </li>
          <li></li>
          <li></li>
        </ol>
      </section>
    </>
  );
}

export default ProjectDetailChart;
