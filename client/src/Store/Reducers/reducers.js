import {
    GET_POKEMONS,
    GET_POKEMON_ID,
    GET_POKEMON_NAME,
    GET_ORDER_ASC,
    GET_ORDER_DESC,
    GET_ORDER_WEAKEST,
    GET_ORDER_STRONGEST
} from '../Actions/actions'

const initialState = {
    pokemons: [],
    pokemonDetail: {}, //porque es del detail
    pokemonName: {}, //porque es del search
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
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
        case GET_ORDER_ASC:
            return {
                ...state,
                pokemons: action.payload,
            }
        case GET_ORDER_DESC:
            return {
                ...state,
                pokemons: action.payload,
            }
        case GET_ORDER_WEAKEST:
            return {
                ...state,
                pokemons: action.payload,
            }
        case GET_ORDER_STRONGEST:
            return {
                ...state,
                pokemons: action.payload,
            }
        default:
            return { ...state }
    }
}

export default reducers