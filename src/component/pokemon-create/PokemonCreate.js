import React, { useState, useEffect } from 'react'
import './PokemonCreate.css'
import axios from "axios"

const PokemonCreate = (props) => {

    const [getInput,setInput] = useState('')
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     const url = 'https://pokeapi.co/api/v2/pokemon'
    //     axios.get(url)
    //     .then(response => setUsers(
    //         console.log(response.data.results)
    //         response = response.data.results))
    // }, [])


    const handleSubmit = (event) =>{
        event.preventDefault()
        const newPokemon = {
            id: Math.floor(Math.random() * 100) + 1,
            nickname : getInput,
        }
        props.onCreatePokemon(newPokemon)
        setInput('')
    }

    const handleInput = (event) => {
        setInput(event.target.value)
    }

    return(
        <form className="pokemon-form" onSubmit={handleSubmit}>
            {/* {users.map((pokemon)=>{
                return <p>{pokemon.name}</p>
            })} */}
            <p>Give them a nickname</p>
            <input type="text" value={getInput} onChange={handleInput}/>
            <button type="submit">Add</button>
        </form>
    )
}

export default PokemonCreate
