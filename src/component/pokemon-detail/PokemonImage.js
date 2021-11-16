import axios from 'axios'
import React from 'react'
import './PokemonDetail.css'


class PokemonImage extends React.Component{
    constructor(){
        super()
        this.state = {
            users: [],
            
        }
    }
    
     componentDidMount(){
        console.log(this.props.imagePokemon)
        const url = 'https://pokeapi.co/api/v2/pokemon/' + this.props.imagePokemon
        axios.get(url )
        .then(users => {
            console.log(users.data.sprites.front_default);

           this.setState({
               users: [users.data]
               
           })
        })
    }

    render(){
        return(
                <div>
                    {this.state.users.map((detail)=>(
                        <div>
                            <img src={detail.sprites["front_default"]} />   
                        </div>
                    ))}
                </div>

        )
    }

}


export default PokemonImage