import {GET_POKEMONS, GET_POKEMON_ID} from '../Actions/actions'

const initialState = {
    pokemons: [],
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
                ...state,
                pokemons: action.payload,
            }
        default: 
            return {...state} 
    }
}

export default reducers