import React from "react";
import { useState, useEffect } from "react";
import Cart from "./Cart";
import { host } from "./host";

function CartScreen() {

    const [checklogin ,setLogin] = useState(false)

  useEffect(async () => {
    try {
      let user = await fetch(`${host}api/user`, {
        method: "GET",
        credentials: "include",
      });
        let logged_user = await user.json();
        if (logged_user) {
            setLogin(true)
        }
        else {
            document.location = '/login'
        }
    } catch (error) {
        console.log(error.message)
    }
  },[]);
  return (
    <div>
     {checklogin ? <Cart /> : ''}
    </div>
  );
}

export default CartScreen;
