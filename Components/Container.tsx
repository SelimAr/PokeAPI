import React from 'react'
import Cards from './Cards'
import Loader from './Loader'
import { PokemonAblts } from "./type"

interface Props {
    pokemons: PokemonAblts[]
}

const Container: React.FC<Props> = (props) => {

    const { pokemons } = props

  return (
    <div className='flex items-center justify-center flex-wrap px-4 mx-5 my-5 '>
        
        {pokemons.length > 0 ? pokemons.map((pokemon) =>
            <Cards key={pokemon.id}
                image={pokemon.sprites.front_default}
                name={pokemon.name}
                type={pokemon.types[0].type.name}
                abilities={pokemon.abilities}
                id={pokemon.id}
                weight={pokemon.weight}
                height={pokemon.height}
            />  
        ) : <Loader/>}

    </div>
  )
}

export default Container