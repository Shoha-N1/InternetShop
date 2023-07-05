import { useState } from "react";
import Register from "./Register";
import Login from "./Login";

export default function UnAuthorizedApp() {
  const [tab, setTab] = useState("register");

  const getDisplayStyle = (page) => {
    return { display: `${tab === page ? "block" : "none"}` };
  };

  return (
    <div className="auth-wrapper">
      <div className="auth">

        <div style={getDisplayStyle("register")}>
          <Register />
        </div>
        <div style={getDisplayStyle("login")}>
          <Login />
        </div>
        <div className="auth__btns">
          <div className="auth__btn">
            <p style={getDisplayStyle("login")}>Need an account? </p>
            <button
              style={getDisplayStyle("login")}
              onClick={() => setTab("register")}
            >
              Register to enter
            </button>
          </div>
          <div className="auth__btn">
            <p style={getDisplayStyle("register")}>Already have an account? </p>
            <button
              style={getDisplayStyle("register")}
              onClick={() => setTab("login")}
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
