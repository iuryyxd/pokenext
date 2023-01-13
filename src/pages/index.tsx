import Card from "@/components/Card";
import styles from "@/styles/Home.module.scss";
import axios from "axios";
import Image from "next/image";

export async function getStaticProps() {
  const maxPokemons = 251;
  const api = "https://pokeapi.co/api/v2/pokemon/";

  const { data } = await axios.get(`${api}?limit=${maxPokemons}`);

  data.results.forEach((item: Pokemon, index: number) => {
    item.id = index + 1;
  });

  return {
    props: {
      pokemons: data.results,
    },
  };
}

export interface Pokemon {
  name: string;
  url: string;
  id: number;
}

interface HomeProps {
  pokemons: Pokemon[];
}

export default function Home({ pokemons }: HomeProps) {
  return (
    <>
      <div className={styles.title_container}>
        <h1>
          Poke<span>Next</span>
        </h1>
        <Image
          src="/images/pokeball.png"
          alt="pokeball"
          width={50}
          height={50}
        />
      </div>
      <div className={styles.pokemon_container}>
        {pokemons.map((pokemon) => (
          <Card pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </>
  );
}
