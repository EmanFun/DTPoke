import { useEffect } from "react";
import { useStoreInContext } from "../zustand/storeUtils";
import { NavLink } from "react-router-dom";
import "./landing.css"
const Landing = () => {
  const {fetchPokemons} = useStoreInContext();

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
