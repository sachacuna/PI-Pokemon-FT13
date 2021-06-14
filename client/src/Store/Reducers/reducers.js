import {GET_POKEMONS, GET_POKEMON_ID, GET_POKEMON_NAME} from '../Actions/actions'

const initialState = {
    pokemons: [],
    pokemonDetail: {}
}

const reducers = (state = initialState, action) => {
    switch(action.type) {
        case GET_POKEMONS:
            return { 
                ...state,
                pokemons: action.payload,
            }
        case GET_POKEMON_ID:
            return {
                pokemonDetail: action.payload,
            }
        case GET_POKEMON_NAME:
            return {
                pokemons: action.payload,
            }
        default: 
            return {...state} 
    }
}

export default reducers