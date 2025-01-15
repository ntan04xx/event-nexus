import './Home.css';
import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="Home">
      <header className="Home-header">
        Schedule your next event at ESU! EVENT-NEXUS!
        <div className='Home-loginregister'>
            <p>
              If you are a first time user: REGISTER
            </p>
            <p>
              Else:
              <Link to="/Login"> LOGIN </Link>
            </p>
        </div>
      </header>
    </div>
  );
}

export default Home;