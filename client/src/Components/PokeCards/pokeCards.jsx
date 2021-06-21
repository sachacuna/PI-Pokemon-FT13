import React from 'react'
import Card from '../Card/Card'
import Order from '../Order/order'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemons, setLoading } from '../../Store/Actions/actions'
import style from '../PokeCards/pokeCards.module.css'

function PokeCards() {
  const dispatch = useDispatch() //disparamos la accion
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    dispatch(getPokemons())
    dispatch(setLoading())
  }, [])

  const pokemons = useSelector((state) => state.pokemons)
  const filtered = useSelector((state) => state.filtered)
  const loading = useSelector((state) => state.loading)

  const pokePerPage = 12

  const nextPage = () => {
    setCurrentPage(currentPage + pokePerPage)
  }
  const previousPage = () => {
    if (currentPage > 0)
      setCurrentPage(currentPage - pokePerPage)
  }

  const realPage = (currentPage / pokePerPage) + 1

  function show(data) {
    return data?.length ? (data.map((poke) => {
      return (
        <div>
          <Card
            key={poke.id}
            id={poke.id}
            name={poke.name.toUpperCase()}
            sprite={poke.sprite}
            types={poke.types?.map(e => `${e} `)} />
        </div>
      )
    }).slice(currentPage, currentPage + pokePerPage)):<h1>Please try again...</h1>
  }

  return (
    <div >
      <div>
        <Order />
      </div>
      <div className={style.Cards}>
        {loading? (<h4>Loading... please wait</h4>): filtered?.length>0? (show(filtered)):(show(pokemons))}
      </div>
      <div className={style.Pages}>
        <button className={style.Buttons} onClick={previousPage}>Previous</button>
        <button className={style.Buttons}>Page {realPage}</button>
        <button className={style.Buttons} onClick={nextPage}>Next</button>
      </div>
    </div>
  )
}

export default PokeCards