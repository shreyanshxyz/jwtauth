import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/login", {
        username,
        password,
      });

      const { token } = res.data;

      token
        ? localStorage.setItem("token", token)
        : console.log("no token, probably a problem with JWT");

      window.location.href = "/";
      navigate("/");
      console.log(token);
    } catch (err) {
      console.log(err);
      alert(`${err.response.data.error}`);
    }
  }

  // console.log(username, password);
  return (
    <div className="form" onSubmit={handleSubmit}>
      <h1>Login</h1>
      <form>
        <div className="input-container">
          <label>Username </label>
          <input
            type="text"
            name="uname"
            required
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input
            type="password"
            name="pass"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
}

export default Login;
