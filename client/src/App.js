import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Components/Home/home'
import LandingPage from './Components/LandingPage/landingPage'

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={LandingPage}/>
      <Route path='/home' component={Home}/>
    </React.Fragment>
  );
}

export default App;
