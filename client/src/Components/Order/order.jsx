import React from 'react'
import {
    getOrderAsc,
    getOrderDesc,
    getOrderWeakest,
    getOrderStrongest,
    getFilterAPI,
    getFilterDB,
    getPokemons,
    getTypes,
    getFilterType
} from '../../Store/Actions/actions'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import '../Order/order.css'


export default function Order() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTypes())
    }, [])

    const [selectedType, setSelectedType] = useState('')
    const [filterType, setFilterType] = useState([])

    const pokemons = useSelector(state => state.pokemons)
    const pokemonsAlt = useSelector(state => state.pokemonsAlt)
    const types = useSelector(state => state.types)

    function orderAsc(e) {
        e.preventDefault()
        dispatch(getOrderAsc())
    }

    function orderDesc(e) {
        e.preventDefault()
        dispatch(getOrderDesc())
    }
    function orderWeakest(e) {
        e.preventDefault()
        dispatch(getOrderWeakest())
    }

    function orderStrongest(e) {
        e.preventDefault()
        dispatch(getOrderStrongest())
    }

    function filterAll(e) {
        e.preventDefault()
        dispatch(getPokemons())
    }
    function filterApi(e) {
        e.preventDefault()
        dispatch(getFilterAPI())
    }
    function filterDb(e) {
        e.preventDefault()
        dispatch(getFilterDB())
    }

    function handleChangeTypes(e) {
        setSelectedType(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        setFilterType([...filterType, selectedType])
        handleClick()
    }

    function handleClick() {
        let data = []
        pokemons.forEach(poke => {
            if (poke.id?.length) {
                poke.Types?.map(type => type.name === selectedType ? data.push(poke) : null)
            } else {
                if (poke.types.includes(selectedType)) {
                    data.push(poke)
                } else {
                    return null
                }
            }
        })
        dispatch(getFilterType(data))
    }
    return (
        <div id="Buttons">
            <h4>Order By:</h4>
            <form>
                <button onClick={(e) => orderAsc(e)}>A - Z</button>
            </form>
            <form>
                <button onClick={(e) => orderDesc(e)}>Z - A</button>
            </form>
            <form>
                <button onClick={(e) => orderWeakest(e)}>Weakness</button>
            </form>
            <form>
                <button onClick={(e) => orderStrongest(e)}>Strength</button>
            </form>
            <h4>Filter By:</h4>
            <form>
                <button onClick={(e) => filterAll(e)}>All</button>
            </form>
            <form>
                <button onClick={(e) => filterApi(e)}>Originals</button>
            </form>
            <form>
                <button onClick={(e) => filterDb(e)}>User-Made</button>
            </form>
            <form onSubmit={handleSubmit}>
                <h4>Choose a Type:</h4>
                <select onChange={handleChangeTypes} name='types' value={selectedType}>
                    <option value='all'>All</option>
                    {types?.map((type) => (
                        <option value={type.name} key={type.id}>
                            {type.name}
                        </option>))}
                </select>
                <button type='submit'>Filter Type</button>
                <form>
                    <button type='submit' onChange={handleChangeTypes} name='types' value={''}>Reset</button>
                </form>
            </form>
        </div>
    )
}
