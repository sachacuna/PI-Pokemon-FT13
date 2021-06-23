import React from 'react'
import './cardDetails.css'
import Nav from '../Nav/nav'
import Footer from '../Footer/footer'
import { Link } from 'react-router-dom'


function CardDetail({ name, hp, sprite, id, types, height, weight, attack, defense, speed }) {

    return (
        <div>
            <Nav />
            <div id='detailCard'>
                <div id='detailImg'>
                    <img src={sprite} alt='pokemon picture' width='380px' height='380px' />
                </div>
                <div id='infoCard'>
                    <h2>{name}</h2>
                    {id?.length ? null : <h4> Pokedex number # {id}</h4>}
                    <h4> HP: {hp} </h4>
                    <h4> Height: {height * 10} cm</h4>
                    <h4> Weight: {weight / 10} kg</h4>
                    <h4> Attack: {attack} </h4>
                    <h4> Speed: {speed} </h4>
                    <h4> Defense: {defense} </h4>
                    <h4> Types: {types?.join(' and ')} </h4>
                    {id?.length ? <Link to='/home' style={{ textDecoration: 'none' }}>
                        <button id="navButtonDb">
                            Close
                        </button>
                    </Link> :
                        <div id="buttonsDiv">
                            <form action={`http://localhost:3000/pokemon/${id - 1}`}>
                                <button id="navButton">
                                    Previous
                                </button>
                            </form>
                            <Link to='/home' style={{ textDecoration: 'none' }}>
                                <button id="navButton">
                                    Close
                                </button>
                            </Link>
                            <form action={`http://localhost:3000/pokemon/${id + 1}`}>
                                <button id="navButton">
                                    Next
                                </button>
                            </form>
                        </div>}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CardDetail