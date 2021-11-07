import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export class App extends Component {
  render() {
    // const apiKey = "1ac12pageSize2bc7604eda88pageSize6ee0ee4b41ac2";
    let pageSize = 6;
    return (
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News key="general" country="in" category="general" pageSize={pageSize} headlines="Today's Top Headlines"/>} />
            <Route exact path="/business" element={<News key="business" country="in" category="business" pageSize={pageSize} headlines="Business Headlines"/>} />
            <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" pageSize={pageSize} headlines="Entertainment Headlines"/>} />
            <Route exact path="/health" element={<News key="health" country="in" category="health" pageSize={pageSize} headlines="Health Headlines"/>} />
            <Route exact path="/science" element={<News key="science" country="in" category="science" pageSize={pageSize} headlines="Science Headlines"/>} />
            <Route exact path="/sports" element={<News key="sports" country="in" category="sports" pageSize={pageSize} headlines="Sports Headlines"/>} />
            <Route exact path="/technology" element={<News key="technology" country="in" category="technology" pageSize={pageSize} headlines="Technology Headlines"/>} />
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App