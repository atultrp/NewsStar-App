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
            <Route exact path="/"><News key="general" country="in" category="general" pageSize={pageSize} /></Route>
            <Route exact path="/business"><News key="business" country="in" category="business" pageSize={pageSize} /></Route>
            <Route exact path="/entertainment"><News key="entertainment" country="in" category="entertainment" pageSize={pageSize} /></Route>
            <Route exact path="/health"><News key="health" country="in" category="health" pageSize={pageSize} /></Route>
            <Route exact path="/science"><News key="science" country="in" category="science" pageSize={pageSize} /></Route>
            <Route exact path="/sports"><News key="sports" country="in" category="sports" pageSize={pageSize} /></Route>
            <Route exact path="/technology"><News key="technology" country="in" category="technology" pageSize={pageSize} /></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App