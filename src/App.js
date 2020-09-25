import React from "react";
import { Header } from "./Header";
import { TinderCards } from "./TinderCards.js";
import { SwipeButtons } from "./SwipeButtons";

import "./App.css";

const App = () => {
  return (
    <div className="app">
      <Header />
      <TinderCards />
      <SwipeButtons />
    </div>
  );
};

export default App;
