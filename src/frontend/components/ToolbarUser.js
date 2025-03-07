import './ToolbarUser.css'
import {Link} from "react-router-dom";

function ToolbarUser() {
  return (
    <div className="ToolbarUser">
      <p class="alignLeft"> ESU </p>
    {/*
      <Link to="/Menu" class="alignLeft"> MENU </Link>
      <Link to="/Profile" class="alignRight"> USER </Link>
    */}
      <Link to="/Event" class="alignRight">NEW EVENT</Link>
      <Link to="/" class="alignRight">HOME</Link>
    </div>
);
}

export default ToolbarUser;