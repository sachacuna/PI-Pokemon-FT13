import axios from 'axios'
export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_POKEMON_NAME = 'GET_POKEMON_NAME'


export function getPokemons() {
    return function(dispatch) {
        return axios.get('http://localhost:3001/pokemon')
        .then((pokemons)=>{
            dispatch({
                type: 'GET_POKEMONS',
                payload: pokemons.data
            })
        })
    }
}
 
export function getPokemonName(name) {
    return function(dispatch) {
        return axios.get(`http://localhost:3001/pokemon/?name=`+name)
        .then((pokemons)=>{
            dispatch({
                type: 'GET_POKEMON_NAME',
                payload: pokemons.data
            })
        })
    }
}
