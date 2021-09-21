// import logo from './logo.svg';
// import './App.css';
import React from 'react'
// import Navbar from './components/Navbar/Navbar'

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
      {/* <Navbar/> */}
      <main>
       <Switch>
       <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/Events" exact>
          <Events/>
        </Route>
        <Route path="/About" exact>
          <About/>
        </Route>
        <Route path="/Service" exact>
          <Service/>
        </Route>
        <Route path="/Testimonials" exact>
          <Testimonials/>
        </Route>
        <Redirect to = "/"/>
       </Switch>
      </main>
    </Router>
  );
}

export default App;
