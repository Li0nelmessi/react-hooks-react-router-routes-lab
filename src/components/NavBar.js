import React from "react";
import { NavLink } from "react-router-dom";
const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
  <div>
    <NavBar>
     <NavLink  exact to="/" style={linkStyles}>Home</NavLink>
    <NavLink to="/directors" style={linkStyles}>Directors</NavLink>
     <NavLink to="/actors" style={linkStyles}>Actors</NavLink>
     <NavLink to="/movies" style={linkStyles}>Movies</NavLink>
    </NavBar>
  </div>
  );
}

export default NavBar;