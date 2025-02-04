import './Notif.css';
import React from "react";
import ToolbarGuest from './components/ToolbarGuest';
import ToggleSwitch from './components/ToggleSwitch';

function Notif() {
  return (
    <div className="Notif">
      <header className="Toolbar-header">
        <ToolbarGuest/>
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