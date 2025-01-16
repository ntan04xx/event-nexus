import './Register.css';
import {Link} from "react-router-dom";

function Register() {
  return (
    <div className="Register">
      <header className="Register-header">
        Register Here:
        <p>Email Address: </p>
        <p>Password: </p>

        Have account? <Link to="/Login"> Login </Link>
      </header>
    </div>
  );
}

export default Login;