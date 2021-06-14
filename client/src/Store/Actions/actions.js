import axios from 'axios'
import { POKE_URL , NAME_URL, ID_URL} from '../../Constants/constants'
export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_POKEMON_ID = 'GET_POKEMON_ID'
export const GET_POKEMON_NAME = 'GET_POKEMON_NAME'
 
export function getPokemons() {
    return function(dispatch) {
        return axios.get(`${POKE_URL}`)
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
        return axios.get(`${ID_URL}${id}`)
        .then((pokemons)=>{
            dispatch({
                type: 'GET_POKEMON_ID',
                payload: pokemons.data
            })
        })
    }
}

export function getPokemonName(name) {
    return function(dispatch) {
        return axios.get(`${NAME_URL}${name}`)
        .then((pokemons)=>{
            dispatch({
                type: 'GET_POKEMON_NAME',
                payload: pokemons.data
            })
        })
    }
}
