import React, {Component} from "react";
import { Cookies, useCookies } from "react-cookie";
import { Link } from "react-router-dom";


const NavLiTag = (props) => {
    return (
        <li className="nav-item active">
            <Link className={props.className} to={props.link}>{props.itemValue}</Link>
        </li>
    )   
}

export default NavLiTag;