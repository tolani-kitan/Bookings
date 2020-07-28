import React, { useState, useContext, useEffect } from "react";
import room from "../../Images/room_landing.png";
import AuthContext from "../../context/auth/authContext";

const LoginPage = (props) => {
  const authContext = useContext(AuthContext);

  const { login, error, clearErrors, isAuthenticated } = authContext;

  useEffect(() => {

    if (isAuthenticated) {
      props.history.push("/admin/dashboard");
    }

    if (error === "Invalid credentials") {
      clearErrors();
    }
    //eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onChange = (e) =>
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

  const buttonSubmit = async (e) => {
    e.preventDefault();

    console.log('hello')
      login({
        email,
        password,
      });

  }

  return (
    <div className="container">
      <div className="grid-2">
        <div className="div-image">
          <img className="room-img" src={room} alt="meeting room" />
        </div>

        <div className="div-book">
          <div className="book">
            <h3> Book a space for your next meeting</h3>
            <span>Log in with your staff email to continue</span>
          </div>

          <form className="div-form" onSubmit={buttonSubmit}>
            <div className="form-group">
              <label for="email" className="div-label">
                STAFF EMAIL
              </label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={email}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <label for="password" className="div-label">
                PASSWORD
              </label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={password}
                onChange={onChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-color"
              onClick={buttonSubmit}
            >
              {" "}
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
