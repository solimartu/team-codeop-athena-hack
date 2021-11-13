
import ReactRoutes from './components/ReactRoutes'
import NavBar from './components/NavBar'
import {BrowserRouter as Router } from 'react-router-dom'
import React, {useState} from 'react';
import './App.css';
//import { Link, Outlet } from "react-router-dom";



function App() {


    return (

        <Router>
          <div className="App">
           

          <NavBar />


          <ReactRoutes 
     
          />
          </div>
    </Router>
  );
}

export default App;
