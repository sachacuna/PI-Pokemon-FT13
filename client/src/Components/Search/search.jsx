import React,{ useState, useEffect } from 'react'
import '../Search/search.css'
import { getPokemonName } from '../../Store/Actions/actions'
//REVISAR ESTA ACTION


export default function Search(getPokemonName) {
    const [name, setName] = useState('')

    function handleChange(e) {
        setName(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (name.length) {
            getPokemonName(name)
        }

    }

    return (
        <div id="SearchButton">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type='text'
                    onChange={(e)=>handleChange(e)}
                    placeholder='INSERT POKÉMON NAME'
                    
                />
                <button
                    id="SearchButton"
                    type='submit'>
                    Search
                </button>
            </form>
        </div>
    )
}