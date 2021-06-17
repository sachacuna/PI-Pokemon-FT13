import React from 'react'
//import axios from 'axios'
//import { POKE_URL } from '../../Constants/constants'
//import { connect } from 'react-redux'
import { useEffect } from 'react'
import { getPokemonId, getPokemons , getPokemonName} from '../../Store/Actions/actions'
import { useSelector, useDispatch } from 'react-redux'
import Card from '../Card/Card'
import style from '../PokeCards/pokeCards.module.css'

function PokeCards() {
  const dispatch = useDispatch() //disparamos la accion

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  const pokemons = useSelector((state) => state.pokemons)
  return (
    <div className={style.Card}>
      {
        pokemons?.map((poke) => {
          return (
            <Card
              id={poke.id}
              name={poke.name.toUpperCase()}
              sprite={poke.sprite}
              types={poke.types.map(e => `${e} `)}
            />
          )
        })
      }
    </div>
  )
}

export default PokeCards