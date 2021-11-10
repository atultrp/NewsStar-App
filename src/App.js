import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const App = () => {

  const [progress, setProgress] = useState(0);
  
//   const apiKey = process.env.REACT_APP_NEWS_API;
  const apiKey = "1ac1232bc7604eda8836ee0ee4b41ac2";
  const pageSize = 6;

  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar
          color='#f11946'
          height={3}
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={<News setProgress={setProgress} apiKey={apiKey} key="general" country="in" category="general" pageSize={pageSize} headlines="Today's Top Headlines" />} />
          <Route exact path="/business" element={<News setProgress={setProgress} apiKey={apiKey} key="business" country="in" category="business" pageSize={pageSize} headlines="Business Headlines" />} />
          <Route exact path="/entertainment" element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" country="in" category="entertainment" pageSize={pageSize} headlines="Entertainment Headlines" />} />
          <Route exact path="/health" element={<News setProgress={setProgress} apiKey={apiKey} key="health" country="in" category="health" pageSize={pageSize} headlines="Health Headlines" />} />
          <Route exact path="/science" element={<News setProgress={setProgress} apiKey={apiKey} key="science" country="in" category="science" pageSize={pageSize} headlines="Science Headlines" />} />
          <Route exact path="/sports" element={<News setProgress={setProgress} apiKey={apiKey} key="sports" country="in" category="sports" pageSize={pageSize} headlines="Sports Headlines" />} />
          <Route exact path="/technology" element={<News setProgress={setProgress} apiKey={apiKey} key="technology" country="in" category="technology" pageSize={pageSize} headlines="Technology Headlines" />} />
        </Routes>
      </div>
    </Router >
  )
}

export default App
