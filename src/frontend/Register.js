import './Register.css';
import {Link} from "react-router-dom";
import ToolbarGuest from './components/ToolbarGuest';
import {useState} from "react";
import Menu from './components/Menu';
import axios from "axios";

function Register() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    firstjoin: "",
    academicstatus: ""
  });
  const [menuVisible, setMenuVisible] = useState(false);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value});
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/users/register", {
        ...formData,
        firstjoin: new Date().toISOString()
      });
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
          <input
            type = "text"
            name = "firstname"
            placeholder='First Name'
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          <input
            type = "text"
            name = "lastname"
            placeholder='Last Name'
            value={formData.lastname}
            onChange={handleChange}
            required
          />
          <select
            name="academicstatus"
            value={formData.academicstatus}
            onChange={handleChange}
            required
          >
            <option value="">-- Select Academic Status --</option>
            <option value="first">First Year</option>
            <option value="second">Second Year</option>
            <option value="third">Third Year</option>
            <option value="fourth">Fourth Year</option>
            <option value="fifth+">Fifth Year+</option>
            <option value="masters">Masters</option>
            <option value="phd">PhD</option>
            <option value="staff">Staff</option>
            <option value="alumni">Alumni</option>
            <option value="guest">Guest</option>
          </select>

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