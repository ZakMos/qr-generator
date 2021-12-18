import 'normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import App from './App';
import Impressum from './views/Impressum';
import NotFound from './components/NotFound'

import './App.css';

const routing =(
    <Router>
      <div className="App">
        <Header />
          <Routes>
              <Route path="/" element={<App/>}></Route>
              <Route path="impressum" element={<Impressum/>}></Route>
              <Route path="/*" element={<NotFound/>}></Route>

          </Routes>
        <Footer />
      </div>
    </Router>
);
  
ReactDOM.render(routing, document.getElementById('root'));
