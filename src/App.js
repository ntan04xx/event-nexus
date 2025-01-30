import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import Register from './Register.js';
import Event from './Event.js';
import Menu from './Menu.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/Event" element={<Event />}></Route>
        <Route path="/Menu" element={<Menu />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
