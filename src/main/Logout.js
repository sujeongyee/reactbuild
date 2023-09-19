import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import base64 from "base-64";
function Logout() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  let payload = token.substring(token.indexOf(".") + 1, token.lastIndexOf("."));

  let dec = JSON.parse(base64.decode(payload));
  const history = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    alert("로그아웃 되었습니다😎");
    navigate("/");
    window.location.reload();
  };
  const myPage = () => {
    if (dec.role == "ROLE_USER") {
      history("/user", {
        state: {
          role: "ROLE_USER",
        },
      });
    } else if (dec.role == "ROLE_ENGINEER") {
      history("/engineer", {
        state: {
          role: "ROLE_ENGINEER",
        },
      });
    } else if (dec.role == "ROLE_ADMIN") {
      history("/admin", {
        state: {
          role: "ROLE_ADMIN",
        },
      });
    }else if (dec.role == "ROLE_ENGLEADER") {
        history("/engineerleader", {
          state: {
            role: "ROLE_ENGLEADER",
          },
        });
      }
  };
  return (
    <>
      <li>
        <button className="logOut-btn1" onClick={logout}>
          로그아웃
        </button>
      </li>
      <li>
        <button className="logOut-btn2" onClick={myPage}>
          마이페이지
        </button>
      </li>
    </>
  );
}

export default Logout;
