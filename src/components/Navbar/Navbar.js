import React from 'react'
import Navbar from './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
       <nav className="navbar navbar-expand-lg navbar-mainbg">
           <NavLink className='navbar-brand navbar-logo' to="/" exact>
                Web Solution
           </NavLink>
       </nav>
    )
}
export default Navbar; 