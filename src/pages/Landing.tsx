import { useEffect } from "react";
import { useStoreInContext } from "../zustand/storeUtils";
import { NavLink } from "react-router-dom";
import "./landing.css"
import { StoreState } from "../types";
const Landing = () => {
  const {fetchPokemons} = useStoreInContext() as StoreState;

  useEffect(()=>{
    fetchPokemons();

  },[fetchPokemons])

  return (
  <section className="container">
    <div className="wrapper-link">
      <NavLink className="link-main" to='/main'>continuar</NavLink>
    </div>
  </section>
  );
};

export default Landing;
