import { RenderCard, FilterPanel } from "../components";
import "./main.css";
import { usePokemonStore } from "../zustand/newStorage";


const Main = () => {

    const {pokemons} = usePokemonStore() ;
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
