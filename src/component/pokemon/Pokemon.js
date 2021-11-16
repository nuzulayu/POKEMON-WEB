import axios from 'axios'
import React from 'react'
import PokemonList from '../pokemon-list/PokemonList'
import './Pokemon.css'


class Pokemon extends React.Component{

    constructor(){
        super()
        this.state = {
            users: [],
            
        }
    }
    
     componentDidMount(){
        const url = 'https://pokeapi.co/api/v2/pokemon'
        axios.get(url)
        .then(users => {
            console.log(users.data.results);
           this.setState({
               users: users.data.results
           })
        })
    }

    render(){
        return(
            <div>
                <h3>Pokemon List</h3>
                <PokemonList dataPokemon={this.state.users}/>
            </div>
            
        )
    }

}


export default Pokemon