import React from "react";
import n from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (<nav className={n.nav}>
        <div className= {n.item}>
            <NavLink to= '/profile' className = { navActive => navActive.isActive ? n.active : n.item}>Profile</NavLink>
        </div>
        <div className= {n.item}>
            <NavLink to= '/dialogs' className = { navActive => navActive.isActive ? n.active : n.item}>Messages</NavLink>
        </div>
        <div className= {n.item}>
            <NavLink to= '/news' className = { navActive => navActive.isActive ? n.active : n.item}>News</NavLink>
        </div>
        <div className= {n.item} >
            <NavLink to= '/music' className = { navActive => navActive.isActive ? n.active : n.item}>Music</NavLink>
        </div>
        <div className= {n.item}>
            <NavLink to= '/settings' className = { navActive => navActive.isActive ? n.active : n.item}>Settings</NavLink>
        </div>
    </nav>);
}

export default Navbar;