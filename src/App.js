import React, { Component } from 'react';

import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';

import {
  BrowserRouter,
  Route
} from "react-router-dom";

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <div className='hero-pic' />
          <div className='profile-pic' />
          <div className="body">
            <Route exact path='/' component={Home} />
            {/*<Route exact path='/About' component={About} />*/}
            <Route exact path='/Portfolio' component={Portfolio} />
            <Route exact path='/Resume' component={Resume} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;