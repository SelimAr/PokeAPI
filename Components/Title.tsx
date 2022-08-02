import React from 'react'
import Image from 'next/image'
import pokemonImg from '../Media/PokemonDatabase.png'

const Title = () => {
  return (
    <div className='flex justify-center mt-5'>
        <Image
            src={pokemonImg}
            alt="Title"
            width={330}
            height={50}
        />
    </div>
  )
}

export default Title