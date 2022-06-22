import React from "react"
import logo from "./journal-logo.png"

export default function Header(){
    return(
        <div className="header">
            <img src={logo} alt="logo"></img>
            <span className="heading">my travel journal</span>
        </div>
    )
}