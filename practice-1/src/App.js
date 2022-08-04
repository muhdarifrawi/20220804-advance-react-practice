import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React from 'react';
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <React.Fragment>
      {/* Router `points` the link to the Routes */}
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        {/* Routes is where the pages will appear */}
        {/* Routes should be nested inside the Router */}
        {/* path should match with `to` in the Router/Link */}
        {/* element points to the imported component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
