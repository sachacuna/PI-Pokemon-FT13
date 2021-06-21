import React from 'react'
import { Link } from 'react-router-dom'
import { LandingStyle } from './landingPageStyle.jsx';

export default function LandingPage() {
    return (
        <LandingStyle>
            <div className='general'>
                <div>
                    <p>Prepárate para la aventura Pokémon!</p>
                </div>
                <div>
                    <Link to={'/home'}>
                        <button>Start!</button>
                    </Link>
                </div>
            </div>
        </LandingStyle>
    )
}