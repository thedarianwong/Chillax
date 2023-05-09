import React from "react";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import SearchBar from "./components/SearchBar";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Intro />
      <SearchBar />
    </div>
  );
};

export default App;
