import classes from "../../styles/Login.module.css";
import Button from "../Button";
import Form from "../Form";
import Illustration from "../Illustration";
import Textinput from "../Textinput";

export default function Login() {
  return (
    <>
      <h1>Login to your account</h1>
      <div className="column">
        <Illustration />
        <Form className={`${classes.login}`}>
          <Textinput
            type="text"
            placeholder="Enter email"
            icon="alternate_email"
          />

          <Textinput
            type="password"
            placeholder="Enter  password"
            icon="lock"
          />

          <Button>
            {" "}
            <span> Submit Now </span>
          </Button>

          <div className="info">
            Already have an account? <a href="login.html">Login</a> instead.
          </div>
        </Form>
      </div>
    </>
  );
}
