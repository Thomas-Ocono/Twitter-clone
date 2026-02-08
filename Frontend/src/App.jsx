import "./App.css";
import { Route, Routes } from "react-router";
import axios from "axios";
import UserStuff from "./UserStuff.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<UserStuff />} />
      </Routes>
    </>
  );
}

export default App;
