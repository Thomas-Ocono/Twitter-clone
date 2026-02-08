import { Link } from "react-router";

function NavBar() {
  return (
    <>
      <Link to="/">
        <button>Home</button>
      </Link>
      <button>Profile</button>
      <Link to="/login">
        <button>Login</button>
      </Link>
    </>
  );
}

export default NavBar;
