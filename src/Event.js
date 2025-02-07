import './Event.css';
import ToolbarGuest from './components/ToolbarGuest';
import {useState} from "react";
import Menu from './components/Menu';

const Event = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className="Event">
      <header className="Toolbar-header">
        <ToolbarGuest toggleMenu={toggleMenu} />
        <Menu isVisible={menuVisible} />
      </header>

      <header className="Event-header">
        <h2> Schedule Your Event </h2>
        <p>Event Name: </p>
        <p>Type: </p>
        <p>Time: </p>

        <p>
          Submit
        </p>
      </header>
    </div>
  );
}

export default Event;