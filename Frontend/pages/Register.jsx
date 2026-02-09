import toast from "react-hot-toast";

function toastClick() {
  toast("Workin!");
}

function Register() {
  return (
    <div class="Register">
      <h2>Username:</h2>
      <input type="text" />
      <h2>Password:</h2>
      <input type="text" />
      <h2>Confirm Password: </h2>
      <input type="text" />
      <button onClick={toastClick}>Submit</button>
    </div>
  );
}
export default Register;
