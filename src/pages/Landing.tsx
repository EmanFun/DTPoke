import { useEffect } from "react";

import { NavLink } from "react-router-dom";
import "./landing.css"
import { usePokemonStore } from "../zustand/newStorage";

const Landing = () => {
  const {fetchPokemons} = usePokemonStore();

  useEffect(()=>{
    fetchPokemons();

  },[fetchPokemons])

  return (
  <section className="container">
    <div className="wrapper-link">
      <NavLink className="link-main" to='/main'>Ingresar</NavLink>
    </div>
  </section>
  );
};

export default Landing;
