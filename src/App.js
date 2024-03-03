import React from 'react';
import Navbar from './navbar'; // Import the Navbar component
import Card from './Card'; // Import the Card component
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar /> {/* Render the Navbar component */}
      <div className="container">
        <div className="row">
          <div className="col">
            <Card /> {/* Render the Card component */}
          </div>
          <div className="col">
            <Card /> {/* Render another instance of the Card component */}
          </div>
          <div className="col">
            <Card /> {/* Render another instance of the Card component */}
          </div>
        </div>
      </div>
      <h1>CS 230L</h1>
      <h2>Section - 02</h2>
      <p>WVU ID: 800385575</p>
      <p>Hi, I am Kaleb Lawrence</p>
    </div>
  );
}

export default App;
