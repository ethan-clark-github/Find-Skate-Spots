// NAVBAR

import React from "react";
import { NavLink } from "react-router-dom"


function Nav() {
    return (
        <div className="navbar">
            <NavLink to="/" style={{ paddingLeft: 13, textDecoration: 'none' }} >Home</NavLink>

            <NavLink to="/skatespots" style={{ paddingLeft: 13, textDecoration: 'none' }} >Skate Spots</NavLink>

            <NavLink to="/submitpark" style={{ paddingLeft: 13, textDecoration: 'none' }} >Add A Spot</NavLink>

        </div>
    )
}

export default Nav;