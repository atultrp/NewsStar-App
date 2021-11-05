import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom";

export class App extends Component {
  render() {
    // const apiKey = "1ac1232bc7604eda8836ee0ee4b41ac2";
    return (

      <Router>
        <div>
          <Navbar />
          <News key="general" country="in" category="general" pageSize={3} />
          <Switch>
            <Route  path="/"><News key="general" country="in" category="general" pageSize={3} /></Route>
            <Route  path="/business"><News key="business" country="in" category="business" pageSize={3} /></Route>
            <Route  path="/entertainment"><News key="entertainment" country="in" category="entertainment" pageSize={3} /></Route>
            <Route  path="/health"><News key="health" country="in" category="health" pageSize={3} /></Route>
            <Route  path="/science"><News key="science" country="in" category="science" pageSize={3} /></Route>
            <Route  path="/sports"><News key="sports" country="in" category="sports" pageSize={3} /></Route>
            <Route  path="/technology"><News key="technology" country="in" category="technology" pageSize={3} /></Route>
          </Switch>
        </div>
      </Router>

    )
  }
}

export default App