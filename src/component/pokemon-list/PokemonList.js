import PokemonDetail from '../pokemon-detail/PokemonDetail'
import './PokemonList.css'
import { useState } from 'react'
import PokemonCatch from '../pokemon-catch/PokemonCatch';
import PokemonCreate from '../pokemon-create/PokemonCreate';
import MyPokemon from '../my-pokemon/MyPokemon';
import PokemonGetDetail from '../pokemon-detail/PokemonGetDetail';
import PokemonImage from '../pokemon-detail/PokemonImage';

const PokemonList = (props) => {

    // console.log(props)
    const [linkPopUp, setLinkPopUp] =useState(false);
    const [buttonPopup, setButtonPopup] = useState(false);
    const [getPokemons, setPokemons] = useState ([])
    
    const eventCreatePokemon = (pokemon) =>
    {
        setPokemons(getPokemons.concat(pokemon))
        console.log(getPokemons)
    }

    return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Pokemon Name</th>
                            <th>Pokemon Owned</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.dataPokemon.map((pokemon)=>{
                            // console.log(pokemon.name)
                            return <tr key={pokemon.name}>
                                    <td><a href="#" onClick={()=> setLinkPopUp(true)}>{pokemon.name}</a></td>
                                    <td></td>
                                    <PokemonDetail trigger={linkPopUp} setTrigger={setLinkPopUp}>
                                        <h2> Pokemon Details</h2>
                                        <PokemonImage imagePokemon={pokemon.name}/>
                                        <h4 >Pokemon Name: {pokemon.name}</h4>
                                        <PokemonGetDetail detailsPokemon={pokemon.name}/>
                                        <button onClick={()=> setButtonPopup(true)}>catch</button>
                                    </PokemonDetail>
                                </tr>})
                        }
                    </tbody>
                    <PokemonCatch trigger={buttonPopup} setTrigger={setButtonPopup}>
                        <h2>Pokemon Catch</h2>
                        <PokemonCreate onCreatePokemon={eventCreatePokemon}/>
                    </PokemonCatch>
                </table>
                <h2 className="center ">MY POKEMON</h2>
                <MyPokemon dataMyPokemon={getPokemons}/>
            </div>
        )
}

export default PokemonList