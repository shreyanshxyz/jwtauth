import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  console.log(username, password);

  return (
    <div className="form">
      <h1>Sign Up</h1>
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
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Signup;
