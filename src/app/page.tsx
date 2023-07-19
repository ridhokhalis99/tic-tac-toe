"use client";
import { useState } from "react";
import "@/styles/typography.scss";
import Home from "@/pages/home";
import PlayGame from "@/pages/playGame";

const App = () => {
  const [currentScreen, setCurrentScreen] = useState("home");

  switch (currentScreen) {
    case "home":
      return <Home setCurrentScreen={setCurrentScreen} />;
    case "play_game":
      return <PlayGame setCurrentScreen={setCurrentScreen} />;
    default:
      return <Home setCurrentScreen={setCurrentScreen} />;
  }
};

export default App;
