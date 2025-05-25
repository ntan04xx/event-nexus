import './Event.css';
import ToolbarGuest from './components/ToolbarGuest';
import {useState} from "react";
import Menu from './components/Menu';
import axios from "axios";

const Event = () => {
  const [formData, setFormData] = useState({
    name: "",
    date: "",
    eventType: ""
  });
  const [menuVisible, setMenuVisible] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/events/add", {
        ...formData
      });
      console.log("Event added", response.data);
    } catch(e) {
      console.error("Error adding event:", e.response?.data || e.message);
    }
  }
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
        <h2> Schedule Your Event Here! </h2>
        <form onSubmit={handleSubmit}>
          <input
            type = "text"
            name = "name"
            placeholder='Name'
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type = "date"
            name = "date"
            placeholder='Date'
            value={formData.date}
            onChange={handleChange}
            required
          />
          <select
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Event Type --</option>
            <option value="club">Society & Clubs</option>
            <option value="staff">Only Staff</option>
            <option value="extern">External Organisation</option>
            <option value="careers">Careers</option>
            <option value="dorm">Dormitory</option>
          </select>
          <button type="submit">Add Event</button>
        </form>
      </header>
    </div>
  );
}

export default Event;