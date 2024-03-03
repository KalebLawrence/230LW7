import React from 'react';
import Navbar from './navbar';
import Card from './Card';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <h1>CS 230L</h1>
        <h2>Section - 02</h2>
        <p>WVU ID: 800385575</p>
        <p>Hi, I am Kaleb Lawrence</p>

        <div className="row justify-content-center">
          <div className="col">
            <Card type="primary" />
          </div>
          <div className="col">
            <Card type="success" />
          </div>
          <div className="col">
            <Card type="danger" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
