import classes from "../styles/Button.module.css";
export default function button({ classname, children }) {
  return (
    <div className={`${classes.button} ${classname}`}>
       {children}
    </div>
  );
}
