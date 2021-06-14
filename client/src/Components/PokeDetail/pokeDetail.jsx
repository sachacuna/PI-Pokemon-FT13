import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getPokemonId } from '../../Store/Actions/actions'
import CardDetail from '../CardDetails/cardDetails'
import '../Home/home.css'
import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";


function PokeDetail({ match }) {
    const id = match.params.id
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemonId(id))
    }, [])

    const pokemons = useSelector((state) => state.pokemonDetail)
    return (
        <div><div id='navBack'>
            <ul id="navList">
                <li>
                    <img src="https://cdn.theorg.com/d3119e0e-8202-4034-85ce-d0356382515e_thumb.jpg" alt='Henry Logo' height='55px' width='55px' />
                </li>
                <li>
                    <a href="http://localhost:3000/home">Go Back</a>
                </li>
                <li>
                    FILTERS LOCO, LOS FILTERS
                </li>
                <li>
                    <FaSortAlphaDown />
                </li>
                <li>
                    <FaSortAlphaDownAlt />
                </li>
                <li>
                    <input placeholder="Insert Pokename here!" />
                </li>
            </ul>
        </div>
            <div id='cardDetail'>
                <CardDetail
                    name={pokemons.name}
                    id={pokemons.id}
                    sprite={pokemons.sprite}
                    height={pokemons.height}
                    weight={pokemons.weight}
                    hp={pokemons.hp}
                    attack={pokemons.attack}
                    defense={pokemons.defense}
                    speed={pokemons.speed}
                    types={pokemons.types}
                />
            </div>
        </div>
    )
}

export default PokeDetail