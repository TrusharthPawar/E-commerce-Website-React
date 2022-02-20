import React from "react";
import { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { host } from "./host";

function Account(props) {

  const [toggle,settoggle] = useState(false)

  async function logout() {
    let logout_user = await fetch(`${host}api/logout`, {
      method: "GET",
      credentials: "include",
    });
    document.location = "/login";
  }

  const togglebtn = {
    display:'block'
  }

  return (
    <>
      <i
        className="fa fa-user-circle-o sub-link"
        // style="font-size:24px"
        id="user" onClick={() => {
          settoggle(!toggle)
        }}
      >
      </i>
      {/* <div id="account" className="sub-menu"> */}
      <div id="user_info" className="sub-menu" style={toggle ? togglebtn : null}>
            <h3>{props.user.Name}</h3>
            <Link to="/history">Orders</Link> <br/>
            <button id="logout" onClick={logout}>
              Logout
            </button>
          </div>
        {/* </div> */}
    </>
  );
}

export default Account;
