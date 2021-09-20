// import logo from './logo.svg';
// import './App.css';
import React from 'react'

import {
BrowserRouter as Router,
Route,
Redirect,
Switch
 } from 'react-router-dom';

import About from './pages/About/About';
import Events from './pages/Events/Events';
import Home from './pages/Home/Home';
import Service from './pages/Services/Services';
import Testimonials from './pages/Testimonials/Testimonials';

const App = () => {
  return (
    <Router>
      <main>
       <Switch>
       <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/" exact>
          <Events/>
        </Route>
        <Route path="/" exact>
          <About/>
        </Route>
        <Route path="/" exact>
          <Service/>
        </Route>
        <Route path="/" exact>
          <Testimonials/>
        </Route>
        <Redirect to = "/"/>
       </Switch>
      </main>
    </Router>
  );
}

export default App;
