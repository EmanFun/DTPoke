import React, { useState } from "react";
import { CardComponent } from "../types";
import "./card.css"

const Card: React.FC<CardComponent> = ({ pokemon }) => {
    const [isTypesExpanded, setIsTypesExpanded] = useState(false);
    const [isAbilitiesExpanded, setIsAbilitiesExpanded] = useState(false);
    const [isMovesExpanded, setIsMovesExpanded] = useState(false);


    const handleToggleTypes = () => {
        setIsTypesExpanded((prev) => !prev);
        setIsAbilitiesExpanded(false)
        setIsMovesExpanded(false)
      };
    
      const handleToggleAbilities = () => {
        setIsAbilitiesExpanded((prev) => !prev);
        setIsMovesExpanded(false);
        setIsTypesExpanded(false);
      };
    
      const handleToggleMoves = () => {
        setIsMovesExpanded((prev) => !prev);
        setIsTypesExpanded(false);
        setIsAbilitiesExpanded(false)

      };

  return (
  <div className="container-card">
    <div className="card">
        <h3>{pokemon.name}</h3>
        <img src={pokemon.image} alt={pokemon.name}/>
        <h4>Descriptión</h4>
        <p>Ataque: {pokemon.attack}</p>
        <p onClick={handleToggleTypes} style={{ cursor: 'pointer' }}>Tipos</p>
        {
            isTypesExpanded &&
            <ul>
                {
                    pokemon.types?.map((item: string, index: number)=>{
                        return <li key={index}>{item}</li>
                    }) 
                } 
            </ul>
        }
        <p onClick={handleToggleMoves} style={{ cursor: 'pointer' }}>Movimientos</p>
            {
            isMovesExpanded && <div className="wrapper-moves">
                {
                    pokemon.moves?.map((item: string, index: number)=>{
                        return <div className="wrapper-move" key={index}>{item}</div>
                    }) 
                }
            </div>
            }
        <p onClick={handleToggleAbilities} style={{ cursor: 'pointer' }}>Habilidades</p>
        {
            isAbilitiesExpanded && <ul>
                {
                     pokemon.abilities?.map((item: string, index: number)=>{
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        }
    </div>
  </div>
  );
};

export default Card;
