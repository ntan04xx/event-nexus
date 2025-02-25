import './ToolbarGuest.css'
import {Link} from "react-router-dom";

// New users go to register from login
const ToolbarGuest = ({ toggleMenu }) => {
    return (
        <div className="ToolbarGuest">
            <p className="alignLeft" style={{fontSize: "18px", color: 'white'}}> ESU </p>
            <button onClick={toggleMenu} style={{fontSize: "14px"}} className="alignLeft">MENU</button>
            <Link to="/Login" className="alignRight">LOGIN</Link>
            <Link to="/" className="alignRight">HOME</Link>
        </div>
    );
}

export default ToolbarGuest;