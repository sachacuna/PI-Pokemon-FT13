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
    const [filterTypeDB, setFilterTypeDB] = useState([])

    const pokemons = useSelector(state => state.pokemons)
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
            if (typeof poke.id === 'string') {
                poke.types?.map(type => type === selectedType ? data.push(poke) : null)
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
            </form>
        </div>
    )
}


    // <option value="normal">Normal</option>
    //                 <option value="fighting">Fighting</option>
    //                 <option value="flying">Flying</option>
    //                 <option value="poison">Poison</option>
    //                 <option value="ground">Ground</option>
    //                 <option value="rock">Rock</option>
    //                 <option value="bug">Bug</option>
    //                 <option value="ghost">Ghost</option>
    //                 <option value="steel">Steel</option>
    //                 <option value="fire">Fire</option>
    //                 <option value="water">Water</option>
    //                 <option value="grass">Grass</option>
    //                 <option value="electric">Electric</option>
    //                 <option value="psychic">Psychic</option>
    //                 <option value="ice">Ice</option>
    //                 <option value="dragon">Dragon</option>
    //                 <option value="dark">Dark</option>
    //                 <option value="fairy">Fairy</option>
    //                 <option value="unknown">Unknown</option>
    //                 <option value="shadow">Shadow</option>