import './Toolbar_User.css'
import {Link} from "react-router-dom";

function Toolbar_User() {
  return (
    <div className="Toolbar_User">
    {/*
      <Link to="/Menu" class="alignLeft"> MENU </Link>
      <Link to="/Profile" class="alignRight"> USER </Link>
    */}
        <Link to="/" class="alignRight">HOME</Link>
    </div>
);
}

export default Toolbar_User;