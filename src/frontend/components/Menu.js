import './Menu.css'
import {Link} from "react-router-dom";

const Menu = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="Menu">
      <Link to="/Notif" className="alignTop"> Notifications </Link>
      <Link to="/User" className="alignTop"> Personal Details </Link>
      <Link to="/Event" className="alignTop"> Your Events </Link>

      <p className='alignBottom'>© Eastern Sydney University 2025</p>
    </div>
  );
}

export default Menu;