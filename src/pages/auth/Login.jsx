import { Link } from "react-router-dom";
import "./Auth.scss"
import Card from "../../components/card/Card";

export default function Login() {
  return (
    <>
      <Card>
      <div className="container auth">
        <h2>Login</h2>
        <form className="form">
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button className="--btn --btn-primary -- btn-block">Login</button>
          <div className="links">
            <Link to={"/reset"}>Reset Password</Link>
          </div>
          <p> -- or --</p>
          <button className="--btn --btn-danger -- btn-block">
            Login with Google
          </button>
          <span className="register">
            <p>Don't have an account?</p>
            <Link to={"/register"}>Register</Link>
          </span>
        </form>
      </div>
      </Card>
    </>
  );
}
