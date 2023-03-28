import classes from "../styles/Button.module.css";
import React from 'react';

export default function button({ classname, children }) {
  return (
    <div className={`${classes.button} ${classname}`}>
       {children}
    </div>
  );
}
