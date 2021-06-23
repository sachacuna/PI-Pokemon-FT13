import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Search/search'
import '../Nav/nav.css'

export default function Nav() {
    return (
        <div id='navBack'>
            <ul id="navList">
                <li>
                    <Link to='/'>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png" alt='Pokemon Logo' height='55px' width='55px' />
                    </Link>
                </li>
                <li>
                    <Link to='/home' style={{ textDecoration: 'none' }}>
                        <h1>PokéProject</h1>
                    </Link>
                </li>
                <li>
                    <Search />
                </li>
                <li>
                    <Link to='/create' style={{ textDecoration: 'none' }}>
                        <button id="CreateButton">
                            PokeLab
                        </button>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
