import React from 'react'
import './cardDetails.css'
import Nav from '../Nav/nav'
import Footer from '../Footer/footer'


function CardDetail({ name, sprite, id, types, height, weight, hp, attack, defense, speed }) {

    return (
        <div>
            <Nav />
            <div id='detailCard'>
                <div id='detailImg'>
                    <img src={sprite} alt='pokemon picture' width='380px' height='380px' />
                </div>
                <div id='infoCard'>
                    <h2>{name}</h2>
                    <h4> Pokemon number # {id}</h4>
                    <h4> HP: {hp} </h4>
                    <h4> Height: {height} </h4>
                    <h4> Weight: {weight} </h4>
                    <h4> Attack: {attack} </h4>
                    <h4> Speed: {speed} </h4>
                    <h4> Defense: {defense} </h4>
                    <h4> Types: {types?.join(' and ')} </h4>
                    <div id="buttonsDiv">
                        <form action={`http://localhost:3000/pokemon/${id - 1}`}>
                            <input type="submit" value="< PREVIOUS" />
                        </form>
                        <form action="http://localhost:3000/home">
                            <input type="submit" value="CLOSE" />
                        </form>
                        <form action={`http://localhost:3000/pokemon/${id + 1}`}>
                            <input type="submit" value="NEXT >" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CardDetail