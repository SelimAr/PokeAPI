import React, {useEffect, useState} from 'react'
import Container from './Container'
import axios from 'axios'
import { Pokemon } from "./type"

interface Pokemons {
    name: string;
    url: string;
}

const Main: React.FC = () => {
    
    const URL = "https://pokeapi.co/api/v2/pokemon?limit=500&offset=500";
    const [pokemons, setIsPokemon] = useState<Pokemon[]>([]);

    useEffect(() => {
        const get = async () => {
            const res = await axios.get(URL)
            res.data.results.forEach(async (pokemon: Pokemons) => {
                const getPoke = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`); 
                setIsPokemon((pok) =>  [...pok, getPoke.data])
            })
        }
        get()
    }, []) 

  return (
    <div className=''>
        <Container pokemons={pokemons}/>
    </div>
  )
}

export default Main