import React from 'react'
import "./sidebarButton.css"
import {Link, useLocation} from "react-router-dom"
import { IconContext } from "react-icons";

const SignOutButton = (props) => {
    const location = useLocation();
    const isActive = location.pathname === props.to;
    const btnClass = isActive?"logout":"logout";


  return (
    <div onClick = {props.logout} className={btnClass}>
          <button className={btnClass} onClick={props.logout}>
                Logout
            </button>    
    </div>
  )
}

export default SignOutButton
