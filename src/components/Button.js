import classes from "../styles/Button.module.css";
import React from 'react';

export default function button({ className, children, ...rest }) {
  return (
    <button className={`${classes.button} ${className}`} {...rest}>
       {children}
    </button>
  );
}
