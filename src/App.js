import './App.css'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import Register from './Register.js';
import Menu from './components/Menu.js';
import Notif from './Notif.js';
import User from './User.js';
import Event from './Event.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
        <Route path="/Notif" element={<Notif />}></Route>
        <Route path="/User" element={<User />}></Route>
        <Route path="/Event" element={<Event />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
