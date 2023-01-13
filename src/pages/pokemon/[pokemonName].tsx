import axios from "axios";
import Image from "next/image";
import styles from "../../styles/Pokemon.module.scss";

export const getStaticPaths = async () => {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const { data } = await axios.get(`${api}?limit=${maxPokemons}`);

  const paths = data.results.map((pokemon: Pokemon, index: number) => {
    return {
      params: { pokemonName: pokemon.name },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: Context) => {
  const name = context.params.pokemonName;

  const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return {
    props: { pokemon: data },
  };
};

interface Context {
  params: {
    pokemonName: string;
  };
}

interface Pokemon {
  name: string;
  url: string;
  id: number;
  types: [{
    type: {
      name: string;
    }
  }];
  height: number;
  weight: number;
}

interface PokemonProps {
  pokemon: Pokemon;
}

export default function Pokemon({ pokemon }: PokemonProps) {
  return (
    <div className={styles.pokemon_container}>
      <h1 className={styles.title}>{pokemon.name}</h1>
      <Image
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
        width={200}
        height={200}
        alt={pokemon.name}
      />
      <div>
        <h3>Número:</h3>
        <p className={styles.id}>#{pokemon.id}</p>
      </div>
      <div>
        <h3>Tipo:</h3>
        <div className={styles.types_container}>
        {pokemon.types.map((item, index) => (
            <span key={index} className={`${styles.type} ${styles['type_' + item.type.name]}`} >{item.type.name}</span>
        ))}
        </div>
      </div>
      <div className={styles.data_container}>
        <div className={styles.data_height}>
          <h4>Altura</h4>
          <p>{pokemon.height * 10} cm</p>
        </div>
        <div className={styles.data_weight}>
          <h4>Peso</h4>
          <p>{pokemon.weight / 10} kg</p>
        </div>
      </div>
    </div>
  );
}
