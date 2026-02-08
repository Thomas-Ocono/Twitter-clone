import "./App.css";
import { Route, Routes, Link } from "react-router";
import axios from "axios";
import NavBar from "./Navbar.jsx";
import Homepage from "./Pages/Homepage.jsx";
import UserStuff from "./UserStuff.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<UserStuff />} />
      </Routes>
    </>
  );
}

export default App;
