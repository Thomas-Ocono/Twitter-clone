import "./App.css";
import { Route, Routes, Link } from "react-router";
import axios from "axios";
import Navbar from "../components/Navbar.jsx";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";

function App() {
  return (
    <div class="app">
      <Navbar />
      <Routes class="content">
        <Route path="/" element={<Home />} />;
        <Route path="/login" element={<Login />} />;
        <Route path="/register" element={<Register />} />;
      </Routes>
    </div>
  );
}

export default App;
