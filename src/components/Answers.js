import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";
import React from 'react';


export default function Answers() {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="text answer" />
    </div>
  );
}
