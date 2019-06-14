import React from "react";
import { Link } from "react-router-dom";
import "./NavTabs.css";

function NavTabs() {
    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link to="/home" className={window.location.pathname === "/home" ? "nav-link active" : "nav-link"}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/search"
                    className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}>
                    Search
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/options"
                    className={window.location.pathname === "/options" ? "nav-link active" : "nav-link"}>
                    Options
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/result"
                    className={window.location.pathname === "/result" ? "nav-link active" : "nav-link"}>
                    Result
                </Link>
            </li>


        </ul>
    );
}

export default NavTabs;
