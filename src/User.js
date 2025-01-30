import './User.css';
import ToolbarGuest from './ToolbarGuest';

function User() {
  return (
    <div className="User">
      <header className="Toolbar-header">
        <ToolbarGuest/>
      </header>

      <header className="User-header">
        <h2>Your Personal Details</h2>
        <p>Username: </p>
        <p>First Name: </p>
        <p>Last Name: </p>
        <p>First Joined: </p>
        <p>Academic Status: </p>
        <p>Your Events: </p>
      </header>
    </div>
  );
}

export default User;