import '../Create/create.css'
import React from 'react'
import Footer from '../Footer/footer'
import Nav from '../Nav/nav'

const Create = () => {
    return (
        <div>
            <Nav />
            <div>
                <h2>CREATE Poke Form</h2>
                <form>
                    <label>Name:</label><input name="name" type='text' placeholder='INSERT POKÉMON NAME' autoComplete="off"/>
                    <label>Height:</label><input name="height" type='text' placeholder='MUST BE A NUMBER' autoComplete="off"/>
                    <label>Weight:</label><input name="weight" type='text' placeholder='MUST BE A NUMBER' autoComplete="off"/>
                    <label>HP:</label><input name="hp" type='text' placeholder='MUST BE A NUMBER' autoComplete="off"/>
                    <label>Attack:</label><input name="attack" type='text' placeholder='MUST BE A NUMBER' autoComplete="off"/>
                    <label>Defense:</label><input name="defense" type='text' placeholder='MUST BE A NUMBER' autoComplete="off"/>
                    <label>Speed:</label><input name="speed" type='text' placeholder='MUST BE A NUMBER' autoComplete="off"/>
                    <button>CREATE</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Create
