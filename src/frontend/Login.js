import './Login.css';
import {Link} from "react-router-dom";
import ToolbarGuest from './components/ToolbarGuest';
import {useState} from "react";
import Menu from './components/Menu';
import axios from "axios";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: ""
  });
  const [menuVisible, setMenuVisible] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/login", formData);
      console.log("Logged in", response.data);
    } catch(e) {
      console.error("Error logging in user:", e.response?.data || e.message);
    }
  }
  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className="Login">
      <header className="Toolbar-header">
        <ToolbarGuest toggleMenu={toggleMenu} />
        <Menu isVisible={menuVisible} />
      </header>

      <header className="Login-header">
        <form onSubmit={handleSubmit}>
          <input
            type = "text"
            name = "username"
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type = "text"
            name = "password"
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">Login</button>
        </form>

        <p>
          New User?  
          <Link to="/Register" className='Login-link'> Register here </Link>
        </p>
      </header>
    </div>
  );
}

export default Login;