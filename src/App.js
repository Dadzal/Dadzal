import './App.css';
import React from 'react'
import Navbar from './Components/Navbar/Navbar'

import {
     BrowserRouter as Router,
     Route,
     Redirect,
     Switch
    } 
from 'react-router-dom';
      
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Service from './pages/Services/Services';
import Testimonials from './pages/Testimonials/Testimonials';
import EventList from './pages/Events/EventList';
import './App.css'
// import Home from './pages/Home/Home';
       
const App = () => {
  return (
    <Router>
      <Navbar/>
      <main>
       <Switch>
        <Route path="/" exact component={Home}>
          <Home/>
        </Route>
        <Route path="/Events" exact>
          <EventList/>
        </Route>
        <Route path="/About" exact>
          <About/>
        </Route>
        <Route path="/Services" exact>
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
