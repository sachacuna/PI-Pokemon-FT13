import {
    GET_POKEMONS,
    GET_POKEMON_ID,
    GET_POKEMON_NAME,
    GET_ORDER_ASC,
    GET_ORDER_DESC,
    GET_ORDER_WEAKEST,
    GET_ORDER_STRONGEST,
    GET_FILTER_API,
    GET_FILTER_DB,
    GET_FILTER_TYPE,
    GET_TYPES,
    SET_LOADING,
    SET_CURRENT_PAGE
} from '../Actions/actions'

const initialState = {
    pokemons: [],
    pokemonsAlt: [],
    pokemonDetail: {}, //porque es del detail
    pokemonName: {}, //porque es del search
    types: [],
    filtered: [],
    loading: false,
    currentPage: 0
}

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: action.payload,
                pokemonsAlt: [],
                loading: false,
                currentPage: 0
            }
        case GET_POKEMON_ID:
            return {
                pokemonDetail: action.payload,
            }
        case GET_POKEMON_NAME:
        //console.log('reducer aca',action.payload)    
        return {
                ...state,
                pokemons: action.payload,
            }
        case GET_ORDER_ASC:
            return {
                ...state,
                pokemonsAlt: action.payload,
            }
        case GET_ORDER_DESC:
            return {
                ...state,
                pokemonsAlt: action.payload,
            }
        case GET_ORDER_WEAKEST:
            return {
                ...state,
                pokemonsAlt: action.payload,
            }
        case GET_ORDER_STRONGEST:
            return {
                ...state,
                pokemonsAlt: action.payload,
            }
        case GET_FILTER_DB:
            return {
                ...state,
                pokemonsAlt: state.pokemons.filter(p => typeof p.id === 'string'),
                currentPage: 0
            }
        case GET_FILTER_API:
            return {
                ...state,
                pokemonsAlt: state.pokemons.filter(p => typeof p.id === 'number'),
                currentPage: 0
            }
        case GET_TYPES:
            return {
                ...state,
                types: action.payload
            }
        case GET_FILTER_TYPE:
            return {
                ...state,
                filtered: action.payload //por el estado especial de filtros
            }
        case SET_LOADING:
            return {
                ...state,
                loading: true
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.payload
            }
        default:
            return { ...state }
    }
}

export default reducers