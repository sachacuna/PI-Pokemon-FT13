import React from 'react'
import {getOrderAsc, getOrderDesc, getOrderWeakest, getOrderStrongest} from '../../Store/Actions/actions'
import {useSelector, useDispatch} from 'react-redux'
import '../Order/order.css'


export default function Order() {
    const dispatch = useDispatch()

    function orderAsc(e) {
        e.preventDefault()
        dispatch(getOrderAsc())
    }
    
    function orderDesc(e) {
        e.preventDefault()
        dispatch(getOrderDesc())
    }
    function orderWeakest(e) {
        e.preventDefault()
        dispatch(getOrderWeakest())
    }
    
    function orderStrongest(e) { 
        e.preventDefault()
        dispatch(getOrderStrongest())
    }

    const pokemons = useSelector((state)=>state.pokemons)

    return (
        <div id="Buttons">
            <form>
                <button onClick={(e)=>orderAsc(e)}>ASC</button>
            </form>
            <form>
                <button onClick={(e)=>orderDesc(e)}>DESC</button>
            </form>
            <form>
                <button onClick={(e)=>orderWeakest(e)}>Weakest</button>
            </form>
            <form>
                <button onClick={(e)=>orderStrongest(e)}>Strongest</button>
            </form>
        </div>
    )
}
