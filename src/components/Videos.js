import React from "react";
import { Link } from "react-router-dom";
import classes from "../styles/Videos.module.css";
import Video from "./Video";
export default function Videos() {
  return (
    <div className={classes.videos}>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
      <Link to="/Quiz">
        <Video />
      </Link>
    </div>
  );
}
