import React from 'react'
import { Link } from 'react-router-dom'
import PokeCards from '../PokeCards/pokeCards'
import { FaSortAlphaDown, FaSortAlphaDownAlt } from "react-icons/fa";
import '../Home/home.css'
import Search from '../Search/search'
import Pag from '../Pagination/pag';

export default function Home() {
    
    return (
        <div id='bigDiv'>
            <div id='navBack'>
                <ul id="navList">
                    <li>
                        <Link to='/'>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png" alt='Pokemon Logo' height='55px' width='55px' />
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
                        <Search />
                    </li>
                </ul>
            </div>
            <div id='wrapper'>
                <PokeCards id='cards' />
            </div>
            <Pag />
        </div>
    )
}