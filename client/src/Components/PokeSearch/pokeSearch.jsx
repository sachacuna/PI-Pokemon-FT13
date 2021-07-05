// import React from 'react'
// import { useEffect } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
// import {getPokemonName } from '../../Store/Actions/actions'
// import '../Home/home.css'
// import '../Card/card.css'

// function PokeSearch({ match }) {
//     const name = match.params.name
//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(getPokemonName(name))
//     }, [])

//     const pokemons = useSelector((state) => state.pokemonDetail)
//     function Card({name,sprite,types,id}){

//         return (
        
//             <div id='pokeCard'>
//                 <h2>{name}</h2>
//                 <Link to={`/pokemon/${id}`}>
//                 <img src={sprite} alt='imagen pokemon' height='125px' width='125px' />
//                 </Link>
//                 <h4>Types: {types}</h4>
//             </div>
    
//         )
//     }}

// export default PokeSearch