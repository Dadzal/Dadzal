import React from 'react'
// import Navbar from './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
       <nav className="navbar navbar-expand-lg navbar-mainbg">
           <NavLink className='navbar-brand navbar-logo' to="/" exact>
                Mufakose
           </NavLink>

           <button
           className="navbar-toggler"
           type="button"
           data-toggle="collapse"
           data-target="#navbarSupportedContent"
           aria-controls="navbarSupportedContent"
           aria-expanded="false"
           aria-label="Toggle navigation" 
           >
         <i className="fas fa-bars text-white"></i>
           </button>

           <div
           className="collapse" 
           >

           </div>

       </nav>
    )
}
export default Navbar; 