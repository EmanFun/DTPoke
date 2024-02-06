import React from "react";
import { RenderCardComponent } from "../types";
import { Pokemon } from "../types";
import { Card } from ".";
import "./renderCard.css"

const RenderCard: React.FC<RenderCardComponent> = ({pokemons}) => {


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
