import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import Home from './Components/Home/home'
import LandingPage from './Components/LandingPage/landingPage'
import Create from './Components/Create/create'
import PokeDetail from './Components/PokeDetail/pokeDetail'
import PokeSearch from './Components/PokeSearch/pokeSearch'

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Home} />
      <Route path='/pokemon/:id' component={PokeDetail} />
      <Route path='/pokemon/{name}' component={PokeSearch} />
      <Route path='/create' component={Create} />
    </React.Fragment>
  );
}


export default App;
