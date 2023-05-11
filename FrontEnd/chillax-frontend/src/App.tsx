import React from "react";
import "./App.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import SearchBar from "./components/SearchBar";
import Activities from "./components/Activities";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Intro />
      <SearchBar />
      <Activities />
      <Feedback />
      <Footer />
    </div>
  );
};

export default App;
