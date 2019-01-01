import React from 'react';
import './Button.css';
import { Link, NavLink } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']
const SIZE = ['btn--medium', 'btn--large']

export const Button = ({children, type, onClick, buttonStyle, buttonSize
}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle:STYLES[0 ]
    return(
       <Link>
       {/* <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
       onClick={onClick}
       type={onClick}
       >
           {children}
       </button> */}
       </Link>
    )
};