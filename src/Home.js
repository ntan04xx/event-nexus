import './Home.css';
import {Link} from "react-router-dom";
import ToolbarGuest from './ToolbarGuest';

function Home() {
  return (
    <div className="Home">
      <header className="Toolbar-header">
        <ToolbarGuest/>
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