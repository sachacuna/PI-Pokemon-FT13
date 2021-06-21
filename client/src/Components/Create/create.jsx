import '../Create/create.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import Footer from '../Footer/footer'
import Nav from '../Nav/nav'
import {getTypes} from '../../Store/Actions/actions'


const Create = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTypes())
    }, [])

    const types = useSelector(state => state.types)

    return (
        <div>
            <Nav />
            <div>
                <h2>CREATE Poke Form</h2>
                <form className="forms">
                    <label>Name:</label><input name="name" type='text' placeholder='INSERT POKÉMON NAME' autoComplete="off" />
                    <label>Height:</label><input name="height" type='text' placeholder='MUST BE A NUMBER' autoComplete="off" />
                    <label>Weight:</label><input name="weight" type='text' placeholder='MUST BE A NUMBER' autoComplete="off" />
                    <label>HP:</label><input name="hp" type='text' placeholder='MUST BE A NUMBER' autoComplete="off" />
                    <label>Attack:</label><input name="attack" type='text' placeholder='MUST BE A NUMBER' autoComplete="off" />
                    <label>Defense:</label><input name="defense" type='text' placeholder='MUST BE A NUMBER' autoComplete="off" />
                    <label>Speed:</label><input name="speed" type='text' placeholder='MUST BE A NUMBER' autoComplete="off" />
                    <select name='types'>
                        <h4>You can choose up two types</h4>
                        <option>First Type</option>
                        {types?.map((type) => (
                            <option value={type.name} key={type.id}>
                                {type.name}
                            </option>))}
                            </select>
                            <select name='types'>

                        <option>Second Type(optional)</option>
                        {types?.map((type) => (
                            <option value={type.name} key={type.id}>
                                {type.name}
                            </option>))}
                    </select>
                    <button>CREATE</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Create
