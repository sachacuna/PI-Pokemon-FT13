import axios from 'axios'
export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_POKEMON_ID = 'GET_POKEMON_ID'
//import { POKE_URL } from '../../Constants/constants'
 
export function getPokemons() {
    return function(dispatch) {
        return axios.get(`http://localhost:3001/pokemons`)
        .then((pokemons)=>{
            dispatch({
                type: 'GET_POKEMONS',
                payload: pokemons.data
            })
        })
    }
}
 
export function getPokemonId(id) {
    return function(dispatch) {
        return axios.get(`http://localhost:3001/pokemons/${id}`)
        .then((pokemons)=>{
            dispatch({
                type: 'GET_POKEMON_ID',
                payload: pokemons.data
            })
        })
    }
}
