import React from "react";
import { useStoreInContext } from "../zustand/store";
import { RenderCard, FilterPanel } from "../components";
import "./main.css";

const Main = () => {

    const {pokemons} = useStoreInContext();
    console.log(pokemons)
  return (
    <section className="container-main">
        <section>
            <h1>PokeDex 3.0</h1>
        </section>
        <section>
            <FilterPanel/>
        </section>
        <section>
            <RenderCard pokemons={pokemons}/>
        </section>
    </section>
    );
};

export default Main;
