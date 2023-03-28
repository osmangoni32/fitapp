import classes from "../styles/Layout.module.css";
import Nav from "./Nav";
import React from 'react';


export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <main className={classes.main}>
        <div className={classes.container}>{children}</div>
      </main>
    </>
  );
}
