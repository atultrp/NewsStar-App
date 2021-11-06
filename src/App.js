import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Route,
  Switch,
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
          {/* <News key="general" country="in" category="general" pageSize={pageSize} /> */}
          <Routes>
            <Route exact path="/" element={<News key="general" country="in" category="general" pageSize={pageSize} />}/>
            <Route exact path="/business" element={<News key="business" country="in" category="business" pageSize={pageSize} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" country="in" category="entertainment" pageSize={pageSize} />} />
            <Route exact path="/health" element={<News key="health" country="in" category="health" pageSize={pageSize} />}/>
            <Route exact path="/science" element={<News key="science" country="in" category="science" pageSize={pageSize} />}/>
            <Route exact path="/sports" element={<News key="sports" country="in" category="sports" pageSize={pageSize} />}/>
            <Route exact path="/technology" element={<News key="technology" country="in" category="technology" pageSize={pageSize} />}/>
          </Routes>
        </div>
      </Router>
    )
  }
}

export default App