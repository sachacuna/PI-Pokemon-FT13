import React from 'react'
import {Link} from 'react-router-dom'
import '../Card/card.css'

function Card({name,sprite,types,id}){

    return (
    
        <div id='pokeCard'>
            <h2>{name}</h2>
            <Link to={`/pokemon/${id}`}>
            <img src={sprite} alt='imagen pokemon' height='125px' width='125px' />
            </Link>
            <h4>Types: {types}</h4>
        </div>

    )
}


export default Card