import React, { useState } from 'react'

const MyPokemon = (props) => {

    const [counter, setCounter] = useState (1)

    const addCounter = () => {
     setCounter(counter+1)
    }

    const deletePost = async () => {
        console.log("sudah di delete")
    }
    
    return (
        <table>
            <thead>
                <tr>
                    <th>Pokemon Nickname</th>
                    <th>Pokemon Total</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                
                {
                    props.dataMyPokemon.map((pokemon)=>{
                        return <tr key={pokemon.id}>
                            <td>{pokemon.nickname}</td>
                            <td addCounter={addCounter}>{counter}</td>
                            <td><button onClick={() => deletePost(pokemon.id)} variant="danger" size="sm">DELETE</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table>
    )
}

export default MyPokemon
