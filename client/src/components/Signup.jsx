import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:5000/api/signup", {
        username,
        password,
      });

      console.log(res);
      alert("Signed Up Successfully");
      navigate("/login");
    } catch (err) {
      console.log(err);
      alert(`${err.response.data.message}`);
    }
  }
  return (
    <div className="form" onSubmit={handleSubmit}>
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
