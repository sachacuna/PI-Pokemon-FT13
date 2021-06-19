import React /* ,{ useState, useEffect } */from 'react'
// import { getPokemonName } from '../../Store/Actions/actions'
// import { Link } from 'react-router-dom'
// import {useSelector, useDispatch} from 'react-redux'


export default function Search() {
    // const [name, setName] = useState('')

    // function handleSubmit(e) {
    //     e.preventDefault()
    //     setName('')
    // }

    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(getPokemonName(name))
    // }, [name])

    // const pokemonNameSearch = useSelector(state => state.pokemonNameSearch)

    return (
        <div>
        {/* <form onSubmit={(e)=>handleSubmit(e)}>
            <div>
                <input 
                placeholder='Insert Pokenmon name'
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <form onSubmit={(e)=>handleSubmit(e)}> 
                <Link to={`/pokemon/${name}`}>
                    <input type='submit' value='SEARCH'/>
                </Link>
            </form>
        </form> */}
            <input type='text' placeholder='Insert name'/>
            <button>Search</button>
        </div>
    )
}