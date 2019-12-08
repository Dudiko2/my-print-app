import React, { Component } from 'react';
import './App.css';
import Navigation from './Navigation/Navigation';
import Homepage from './Homepage/Homepage';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import apiKey from './key';
import ProductPage from './Productpage/Productpage';

class App extends Component {

  state = {
    menuOpen: false
  }

  toggleMenu = () => {
    let newState = !(this.state.menuOpen);
    this.setState({menuOpen: newState});
  }

  render() {

    return (
      <Router>
        <div className="App">
          <Navigation
            toggleMenu={this.toggleMenu}
            menuOpen={this.state.menuOpen} />
          
          <Route exact path='/'>
            <Homepage apiKey={apiKey()} />
          </Route>

          <Route path='/products/:id'>
            <ProductPage apiKey={apiKey()} />
          </Route>

        </div>
      </Router>
    );
  }
}

export default App;
