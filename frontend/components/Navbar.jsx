import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Account from "./Account";
import Loginbtn from "./Loginbtn";

function Navbar() {
  const [islogin, setUser] = useState(false);
  const [toggle, setToggle] = useState(true)
  const [User,setName] = useState({Name:''})

  useEffect(async () => {
    let user = await fetch(`${host}api/user`, {
      method: "GET",
      credentials: "include",
    });
    let logged_user = await user.json();
    if (logged_user) {
      setUser(true);
      setName(() => {
        return {
          Name : logged_user
        }
      })
    }

  },[]);
  
  const ToggleBtn = {
    display: 'block'
  }

  return (
    <nav>
      <div>
        <div className="nav-top" id="nav-top">
          <div className="logo">
            <Link to="/">
              <div className="shop">Shop</div>
            </Link>
            <div className="sidebar" id="sidebar">
              <Link to="/cart">
                <i className="gg-shopping-cart cart"></i>
              </Link>
              {islogin ? <Account user={User}/> : <Loginbtn />}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
