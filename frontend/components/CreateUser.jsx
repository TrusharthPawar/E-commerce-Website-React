import React from 'react'

function CreateUser() {
    return (
      <div id="login_container">
        <form action="http://shop-cloths.herokuapp.com/api/create_user" method="post" encType='application/x-www-form-urlencoded' id="user_login">
        <h2>Create User</h2>
        <input type="text" name="name" id="name" placeholder="Name"></input>
        <input type='text' name="username" id="username" placeholder="Username"></input>
        <input type="password" name="password" id="password" placeholder="Password"></input>
        <input type="submit" id="login"></input>
        </form>
      </div>
    )
}

export default CreateUser
