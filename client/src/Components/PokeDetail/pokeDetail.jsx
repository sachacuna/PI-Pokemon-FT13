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
    }, [id])

    const pokemons = useSelector((state) => state.pokemonDetail)
    
    if (typeof pokemons.id==='string') {
        return (<h4>el id es un string</h4>)
    } else {
    return (
        <div>
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
    )}
}

export default PokeDetail