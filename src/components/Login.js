import { useState } from "react";
import { Redirect } from "react-router-dom";

function Login({ location }) {
  const [txtUsername, settxtUsername] = useState("");
  const [txtPassword, settxtPassword] = useState("");

  var onChange = (e) => {
    var target = e.target;
    var name = target.name;
    var value = target.type === "checkbox" ? target.checked : target.value;
    settxtUsername(value);
    settxtPassword(value);
  };
  var onLogin = (e) => {
    e.preventDefault();
    if (txtUsername === "admin" && txtPassword === "admin") {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: txtUsername,
          password: txtPassword,
        })
      );
    }
  };

  var loggedInUser = localStorage.getItem("user");
  if (loggedInUser !== null) {
    return (
      <Redirect
        to={{
          pathname: "/products",
          state: {
            from: location,
          },
        }}
      />
    );
  }

  console.log("location", location);
  return (
    <div className="row">
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <form onSubmit={onLogin}>
          <legend>Đăng nhập</legend>

          <div className="form-group">
            <label>Username: </label>
            <input
              type="text"
              className="form-control"
              value={txtUsername}
              onChange={onChange}
              name="txtUsername"
            />
          </div>

          <div className="form-group">
            <label>Password: </label>
            <input
              type="password"
              className="form-control"
              value={txtPassword}
              onChange={onChange}
              name="txtPassword"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
