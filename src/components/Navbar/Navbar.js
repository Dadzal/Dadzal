import React from 'react'
import Bar  from './Bar.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">
             <NavLink className="navbar-brand navbar-logo" to="/" exact>
                Mufakose
             </NavLink>


             <button
                 className="navbar-toggler"
                //  onClick={()=>{
                //     setTimeout(function(){
                //         Animation();
                //     });
                //   }
                //  }
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
                        <div className="hori-selector">
                          <div className="left"></div>
                          <div className="right"></div>  
                        </div>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="/" exact>
                                <i className="fas fa-tachometer">
                                </i>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="About" exact>
                                <i className="far fa-address-book">
                                </i>
                               About
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="Services" exact>
                                <i className="far fa-clone">
                                </i>
                                Services
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="Events" exact>
                                <i className="far fa-clone">
                                </i>
                               Events
                            </NavLink>
                        </li>
                        <li className="nav-item active">
                            <NavLink className="nav-link" to="Testimonials" exact>
                                <i className="far fa-chart-bar">
                                </i>
                               Testimonials
                            </NavLink>
                        </li>
                     </ul>
             </div>
        </nav>
    )
}

export default Navbar;
