import React, { Component } from 'react';

import Navbar from './components/navbar/Navbar';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Resume from './components/resume/Resume';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      page: "About"
    };

    this.navPortfolio = this.navPortfolio.bind(this);
    this.navAbout = this.navAbout.bind(this);
    this.navResume = this.navResume.bind(this);
  }

  navPortfolio() {
    this.setState({
      page: "Portfolio"
    });
  }

  navAbout() {
    this.setState({
      page: "About"
    });
  }

  navResume() {
    this.setState({
      page: "Resume"
    });
  }

  render() {
    return (
      <div className="App">

        <Navbar
          navAbout={this.navAbout}
          navPortfolio={this.navPortfolio}
          navResume={this.navResume}
        />

        {
          this.state.page === "About" && (<About />)
        }

        {
          this.state.page === "Portfolio" && (<Portfolio />)
        }

        {
          this.state.page === "Resume" && (<Resume />) 
        }

      </div>
    );
  }
}

export default App;
