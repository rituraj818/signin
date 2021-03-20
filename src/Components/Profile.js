import React, { useState } from 'react'
import { loginSuccess } from '../redux/logins/LoginAction'
import { connect, useSelector } from "react-redux"
import {Redirect, useHistory } from 'react-router-dom';

function Profile() {
     const [p, setp]=useState(false)
    const userdata = useSelector(state => state.user1)
   
    const log=()=>{
     setp(true)
    }
    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ color: "red" }}>User Page </h1>
            <h2>{userdata.name}</h2>
            <h2>{userdata.email}</h2>
            <button  onClick={log}
             className="btn btn-primary"
              style={{ margin: "10px", width: "100px" }}>
              Logout </button>
              {(p===true) && <Redirect to= "/"/>}
        </div>
    )
}

export default Profile
