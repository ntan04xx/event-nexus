import './Toolbar_Guest.css'
import {Link} from "react-router-dom";

function Toolbar_Guest() {
    return (
        <div className="Toolbar_Guest">
        {/*
          <Link to="/Menu class="alignLeft"> MENU </Link>
        */}
            <Link to="/" class="alignRight">HOME</Link>
            <Link to="/Login" class="alignRight">LOGIN</Link>
        </div>
    );
}

export default Toolbar_Guest;