import React, { useState } from "react";
import TinderCard from "react-tinder-card";

import "./TinderCards.css";

export const TinderCards = () => {
  const [people, setPeople] = useState([
    {
      name: "Jane",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/c/cc/CassandraAusten-JaneAusten%28c.1810%29_hires.jpg",
    },
    {
      name: "John",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/8/85/John_Lennon_1969_%28cropped%29.jpg",
    },
    {
      name: "Anette",
      url:
        "https://upload.wikimedia.org/wikipedia/commons/2/21/Anette_Olzon_do_Nightwish_em_sess%C3%A3o_de_aut%C3%B3grafos.jpg",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => {
          return (
            <TinderCard
              className="swipe"
              key={person.name}
              onSwipe={(dir) => swiped(dir, person.name)}
              onCardLeftScreen={() => outOfFrame(person.name)}
            >
              <div
                style={{ backgroundImage: `url(${person.url})` }}
                className="card"
              >
                <h3>{person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
};
