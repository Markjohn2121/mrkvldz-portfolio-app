// import 


  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavProvider from './context/NavContext';
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
import './styles/layout/layout-style.css';
import './styles/effects/effect.css'

// import './js/action.js';
function App() {


  return (

    <Router>
      <div className="App">

        <NavProvider>
          <Header />

          <Navbar />
        </NavProvider>


        {/* <Layout/> */}

        <Routes>

          <Route path="/me/:section" element={<Main key={0}/>} />
          <Route path="/" element={<Main key={1}/>} />

        </Routes>

        <Footer />


      </div>
    </Router>

  );
}

export default App;
