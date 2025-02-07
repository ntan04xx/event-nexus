import './Login.css';
import {Link} from "react-router-dom";
import ToolbarGuest from './components/ToolbarGuest';
import {useState} from "react";
import Menu from './components/Menu';

const Login = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className="Login">
      <header className="Toolbar-header">
        <ToolbarGuest toggleMenu={toggleMenu} />
        <Menu isVisible={menuVisible} />
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