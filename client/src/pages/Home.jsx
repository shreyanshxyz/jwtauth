import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const headers = {
    Authorization: localStorage.getItem("token"),
  };
  const [newUsername, setNewUsername] = useState("");
  function handleLogout() {
    localStorage.clear();
    window.location.href = "/login";
    navigate("/login");
  }
  async function handleDelete(e) {
    e.preventDefault();

    const res = await axios.delete("http://localhost:5000/api/delete", {
      headers,
    });

    console.log(res);
    localStorage.clear();
    window.location.href = "/login";
    navigate("/login");
  }

  async function handleUsernameChange(e) {
    e.preventDefault();

    const res = await axios.put(
      "http://localhost:5000/api/edit",
      {
        newUsername: newUsername,
      },
      { headers }
    );

    console.log(res);
  }

  return (
    <div>
      <h1>Home Page</h1>
      <h4>Username</h4>
      <form onSubmit={handleUsernameChange}>
        <div className="input-container">
          <label>New </label>
          <input
            type="text"
            name="newUsername"
            required
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
      <button onClick={handleLogout}>Logout</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default Home;
