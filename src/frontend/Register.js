import './Register.css';
import {Link} from "react-router-dom";
import ToolbarGuest from './components/ToolbarGuest';
import {useState} from "react";
import Menu from './components/Menu';

const Register = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className="Register">
      <header className="Toolbar-header">
        <ToolbarGuest toggleMenu={toggleMenu} />
        <Menu isVisible={menuVisible} />
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