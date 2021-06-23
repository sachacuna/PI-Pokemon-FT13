import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//import { Link } from 'react-router-dom'
import { getPokemonId } from '../../Store/Actions/actions'
import CardDetail from '../CardDetails/cardDetails'
import '../Home/home.css'
//import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";


function PokeDetail({ match }) {
    const id = match.params.id
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemonId(id))
    }, [id])

    const pokemons = useSelector((state) => state.pokemonDetail)

    if (typeof pokemons.id !== 'number') {
        //console.log('que hay en pokemons', pokemons)
        //console.log('entre al if')
        return (<div>
            <div id='cardDetail'>
                <CardDetail
                    name={pokemons[0]?.name}
                    id={pokemons[0]?.id}
                    sprite={pokemons[0]?.sprite}
                    height={pokemons[0]?.height}
                    weight={pokemons[0]?.weight}
                    hp={pokemons[0]?.hp}
                    attack={pokemons[0]?.attack}
                    defense={pokemons[0]?.defense}
                    speed={pokemons[0]?.speed}
                    types={pokemons[0]?.Types.map(e => `${e.name} `)}
                />
            </div>
        </div>)
    } else {
        //console.log('entre al ELSE')
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
        )
    }
}

export default PokeDetail