import React from 'react'
import {Link} from 'react-router-dom'


function Card({name,sprite,types,id}){

    return (
        <div>
            <h3>{name}</h3>
            <h3>Types: {types}</h3>
            <Link to={`/pokemon/${id}`}>
            <img src={sprite} alt='imagen pokemon' height='80px' width='80px' />
            </Link>
        </div>

    )
}


export default Card