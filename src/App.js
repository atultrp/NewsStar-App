import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <News apiKey="1ac1232bc7604eda8836ee0ee4b41ac2" country="in" category="business" pageSize={3}/>
      </div>
    )
  }
}

export default App