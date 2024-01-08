import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    window.location.href = "/login";
    navigate("/login");
  }

  return (
    <div>
      <h1>Home Page</h1>
      <h4>Username</h4>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
