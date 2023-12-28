import React from 'react'
import Card from '../Card/Card'
import Order from '../Order/order'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPokemons, setLoading, setCurrentPage } from '../../Store/Actions/actions'
import style from '../PokeCards/pokeCards.module.css'

function PokeCards() {
  const dispatch = useDispatch() 

  useEffect(() => {
    dispatch(getPokemons())
    dispatch(setLoading())
    dispatch(setCurrentPage())
  }, [])

  const pokemons = useSelector((state) => state.pokemons)
  const pokemonsAlt = useSelector((state) => state.pokemonsAlt)
  const currentPage = useSelector((state) => state.currentPage)

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
      if (poke.id?.length) {
        return (
          <div>
            <Card
              key={poke.id}
              id={poke.id}
              name={poke.name.toUpperCase()}
              sprite={poke.sprite}
              types={poke.Types?.map(e => `${e.name} `)} />
          </div>
        )
      } else {
        return (
          <div>
            <Card
              key={poke.id}
              id={poke.id}
              name={poke.name?.toUpperCase()}
              sprite={poke.sprite}
              types={poke.types?.map(e => `${e} `)} />
          </div>
        )
      }
    }).slice(currentPage, currentPage + pokePerPage)) : <h1 className={style.Message}>Please press All-button before filtering again</h1>
  }

  return (
    <div >
      <div>
        <Order />
      </div>
      <div className={style.Cards}>
        {loading ? (<img
                      height='100px' 
                      width='100px' 
                      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/029b8bd9-cb5a-41e4-9c7e-ee516face9bb/dayo3ow-7ac86c31-8b2b-4810-89f2-e6134caf1f2d.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzAyOWI4YmQ5LWNiNWEtNDFlNC05YzdlLWVlNTE2ZmFjZTliYlwvZGF5bzNvdy03YWM4NmMzMS04YjJiLTQ4MTAtODlmMi1lNjEzNGNhZjFmMmQuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.ooubhxjHp9PIMhVxvCFHziI6pxDAS8glXPWenUeomWs" 
                      alt='Loading... please wait' 
                    />) : pokemonsAlt?.length > 0 ? (show(pokemonsAlt)) : (show(pokemons))}
      </div>
      <div className={style.Pages}>
        {(realPage>1)? <button className={style.Buttons} onClick={previousPage}>Previous</button> : <p/> }
        <button className={style.Buttons}>Page {realPage}</button>
        {(realPage>4)? <p/> : <button className={style.Buttons} onClick={nextPage}>Next</button>}
      </div>
    </div>
  )
}

export default PokeCards
