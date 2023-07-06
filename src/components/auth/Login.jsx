import eye from "../../assets/eye.png";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Login() {
  const elForm = useRef(null);
  const elPassword = useRef(null);
  const { logIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handelePassword(evt) {
    const inputPassword = elPassword.current;

    if (inputPassword.type === "text") {
      inputPassword.setAttribute("type", "password");
      evt.target.setAttribute("src", "/src/assets/closed-eye.png");
    } else {
      inputPassword.setAttribute("type", "text");
      evt.target.setAttribute("src", "/src/assets/eye.png");
    }
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(elForm.current);

    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        email: formData.get("email"),
        password: formData.get("password"),
      })
      .then((data) => {
        if (data.data.access_token && data.data.refresh_token) {
          logIn(data.data);
        } else {
          setError(new Error(data.data.error.message || "Unexpected Error"));
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  return (
    <>
    <div className="register-wrapper">
      <div className="register">
        <form onSubmit={handleSubmit} ref={elForm}>
          {error && <small style={{color: "red"}}>{error.toString()}</small>}

          <h1>Login</h1>

          <div>
            <label htmlFor="email">Email</label>
            <input
              required
              placeholder="Enter Email"
              id="email"
              name="email"
              type="text"
            />
          </div>
          <div className="register__password">
            <label htmlFor="password">Password:</label>
            <input
              ref={elPassword}
              placeholder="Enter Password"
              required
              name="password"
              id="password"
              type="text"
            />
          </div>
          <button type="submit"> Enter to Project</button>
        </form>
      </div>
    </div>
  </>
  );
}
