import React from 'react'
// import Navbar from './Navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">
             <NavLink className="navbar-brand navbar-logo" to="/" exact>
                Mufakose
             </NavLink>


             <button
                 className="navbar-toggler"
                 type="button"
                 data-toggle="collapse"
                 data-target="navbarSupportedContent"
                 arial-controls="navbarSupportedContent"
                 arial-expanded="false"
                 arial-label="Toggle navigation">
                 <i className="fas fa-bars text-white"></i>
             </button>

             <div
                 className="collapse navbar-collapse"
                 id="navbarSupportedContent">
                     <ul className="navbar-nav ml-auto">
                        <div>
                            
                        </div>
                     </ul>
             </div>
        </nav>
    )
}

export default Navbar;