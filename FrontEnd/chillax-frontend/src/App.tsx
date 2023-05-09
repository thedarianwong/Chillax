import React from "react";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import SearchBar from "./components/SearchBar";
import Activities from "./components/Activities";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Intro />
      <SearchBar />
      <Activities />
    </div>
  );
};

export default App;
