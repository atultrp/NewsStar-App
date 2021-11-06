import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Route,
  Switch
  // Routes
} from "react-router-dom";

export class App extends Component {
  render() {
    // const apiKey = "1ac12pageSize2bc7604eda88pageSize6ee0ee4b41ac2";
    let pageSize = 6;
    return (

      <Router>
        <div>
          <Navbar />
          {/* <News key="general" country="in" category="general" pageSize={pageSize} /> */}
          <Switch>
            <Route path="/business">
            <News key="bussiness" country="in" category="bussiness" pageSize={pageSize} />
            </Route>
            <Route path="/">
            <News key="general" country="in" category="general" pageSize={pageSize} />
            </Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App