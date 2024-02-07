import React, { useEffect } from "react";
import { useStoreInContext } from "../zustand/store";
import "./filterPanel.css";

const FilterPanel = () => {

  const { orderByAttack, orderByAlphabetic, orderByHeight, filterByAbility, filterByType, types, abilities} = useStoreInContext();


  const handleSelectChange = (id: string, action: (value: string) => void) => (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;

    if (selectedValue !== "default") {
      action(selectedValue);

      // Reset other selects to default
      const otherSelects = ["alphabetic", "attack", "height", "filterType", "filterAbility"].filter((otherId) => otherId !== id);
      otherSelects.forEach((otherId) => {
        const otherSelect = document.getElementById(otherId) as HTMLSelectElement;
        if (otherSelect) {
          otherSelect.value = "default";
        }
      });
    }
  };

  return (
      <section className="container-panel">
        <div className="container-filter">
          <span>Oreden Alfabetico</span>
          <select onChange={handleSelectChange("alphabetic", orderByAlphabetic)} name="alphabetic" id="alphabetic" defaultValue={'Selecionar'}>
            <option value="default">Por defecto</option>
            <option value="A_Z">A_Z </option>
            <option value="Z_A">Z_A</option>
          </select>
        </div>
        <div className="container-filter">
          <span>Orden por Ataque</span>
          <select onChange={handleSelectChange("attack", orderByAttack)} name="attack" id="attack" >
            <option value="default">Por defecto</option>
            <option value="H_ATTACK">Mayor</option>
            <option value="L_ATTACK">Menor</option>
          </select>
        </div>
        <div className="container-filter">
          <span>Orden por Altura</span>
          <select onChange={handleSelectChange("height", orderByHeight)} name="height" id="height">
            <option value="default">Por defecto</option>
            <option value="H_HEIGHT">Mayor</option>
            <option value="L_HEIGHT">Menor</option>
          </select>
        </div>
        <div className="container-filter">
          <span>Filtrar por Tipo</span>
          <select onChange={handleSelectChange("filterType", filterByType)} name="filterType" id="filterType">
            <option value="default">Ningun</option>
            {
              types.map((item: string, index: number)=> {
                return <option key={index} value={item}>{item}</option>
              })
            }
          </select>
        </div>
        <div className="container-filter">
          <span>Por Habilidad</span>
          <select onChange={handleSelectChange("filterAbility", filterByAbility)} name="filterAbility" id="filterAbility">
            <option value="default">Ningun</option>
            {
              abilities.map((item: string, index: number) => {
                return <option key={index} value={item}>{item}</option>
              })
            }
          </select>
        </div>
      </section>
    );
};

export default FilterPanel;
