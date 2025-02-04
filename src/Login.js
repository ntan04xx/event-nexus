import './Login.css';
import {Link} from "react-router-dom";
import ToolbarGuest from './components/ToolbarGuest';

function Login() {
  return (
    <div className="Login">
      <header className="Toolbar-header">
        <ToolbarGuest/>
      </header>

      <header className="Login-header">
        <h2> Login Here </h2>
        <p>Username: </p>
        <p>Password: </p>

        <p>
          New User?  
          <Link to="/Register" className='Login-link'> Register here </Link>
        </p>
      </header>
    </div>
  );
}

export default Login;