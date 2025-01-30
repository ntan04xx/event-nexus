import './ToolbarGuest.css'
import {Link} from "react-router-dom";

// New users go to register from login
function ToolbarGuest() {
    return (
        <div className="ToolbarGuest">
            <p class="alignLeft"> ESU </p>
        {/*
          <Link to="/Menu class="alignLeft"> MENU </Link>
        */}
            <Link to="/Menu" class="alignLeft">MENU</Link>
            <Link to="/Login" class="alignRight">LOGIN</Link>
            <Link to="/" class="alignRight">HOME</Link>
        </div>
    );
}

export default ToolbarGuest;