import React from 'react'

export default function Search() {

/* handleChange(event) {  
}

handleSubmit(event) {
    event.preventDefault()
} */
const pokename = ''
return (
    <input placeholder="Insert Pokename here!" type='text' id='name' value={pokename} onChange={(e)=>e} />
)
}