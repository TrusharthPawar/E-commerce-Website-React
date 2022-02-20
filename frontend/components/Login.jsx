import React from "react";
import { useRef } from "react";
import { host } from "./host";
function Login() {
  const username = useRef(null);
  const password = useRef(null);

  async function User_login() {
    try {
        let user_info = {
            username: username.current.value,
            password: password.current.value,
          };
          let send_info = await fetch(`${host}verifyuser`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            credentials:'include',
            body: JSON.stringify(user_info),
          });
          if (send_info.status!=200) {
            alert("Invalid username or password");
          } else {
            alert("Login Successfull");
            document.location = '/';
          }
    } catch (error) {
        console.log(error.message)
    }
  }

  return (
    <div id="login_container">
      <div id="user_login">
        <h2>Login</h2>
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          ref={username}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          ref={password}
        />
        <button id="login" onClick={User_login}>
          Login
        </button>
        <a href="/register_user">Sign Up</a>
      </div>
    </div>
  );
}

export default Login;
