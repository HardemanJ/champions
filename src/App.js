import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import Error from "./pages/Error";
import About from "./pages/About";
import SingleChampion from "./pages/SingleChampion";
// import component
import Navbar from "./component/Navbar";
import { Component } from "react";
import { TiFlowChildren } from 'react-icons/ti';

class Icon extends Component {
  render(){
    return <TiFlowChildren />
  } 
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/champion/:id" element={<SingleChampion />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default {App , Icon};
