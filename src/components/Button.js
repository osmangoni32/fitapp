import classes from "../styles/Button.module.css";
export default function button({ children }) {
  return (
    <div className={classes.button}>
      <span> {children}</span>
    </div>
  );
}
