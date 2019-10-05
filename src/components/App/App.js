import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Details from '../Details/Details';
import Edit from '../Edit/Edit';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
      <Router>
      <div className="App">
        <Route path="/" exact component={Home}></Route>
        <Route path="/details/:id" render={({match})=><Details match={match}/>}></Route>
        <Route path="/edit/:id" render={({match})=><Edit match={match}/>}></Route>
      </div>
      </Router>
    );
  }
}

export default App;
