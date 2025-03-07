import './Home.css';
import {useState} from "react";
import {Link} from "react-router-dom";
import ToolbarGuest from './components/ToolbarGuest';
import Menu from './components/Menu';

const Home = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return (
    <div className="Home">
      <header className="Toolbar-header">
        <ToolbarGuest toggleMenu={toggleMenu} />
        <Menu isVisible={menuVisible} />
      </header>

      <header className="Home-header">
        <h1>EVENT NEXUS</h1>
        <h2>Schedule your next event at ESU!</h2>
        <div className='Home-loginregister'>
            <p>
              If you are a first time user:
              <Link to="/Register" className='Home-link'> REGISTER </Link>
            </p>
            <p>
              Else:
              <Link to="/Login" className='Home-link'> LOGIN </Link>
            </p>
        </div>
      </header>
    </div>
  );
}

export default Home;