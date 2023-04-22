import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

function Header() {
    return (
        <div className="header_wrapper">
            <Link to="/h">Hamo</Link>
            <Link to="/y">Yura</Link>
            <Link to="/m">Milena</Link>
            <Link to="/n">Nune</Link>
        </div>
    );
}

export default Header;
