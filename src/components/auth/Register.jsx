import "./Auth.scss";
import eye from "../../assets/eye.png";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Register() {
  const elForm = useRef(null);
  const elPassword = useRef(null);
  const { getUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [massage, setMassage] = useState(null);

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
      .post("https://api.escuelajs.co/api/v1/users/", {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        avatar: "https://placeimg.com/100/100/",
      })
      .then((data) => {
        getUser(data.data);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
        setMassage(
          "You are succesfuly registrated now go to the login!" ||
            "Enter the login"
        );
      });
  }
  return (
    <>
      <div className="register-wrapper">
        <div className="register">
          <form onSubmit={handleSubmit} ref={elForm}>
            {error && (
              <small style={{ display: "none" }}>{error.toString()}</small>
            )}

            <h1>Registration</h1>

            <input
              placeholder="Enter Username"
              id="name"
              type="text"
              required
            />

            <input placeholder="Enter Email" id="email" type="email" required />

            <div className="register__password">
              <input
                ref={elPassword}
                placeholder="Enter Password"
                id="password"
                type="text"
                required
              />
              <img
                className="register__eye"
                onClick={(evt) => handelePassword(evt)}
                src={eye}
                width={20}
                height={20}
                alt="eye"
              />
            </div>
            <p style={{ width: "400px", marginLeft: "50px" }}>{massage}</p>
            <button type="submit">{loading ? "loading" : "Register"}</button>
          </form>
        </div>
      </div>
    </>
  );
}
