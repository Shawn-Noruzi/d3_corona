import React from 'react';
import './App.css';
import Bar from "./components/Bar";
import Pie from "./components/Pie";
import Plot from "./components/Plot";
import World from "./components/World";

function App() {
  return (
    <div className="App">
          <Bar  />
          <Pie />
          <Plot />
          <World/>


    </div>
  );
}

export default App;
