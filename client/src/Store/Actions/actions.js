import axios from 'axios'
import { POKE_URL , NAME_URL, ID_URL} from '../../Constants/constants'
export const GET_POKEMONS = 'GET_POKEMONS'
export const GET_POKEMON_ID = 'GET_POKEMON_ID'
export const GET_POKEMON_NAME = 'GET_POKEMON_NAME'
export const GET_ORDER_DESC = 'GET_ORDER_DESC'
export const GET_ORDER_ASC = 'GET_ORDER_ASC'
export const GET_ORDER_WEAKEST = 'GET_ORDER_WEAKEST'
export const GET_ORDER_STRONGEST = 'GET_ORDER_STRONGEST'
 
export function getPokemons() {
    return async function(dispatch) {
        return await axios.get(`${POKE_URL}`)
        .then((pokemons)=>{
            console.log(pokemons)
            dispatch({
                type: 'GET_POKEMONS',
                payload: pokemons.data
            })
        })
    }
}
 
export function getPokemonId(id) {
    return async function(dispatch) {
        return await axios.get(`${ID_URL}${id}`)
        .then((pokemons)=>{
            dispatch({
                type: 'GET_POKEMON_ID',
                payload: pokemons.data
            })
        })
    }
}

export function getPokemonName(name) {
    return async function(dispatch) {
        return await axios.get(`${NAME_URL}${name}`)
        .then((pokemons)=>{
            dispatch({
                type: 'GET_POKEMON_NAME',
                payload: pokemons.data
            })
        })
    }
}

export function getOrderAsc() {
    return async function(dispatch) {
        return await axios.get(`${POKE_URL}`)
        .then((pokemons)=>{
            pokemons.data.sort((a,b)=>{
                if(a.name>b.name) return 1
                if(a.name<b.name) return -1
                return 0
            })
            dispatch({
                type: 'GET_ORDER_ASC',
                payload: pokemons.data
            })
        })
    }
}

export function getOrderDesc() {
    return async function(dispatch) {
        return await axios.get(`${POKE_URL}`)
        .then((pokemons)=>{
            pokemons.data.sort((b,a)=>{
                if(a.name>b.name) return 1
                if(a.name<b.name) return -1
                return 0
            })
            dispatch({
                type: 'GET_ORDER_DESC',
                payload: pokemons.data
            })
        })
    }
}
export function getOrderWeakest() {
    return async function(dispatch) {
        return await axios.get(`${POKE_URL}`)
        .then((pokemons)=>{
            pokemons.data.sort((a,b)=>{
                if(a.hp>b.hp) return 1
                if(a.hp<b.hp) return -1
                return 0
            })
            dispatch({
                type: 'GET_ORDER_WEAKEST',
                payload: pokemons.data
            })
        })
    }
}

export function getOrderStrongest() {
    return async function(dispatch) {
        return await axios.get(`${POKE_URL}`)
        .then((pokemons)=>{
            pokemons.data.sort((b,a)=>{
                if(a.hp>b.hp) return 1
                if(a.hp<b.hp) return -1
                return 0
            })
            dispatch({
                type: 'GET_ORDER_STRONGEST',
                payload: pokemons.data
            })
        })
    }
}
