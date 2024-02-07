import React, { useEffect, useState } from "react";
import { RenderCardComponent } from "../types";
import { Pokemon } from "../types";
import { Card } from ".";
import "./renderCard.css"
import { useStoreInContext } from "../zustand/store";


const RenderCard: React.FC<RenderCardComponent> = ({pokemons}) => {
  const { simulateFetchData } = useStoreInContext();
  const [loading, setLoading] = useState(false);

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
  },[]);
  useEffect(() => {
    const handleTouchMove = () => {
      handleScroll();
    };

    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  if(!pokemons.length) return <span>Espere un Momento</span>

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
