import React from "react";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Intro />
    </div>
  );
};

export default App;
