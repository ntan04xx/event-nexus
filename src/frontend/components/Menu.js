import './Menu.css'
import {Link} from "react-router-dom";
import { useEffect, useState } from 'react';

const Menu = ({ isVisible }) => {
  const threshold = 1200;
  const [isSmallWindow, setIsSmallWindow] = useState(() => window.innerWidth < threshold);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallWindow(window.innerWidth < threshold);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (!isVisible) {
    return null
  };
  return (
    <div className={`Menu ${isSmallWindow ? 'small' : ''}`}>
      <Link to="/Notif" className="alignTop"> Notifications </Link>
      <Link to="/User" className="alignTop"> Personal Details </Link>
      <Link to="/Event" className="alignTop"> Your Events </Link>
      <p className={`alignBottom ${isSmallWindow ? 'small' : ''}`}>© Eastern Sydney University 2025</p>
    </div>
  );
}

export default Menu;