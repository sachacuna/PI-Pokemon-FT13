import React, { useState } from 'react'
import {  useDispatch } from 'react-redux'
import '../Search/search.css'
import { getPokemonName } from '../../Store/Actions/actions'


export default function Search() {
    const [input, setInput] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        dispatch(getPokemonName(input))
    }

    function handleChange(s) {
        setInput(s)
    }

    const dispatch = useDispatch()

    return (
        <div id="SearchButton">
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <input
                        type='text'
                        onChange={(e) => handleChange(e.target.value)}
                        placeholder='INSERT POKÉMON NAME'

                    />
                </div>

                <button
                    id="SearchButton"
                    type='submit'>
                    Search
                </button>

            </form>
        </div>
    )
}
