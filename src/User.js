import './User.css';
import ToolbarGuest from './components/ToolbarGuest';
import {useState} from "react";
import Menu from './components/Menu';

const User = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className="User">
      <header className="Toolbar-header">
        <ToolbarGuest toggleMenu={toggleMenu} />
        <Menu isVisible={menuVisible} />
      </header>

      <header className="User-header">
        <h2>Your Personal Details</h2>
        <p>Username: </p>
        <p>First Name: </p>
        <p>Last Name: </p>
        <p>First Joined: </p>
        <p>Academic Status: </p>
        <p>Your Events: </p>
      </header>
    </div>
  );
}

export default User;