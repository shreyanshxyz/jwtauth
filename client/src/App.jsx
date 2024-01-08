import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
function App() {
  const user = localStorage.getItem("token");
  console.log(user);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={user ? <Home /> : <Navigate to="/login" />} />

        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
