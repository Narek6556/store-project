import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaHome,FaApplePay } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-6">column number one <FaHome size = {30} color = 'Green'/></div>
          <div className="col-6">column number two <FaApplePay size = {45} color = 'Blue'/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
