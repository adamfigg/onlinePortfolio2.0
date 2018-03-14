import React, { Component } from 'react';

import Navbar from './components/navbar/Navbar';
import About from './components/about/About';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <Navbar/>
        <About/>

      </div>
    );
  }
}

export default App;
