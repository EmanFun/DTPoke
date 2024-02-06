import React, { useEffect } from "react";
import { useStoreInContext } from "../zustand/store";
import { Link } from "react-router-dom";
const Landing = () => {
  const {fetchPokemons} = useStoreInContext();

  useEffect(()=>{
    fetchPokemons();

  },[fetchPokemons])

  return (
  <section>
    <div>
      <Link to='/main'>continuar</Link>
    </div>
  </section>
  );
};

export default Landing;
