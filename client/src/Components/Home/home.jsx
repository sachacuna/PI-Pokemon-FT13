import React from 'react'
import { Link } from 'react-router-dom'
import PokeCards from '../PokeCards/pokeCards'
import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";
import '../Home/home.css'

export default function Home() {
    return (
        <div id='bigDiv'>
            <div id='navBack'>
            <ul id="navList">
                <li>
                    <Link to='/'>
                        <img src="https://cdn.theorg.com/d3119e0e-8202-4034-85ce-d0356382515e_thumb.jpg" alt='Henry Logo' height='55px' width='55px' />
                    </Link>
                </li>
                <li>
                FILTERS LOCO, LOS FILTERS
                </li>
                <li>
                    <FaSortAlphaDown />
                </li>
                <li>
                    <FaSortAlphaDownAlt />
                </li>
                <li>
                    <input placeholder="Insert Pokename here!" />
                </li>
            </ul>
            </div>
            <PokeCards />
            <p>paginados</p>
        </div>
    )
}