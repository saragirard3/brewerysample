import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './index.css';
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Beer from "./components/Beer";
import Taproom from "./components/Taproom";
import Story from "./components/Story";
import Contact from "./components/Contact";
import Events from "./components/Events";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Navbar />


      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/beer" element={<Beer />}/>
        <Route path="/taproom" element={<Taproom />} />
          <Route path="/story" element={<Story />} />
          <Route path="/events" element={<Events />} />
          <Route path="/Contact" element={<Contact />} />

      </Routes>

      {/*<Footer />*/}

    </Router>

  </React.StrictMode>
);

