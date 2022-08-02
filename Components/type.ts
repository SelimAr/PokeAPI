export interface Pokemon {
    id: number;
    name: string;
    weight: string;
    height: string;
    sprites: {
      front_default: string;
    };
    types: {
      type : {
        name: string
      }
    }[]
  }

  export interface PokemonAblts extends Pokemon {
    weight: string;
    height: string;
    abilities?: {
        ability: string;
        name: string;
        type: string;
        id: number;
        weight: string;
        height: string;
    }[];
  }