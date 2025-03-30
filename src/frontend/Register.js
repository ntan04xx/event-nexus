import './Register.css';
import {Link} from "react-router-dom";
import ToolbarGuest from './components/ToolbarGuest';
import {useState} from "react";
import Menu from './components/Menu';
import axios from "axios";

function Register() {
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
      const response = await axios.post("http://localhost:3000/users/register", formData);
      console.log("User registered", response.data);
    } catch(e) {
      console.error("Error registering user:", e.response?.data || e.message);
    }
  }
  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className="Register">
      <header className="Toolbar-header">
        <ToolbarGuest toggleMenu={toggleMenu} />
        <Menu isVisible={menuVisible} />
      </header>

      <header className="Register-header">
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
          <button type="submit">Register Now</button>
        </form>

        <p> 
          Already have account? 
          <Link to="/Login" className='Register-link'> Login here </Link>
        </p>
      </header>
    </div>
  );
}

export default Register;