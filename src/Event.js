import './Event.css';
import ToolbarGuest from './ToolbarGuest';

function Event() {
  return (
    <div className="Event">
      <header className="Toolbar-header">
        <ToolbarGuest/>
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