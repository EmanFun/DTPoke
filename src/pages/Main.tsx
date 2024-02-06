import React from "react";
import { useStoreInContext } from "../zustand/store";
import { RenderCard } from "../components";
const Main = () => {

    const {pokemons} = useStoreInContext();
    console.log(pokemons)
  return (
    <section>
        <section>
            <h1>PokeDex 3.0</h1>
        </section>
        <section>
            filtros
        </section>
        <section>
            <RenderCard pokemons={pokemons}/>
        </section>
    </section>
    );
};

export default Main;
