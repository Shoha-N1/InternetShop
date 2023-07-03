import { Link } from "react-router-dom";
import "./Auth.scss"
import Card from "../../components/card/Card";

export default function Register() {
  return (
    <>
      <Card>
      <div className="container auth">
        <h2>Register</h2>
        <form className="form">
          <input type="text" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <input type="password" placeholder="Confirm Password" required />
          <button className="--btn --btn-primary -- btn-block">Register</button>
        
          <span className="register">
            <p>Already have account?</p>
            <Link to={"/login"}>Login</Link>
          </span>
         
        </form>
      </div>
      </Card>
    </>
  );
}
