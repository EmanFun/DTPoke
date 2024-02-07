import React, { useEffect, useState } from "react";
import { RenderCardComponent } from "../types";
import { Pokemon } from "../types";
import { Card } from ".";
import "./renderCard.css"
import { useStoreInContext } from "../zustand/store";


const RenderCard: React.FC<RenderCardComponent> = ({pokemons}) => {
  const { simulateFetchData, fetchPokemons } = useStoreInContext();
  const [loading, setLoading] = useState(false);

  const reload = ()=>{
    fetchPokemons();
  }

  const fetchData = ()=>{
    setLoading(true);
    simulateFetchData();
    setLoading(false);
  }

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;

    if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {
      fetchData();
    }
  };

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return ()=>{
      window.removeEventListener("scroll", handleScroll);
    }
  },[loading]);
  useEffect(() => {
    const handleTouchMove = () => {
      handleScroll();
    };

    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [loading]);

  if(!pokemons.length) return <button onClick={reload}>Recargar</button>

  if (pokemons.length){
    return (
        <section className="container-renderCard">
          {
            pokemons?.map((item: Pokemon, index:  number)=>{
              return <Card key={index} pokemon={item}/>
            })
          }
        </section>
  )
}
};

export default RenderCard;
