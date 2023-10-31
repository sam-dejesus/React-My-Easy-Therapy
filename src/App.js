import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home';
import 'bootstrap/dist/js/bootstrap.bundle';

// import About from './pages/about/About';
// import Contact from './pages/contact/Contact';
// import Resource from './pages/resource/Resource';
// import Services from './pages/services/Services';


import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'  element={<Home />}/>
      </Routes>

    </Router>


  );
}

export default App;
