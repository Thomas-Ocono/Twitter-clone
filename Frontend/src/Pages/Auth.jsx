let isLoggedIn = false;

function Auth() {
  if (!isLoggedIn) {
    return (
      <>
        <p>Username</p>
        <input type="text" />
        <p>Password</p>
        <input type="text" />
        <button>Login</button>
        <button>Register</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Hello there Username!</h1>
      </>
    );
  }
}

export default Auth;
