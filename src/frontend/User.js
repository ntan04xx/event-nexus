import './User.css';
import ToolbarGuest from './components/ToolbarGuest';
import {useState} from "react";
import Menu from './components/Menu';

const User = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  const [user, setUser] = useState(null);
  useEffect(() => {
    fetch('/api/users/view', { credentials: 'include' })
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error('Failed to load user data:', err));
  }, []);
  if (!user) return <p>Currently unavailable, please try again later.</p>;

  return (
    <div className="User">
      <header className="Toolbar-header">
        <ToolbarGuest toggleMenu={toggleMenu} />
        <Menu isVisible={menuVisible} />
      </header>

      <header className="User-header">
        <h2>Your Personal Details</h2>
        <p>Username: {user.username} </p>
        <p>First Name: {user.firstname} </p>
        <p>Last Name: {user.lastname} </p>
        <p>First Joined: {user.dateJoin} </p>
        <p>Academic Status: {user.academicStatus} </p>
        <p>Your Events: </p>
        {user.events && user.events.length > 0 ? (
        <ul>
          {user.events.map((event, index) => (
            <li key={index}>
              <p>Name: {event.name}</p>
              <p>Date: {event.date}</p>
            </li>
          ))}
        </ul>
        ) : (
          <p>No events yet made.</p>
        )}
      </header>
    </div>
  );
}

export default User;