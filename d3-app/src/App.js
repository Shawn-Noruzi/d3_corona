import React, { useState } from "react";
import "./App.css";
import Bar from "./components/Bar";
// import Pie from "./components/Pie";
// import Plot from "./components/Plot";
// import World from "./components/World";
import data from "./data/en_DXYArea_1581650515.json";
import StackedBarChart from "./components/Bar";



const allKeys = ["Cases", "Deaths", "Recovered"];
const colors = {
  "Cases": "blue",
  "Deaths": "red",
  "Recovered": "green"
};

//creation of a legend type bar graph -> if user selects one or many -> the bars will update what is shown (stacked bar style)
function App() {
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>


      <div className="App">
      <h2>Corona Virus VS SARs (2003) </h2>
      <StackedBarChart data={data} keys={keys} colors={colors} />
        {allKeys.map(key => (
          <div key={key} className="field">
            <input
              id={key}
              type="checkbox"
              checked={keys.includes(key)}
              onChange={e => {
                if (e.target.checked) {
                  setKeys(Array.from(new Set([...keys, key])));
                } else {
                  setKeys(keys.filter(_key => _key !== key));
                }
              }}
            />
            <label htmlFor={key} style={{ color: colors[key] }}>
              {key}
            </label>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default App;