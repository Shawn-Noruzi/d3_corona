import React, { useState } from "react";
import "./App.css";
import Bar from "./components/Bar";
// import Pie from "./components/Pie";
// import Plot from "./components/Plot";
// import World from "./components/World";
import data from "./data/en_DXYArea_1581650515.json";

const dataSet = data.results.map(index => {
  return {
    provinceName: index.provinceName,
    confirmedCount: index.confirmedCount,
    curedCount: index.curedCount,
    deadCount: index.deadCount
  };
});
console.log(dataSet);
console.log(data);

const allKeys = ["Dead Count", "Confirmed Cured", "Total Cases"];
const colors = {
  "Dead Count": "green",
  "Confirmed Cured": "blue",
  "Total Cases": "green"
};

//creation of a legend type bar graph -> if user selects one or many -> the bars will update what is shown (stacked bar style)
function App() {
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
    <h2 className="bar">Corona Virus Cases Bar Graph</h2>
      <Bar data={dataSet} keys={keys} colors={colors} />

      <div className="App">{allKeys.map(key => (
        <div key={key} className='field'>
          <input id={key} type="checkbox" checked={keys.includes(key)} onchange = {e => { 
            if (e.target.checked){
              setKeys(Array.from( new Set([...keys,key])));
            } else {
              setKeys(keys.filter(_key => _key !== key));
            }
          }}/>
          <label for={key} style = {{color:colors[key]}}>
            {key}
          </label>
        </div>))}
      </div>))};
    </React.Fragment>
      )}

export default App;
