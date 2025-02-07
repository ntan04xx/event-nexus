import './Notif.css';
import React from "react";
import ToolbarGuest from './components/ToolbarGuest';
import ToggleSwitch from './components/ToggleSwitch';
import {useState} from "react";
import Menu from './components/Menu';

const Notif = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className="Notif">
      <header className="Toolbar-header">
        <ToolbarGuest toggleMenu={toggleMenu} />
        <Menu isVisible={menuVisible} />
      </header>

      <header className="Notif-header">
        <h2>Change Notifications Here</h2>
        <React.Fragment>
            <ToggleSwitch label= "All Notifications On?" />
        </React.Fragment>

        <React.Fragment>
            <ToggleSwitch label= "Your Events Only?" />
        </React.Fragment>
      </header>
    </div>
  );
}

export default Notif;