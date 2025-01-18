import './Register.css';
import {Link} from "react-router-dom";
import ToolbarGuest from './ToolbarGuest';

function Register() {
  return (
    <div className="Register">
      <header className="Toolbar-header">
        <ToolbarGuest/>
      </header>

      <header className="Register-header">
        <h2> Register Here </h2>
        <p>Email Address: </p>
        <p>Password: </p>

        <p> 
          Have account? 
          <Link to="/Login" className='Register-link'> Login here </Link>
        </p>
      </header>
    </div>
  );
}

export default Register;