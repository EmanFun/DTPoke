import React, { useCallback, useEffect, useState } from "react";
import { RenderCardComponent } from "../types";
import { Pokemon } from "../types";
import { Card } from ".";
import "./renderCard.css"
import { useStoreInContext } from "../zustand/storeUtils";
import { StoreState } from "../types";


const RenderCard: React.FC<RenderCardComponent> = ({pokemons}) => {
  const { simulateFetchData, fetchPokemons } = useStoreInContext() as StoreState;
  const [loading, setLoading] = useState(false);

  const reload = ()=>{
    fetchPokemons();
  }

  const fetchData = useCallback(()=>{
    setLoading(true);
    simulateFetchData();
    setLoading(false);
  },[simulateFetchData, setLoading]);

  const handleScroll = useCallback(() => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
    const clientHeight = document.documentElement.clientHeight || window.innerHeight;

    if (scrollTop + clientHeight >= scrollHeight - 100 && !loading) {
      fetchData();
    }
  },[fetchData, loading]);

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
    return ()=>{
      window.removeEventListener("scroll", handleScroll);
    }
  },[loading, handleScroll]);
  useEffect(() => {
    const handleTouchMove = () => {
      handleScroll();
    };

    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [loading, handleScroll]);

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
