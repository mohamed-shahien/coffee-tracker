import React, { useState } from "react";
import { coffeeOptions } from "../utils";

const CoffeeForm = () => {
  const [selectedCoffee, setselectedCoffee] = useState(null);
  const [showcoffeeType, setshowCoffeeType] = useState(false);
  return (
    <>
      <div className="section-header">
        <i className="fa-solid fa-pencil" />
        <h2>Start Tracking Today</h2>
      </div>
      <h4>Select coffee type</h4>
      <div className="coffee-grid">
        {coffeeOptions.slice(0, 5).map((option, optionIndex) => {
          return (
            <button className={"button-card" +(option.name === selectedCoffee ? ' coffe-button-selected' : '')} key={optionIndex} onClick={() =>{ setselectedCoffee(option.name)
              setshowCoffeeType(false)
            }}>
              <h4>{option.name}</h4>
              <p>{option.caffeine}</p>
            </button>
          );
        })}
        <buttom className={"button-card" +(showcoffeeType ? ' coffe-button-selected' : '')} onClick={() => {setshowCoffeeType(true) 
        setselectedCoffee(null)} 
        }>
          <h4>Other</h4>
          <p>...</p>
        </buttom>
      </div>
      {showcoffeeType && (
      <select name="coffee-list" id="coffe-list">
        {coffeeOptions.map((option, optionIndex) => {
          return (
            <option value={optionIndex} key={optionIndex}>
              {option.name} ({option.caffeine}mg)
            </option>
          );
        })}
      </select>
      )}
      <h4>Add the cost ($)</h4>
      <input
        className="w-full"
        type="number"
        placeholder="4.45"
        step="0.5"
        min="0"
        max="100"
      />
      <h4>Time since consumption</h4>
      <div className="time-entry">
        <div>
          <h6>Hours</h6>
          <select name="hours-select" id="hours-select">
            {[
              0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
              19, 20, 21, 22, 23,
            ].map((hour, hourIndex) => {
              return (
                <option key={hourIndex} value={hour}>
                  {hour}
                </option>
              );
            })}
          </select>
        </div>
      <div>
        <h6>Mins</h6>
        <select id="mins-select">
          {[0, 5, 10, 15, 30, 45].map((min, minIndex) => {
            return (
              <option key={minIndex} value={min}>
                {min}
              </option>
            );
          })}
        </select>
      </div>
      </div>
    </>
  );
};

export default CoffeeForm;
