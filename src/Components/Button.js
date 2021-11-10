import React from 'react';
import './Button.css';
import { Link, NavLink } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']
<<<<<<< Updated upstream
const SIZE = ['btn--medium', 'btn--large']
=======
const SIZES = ['btn--medium', 'btn--large']

export const Button = ({
   children, 
   type, 
   onClick, 
   buttonStyle, 
   buttonSize
}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle) 
      ? buttonStyle
      :STYLES[0];

    const checkButtonSize = SIZES.includes(buttonSize) 
      ? buttonSize
      :SIZES[0];
>>>>>>> Stashed changes

    return(
       <Link>
       <button className={`btn ${checkButtonStyle} ${checkButtonSize}`}
       onClick={onClick}
       type={onClick}
       >
<<<<<<< Updated upstream
           {children}
       </button>
       </Link>
=======
         {children}
       </button> */}
       </Link> 
>>>>>>> Stashed changes
    )
};