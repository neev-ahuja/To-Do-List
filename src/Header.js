import React from "react";
import logo from './logo.png'; 

function Header() {
  return (
    <div className="header">
        <img src={logo}></img>
        <h1>To-Do List</h1>
    </div>
  )
}

export default Header