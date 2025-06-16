import React from "react";
import { Link } from "react-router-dom";
 // Import CSS module
 // Import logo

const Navbar = () => {
  return (
    <nav >
     
      <ul >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/retos">Retos</Link></li>
        <li><Link to="/logros">Logros</Link></li>
        
      </ul>
    </nav>
  );
};

export default Navbar;