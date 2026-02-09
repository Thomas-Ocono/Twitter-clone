import { Link } from "react-router";

function Navbar() {
  return (
    <div class="navbar">
      <Link to="/">
        <button>Home</button>
      </Link>
      <button>Profile</button>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Navbar;
