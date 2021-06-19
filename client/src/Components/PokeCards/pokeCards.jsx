import React from 'react'
import Card from '../Card/Card'
import Order from '../Order/order'
import { useEffect, useState } from 'react'
import { getPokemons } from '../../Store/Actions/actions'
import { useSelector, useDispatch } from 'react-redux'
import style from '../PokeCards/pokeCards.module.css'

function PokeCards() {
  const dispatch = useDispatch() //disparamos la accion
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    dispatch(getPokemons())
  }, [])

  const pokemons = useSelector((state) => state.pokemons)
  const pokePerPage = 12

  const nextPage = async () => {
    await setCurrentPage(currentPage + pokePerPage)
  }
  const previousPage = async () => {
    if (currentPage > 0)
      await setCurrentPage(currentPage - pokePerPage)
  }

  const realPage = (currentPage / pokePerPage) + 1

  // const pokemonsSorted = pokemons.sort((a,b)=>{
  //   const isReversed = (sortType === 'asc') ? 1 : -1
  //   return isReversed * a.name.localCompare(b.name) 
  // })

  return (
    <div>
      <div>
        <Order/>
      </div>
      <div className={style.Card}>
        {pokemons?.map((poke) => {
          return (
            <Card
              id={poke.id}
              name={poke.name.toUpperCase()}
              sprite={poke.sprite}
              types={poke.types.map(e => `${e} `)}
            />
          )
        }).slice(currentPage, currentPage + pokePerPage)
        }
      </div>
      <div className={style.Pages}>
        <button className={style.Buttons} onClick={previousPage}>PREVIOUS</button>
        <button className={style.Buttons}>{realPage}</button>
        <button className={style.Buttons} onClick={nextPage}>NEXT</button>
      </div>
    </div>
  )
}

export default PokeCards