import '../Create/create.css'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux' //no deberia usarse 
import { useState, useEffect } from 'react'
import Footer from '../Footer/footer'
import Nav from '../Nav/nav'
import { getTypes } from '../../Store/Actions/actions' //unica action a usar
import axios from 'axios'

//validates
function validate(input) {
    let errors = {}
    if(!input.name) {
        errors.name = 'Please insert a name' 
    } else {
        errors.name = ''
    }if (!input.weight) {
		errors.weight = 'Please insert a weight';
	} else if (!/^[0-9]+$/g.test(input.weight)) {
		errors.weight = "Weight must be a number";
	} else {
		errors.weight = '';
	}
	if (!input.height) {
		errors.height = 'Please insert a height';
	} else if (!/^[0-9]+$/g.test(input.height)) {
		errors.height = "Height must be a number";
	} else {
		errors.height = '';
	}
	if (!input.hp) {
		errors.hp = 'Please insert the HP value';
	} else if (!/^[0-9]+$/g.test(input.hp)) {
		errors.hp = "HP must be a number,";
	} else {
		errors.hp = '';
	}
	if (!input.attack) {
		errors.attack = 'Please insert the Attack value';
	} else if (!/^[0-9]+$/g.test(input.attack)) {
		errors.attack = "Attack must be a number,";
	} else {
		errors.attack = '';
	}
	if (!input.defense) {
		errors.defense = 'Please insert the Defense value';
	} else if (!/^[0-9]+$/g.test(input.defense)) {
		errors.defense = "Defense must be a number,";
	} else {
		errors.defense = '';
	}
	if (!input.speed) {
		errors.speed = 'Please insert the Speed value';
	} else if (!/^[0-9]+$/g.test(input.speed)) {
		errors.speed = "speed must be a number,";
	} else {
		errors.speed = '';
	}
	return errors;

}


function Create() {
    const [errors, setErrors] = useState({}) //validate
    const [input, setInput] = useState({
        name: '',
        attack: 0,
        defense: 0,
        speed: 0,
        height: 0,
        weight: 0,
        hp: 0,
        types: [] //revisar back por nombre en entidad type y controllers que usan name instead types
    })

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getTypes())
    }, []) //hasta aca todo ok con redux

    const types = useSelector((state) => state.types)

    function handleInput(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(
            validate({
                ...input,
                [e.target.name]: e.target.value,
            })
        )
    }
    function handleSelect(e) {
    	if (input.types.includes(e.target.value)) { 
    		alert('You already selected this type. Try another one.');
    	} else if (input.types.length > 1) {
    		alert('You can select up to 2 types.');
    	} else {
    		setInput((input) => ({ ...input, types: [...input.types,(e.target.value)] }));
    	}
    } 
    function handleSubmit(e) {
        e.preventDefault()
        //casos errors en if
         return axios.post('http://localhost:3001/pokemons/', input)
            .then((r) => {
                //console.log("primero",input)
                alert('Pokémon created successfully!')
                setInput({
                    name: '',
                    attack: 0,
                    defense: 0,
                    speed: 0,
                    height: 0,
                    weight: 0,
                    hp: 0,
                    types: []
                })
            })
            .catch((error) => alert('Some error ocurred, please try again'))
            //console.log("segundo",input)
    }

    function deleteType(e, t) {
        setInput((prev) => ({ ...prev, types: prev.types.filter((type) => type !== (t)) }))
    }
    //types names
    function getNames(arr) {
        let names = []
        types.forEach((t) => {
            arr.forEach((name) => {
                if ((name) === t.name) {
                    names.push(t.name)
                }
            })
        })
        return names
    }

    return (
        <div id="bigDiv">
            <Nav />
            <div id="ContentDiv">
                <h2 id='intro'>Create your new Pokémon in our Pokedex!</h2>
                <form className="forms" onSubmit={handleSubmit}>
                    <div>
                    <label>Name </label>
                    <input id="inputData" name="name" type='text' placeholder='INSERT POKÉMON NAME' autoComplete="off" onChange={handleInput} required='required' value={input.name} />
                    {errors.name && <p>{errors.name}</p>}
                    </div>
                    <div>
                    <label>Height </label>
                    <input id="inputData" name="height" type='number' placeholder='MUST BE A NUMBER' autoComplete="off" onChange={handleInput} required='required' value={input.height} />
                    {errors.height && <p>{errors.height}</p>}
                    </div>
                    <div>
                    <label>Weight </label>
                    <input id="inputData" name="weight" type='number' placeholder='MUST BE A NUMBER' autoComplete="off" onChange={handleInput} required='required' value={input.weight} />
                    {errors.weight && <p>{errors.weight}</p>}
                    </div>
                    <div>
                    <label>HP </label>
                    <input id="inputData" name="hp" type='number' placeholder='MUST BE A NUMBER' autoComplete="off" onChange={handleInput} required='required' value={input.hp} />
                    {errors.hp && <p>{errors.hp}</p>}
                    </div>
                    <div>
                    <label>Attack </label>
                    <input id="inputData" name="attack" type='number' placeholder='MUST BE A NUMBER' autoComplete="off" onChange={handleInput} required='required' value={input.attack} />
                    {errors.attack && <p>{errors.attack}</p>}
                    </div>
                    <div>
                    <label>Defense </label>
                    <input id="inputData" name="defense" type='number' placeholder='MUST BE A NUMBER' autoComplete="off" onChange={handleInput} required='required' value={input.defense} />
                    {errors.defense && <p>{errors.defense}</p>}
                    </div>
                    <div>
                    <label>Speed </label>
                    <input id="inputData" name="speed" type='number' placeholder='MUST BE A NUMBER' autoComplete="off" onChange={handleInput} required='required' value={input.speed} />
                    {errors.speed && <p>{errors.speed}</p>}
                    </div>

                    <div>
                        <select name='types' onChange={(e) => handleSelect(e)} required value={input.types}  id="buttonOrange">
                            <h4>You can choose up to two types</h4>
                            <option>Choose types</option>
                            {types?.map((type) => (
                                <option value={type.name} key={type.id}>
                                    {type.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        {input.types?.map((t) => (
                            <p id={t} className="typeP"> 
                                {getNames([t])}{' '}
                                <button type='button' onClick={(e) => deleteType(e, t)} id="buttonX">
                                    x 
                                </button>
                            </p>
                        ))}
                    </div>
                    <button type='submit' id="buttonOrange">CREATE</button>
                </form>
            </div>
            <Footer />
        </div>
    )
}

export default Create
