import './App.css';
import React,{useState} from 'react'
import Register from './components/Register';
import Login from './components/Login';
import Capture from './components/Capture';
import Main from './components/Main';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


// import Login from './components/Login';
function App() {
  return (
    <div id="App" className="App">
      <Router>
        <Routes>
        <Route exact path="/" element={<Register/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/access-webcam" element={<Capture/>}/>
        <Route exact path="/main" element={<Main/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
