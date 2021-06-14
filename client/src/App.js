import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Components/Home/home'
import LandingPage from './Components/LandingPage/landingPage'
import PokeCards from './Components/PokeCards/pokeCards'
import Footer from './Components/Footer/footer'
import PokeDetail from './Components/PokeDetail/pokeDetail'

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Home} />
      <Route path='/pokemon/:id' component={PokeDetail} />
      <Route path='/home' component={Footer} />
    </React.Fragment>
  );
}


export default App;
