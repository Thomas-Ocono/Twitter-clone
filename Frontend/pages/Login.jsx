import { Link } from "react-router";

function Login() {
  return (
    <div class="Login">
      <h2>Username:</h2>
      <input type="text" />
      <h2>Password:</h2>
      <input type="text" />
      <button>Sign In</button>
      <Link to="/register">
        <button>Register</button>
      </Link>
    </div>
  );
}
export default Login;
