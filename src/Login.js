import './Login.css';
import {Link} from "react-router-dom";

function Login() {
  return (
    <div className="Login">
      <header className="Login-header">
        Login:
        <p>Username: </p>
        <p>Password: </p>

        No account? Register <Link to="/Register"> HERE </Link>
      </header>
    </div>
  );
}

export default Login;