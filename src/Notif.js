import './Notif.css';
import React from "react";
import ToolbarGuest from './components/ToolbarGuest';
import {useState} from "react";
import Menu from './components/Menu';
import Switch from 'react-switch';

const Notif = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [notifChecked, setNotifChecked] = useState(false);
  const [eventChecked, setEventChecked] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const toggleNotifSwitch = (nextChecked) => {
    setNotifChecked(nextChecked)
  }

  const toggleEventSwitch = (nextChecked) => {
    setEventChecked(nextChecked)
  }

  return (
    <div className="Notif">
      <header className="Toolbar-header">
        <ToolbarGuest toggleMenu={toggleMenu} />
        <Menu isVisible={menuVisible} />
      </header>

      <header className="Notif-header">
        <h2>Change Notifications Here</h2>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label>All Notifications On? </label>
          <Switch checked={notifChecked} onChange={toggleNotifSwitch} uncheckedIcon={false} checkedIcon={false} />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label>Your Events Only? </label>
          <Switch checked={eventChecked} onChange={toggleEventSwitch} uncheckedIcon={false} checkedIcon={false} />
        </div>
      </header>
    </div>
  );
}

export default Notif;