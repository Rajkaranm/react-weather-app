// A simple mini project of weather app in which you can generate multiple card
// and see the weather of a particular city individually in every card, You can generate
// delete and update a card
//
// author: rajkaran
// date: 14/10/2021

import "./App.css";
import TitleBar from "./components/TitleBar";
import WeatherCard from "./components/WeatherCard";
import AddNewCard from "./components/AddNewCard";
import { useState } from "react";

function App() {
  // works as id for every card
  let [cardCount, setCardCount] = useState(["0"]);

  // Function to add a new card
  const addCard = () => {
    setCardCount((cardCount) => [...cardCount, `${cardCount.length}`]);
  };

  // Function to remove a particular card
  const removeCard = (e) => {
    if (cardCount.length - 1 === 0) {
      return;
    } else {
      setCardCount(
        cardCount.filter((id) => {
          return id !== e;
        })
      );
    }
  };

  return (
    <div className="app">
      <TitleBar />
      <div className="Cards">
        {cardCount.map((id) => (
          <WeatherCard id={id.toString()} key={id} removeCard={removeCard} />
        ))}
        <AddNewCard addCard={addCard} />
      </div>
    </div>
  );
}

export default App;
