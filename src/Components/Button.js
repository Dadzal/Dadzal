import React from 'react';
import './Button.css';
import { NavLink } from 'react-router-dom';

export const Button = ({children, type, onClick, buttonStyle, buttonSize
}) =>{
    const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle:STYLES[0]
}