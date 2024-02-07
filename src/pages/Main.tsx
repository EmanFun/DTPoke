import { useEffect } from "react";
import { useStoreInContext } from "../zustand/storeUtils";
import { RenderCard, FilterPanel } from "../components";
import "./main.css";
import { StoreState } from "../types";

const Main = () => {

    const {pokemons} = useStoreInContext() as StoreState;

    useEffect(()=>{

    },[pokemons])

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
