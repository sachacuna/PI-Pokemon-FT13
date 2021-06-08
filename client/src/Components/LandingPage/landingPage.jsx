import React from 'react'
import {Link} from 'react-router-dom'

export default function LandingPage() {
    return (
        <div>
            <p>Pokedex</p>
            <Link to='/home'>
            <button>Enter!</button>
            </Link>
        </div>
    )
}