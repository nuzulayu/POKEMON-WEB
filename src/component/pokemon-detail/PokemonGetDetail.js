import axios from 'axios'
import React from 'react'
import './PokemonDetail.css'


class PokemonGetDetail extends React.Component{
    constructor(){
        super()
        this.state = {
            users: [],
            
        }
    }
    
     componentDidMount(){
        console.log(this.props.detailsPokemon)
        const url = 'https://pokeapi.co/api/v2/pokemon/' + this.props.detailsPokemon
        axios.get(url )
        .then(users => {
            console.log(users.data.types);

           this.setState({
               users: users.data.types,
           })
        })
    }

    render(){
        return(
            <div>
                {this.state.users.map((detail)=>(
                     <h4>Pokemon Type: {detail.type.name} </h4>
                ))}
            </div>
            
        )
    }

}


export default PokemonGetDetail