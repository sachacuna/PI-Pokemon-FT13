import React from 'react'
import PokeCards from '../PokeCards/pokeCards'
import '../Home/home.css'
import Nav from '../Nav/nav';
import Footer from '../Footer/footer'

export default function Home() {

    return (
        <div id='bigDiv'>
            <div>
                <Nav />
            </div>
            <div id='wrapper'>
                <PokeCards id='cards' />
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}