import React, { useState } from "react";
import "./App.css";
import Bar from "./components/Bar";
// import Pie from "./components/Pie";
// import Plot from "./components/Plot";
// import World from "./components/World";
import data from "./data/en_DXYArea_1581650515.json";

const dataSet = data.results.map(index => {
  return {
    Disease: index.Disease,
    "Cases": index.Cases,
    "Deaths": index.Deaths,
    "Recovered": index.Recovered
  };
});

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
      <div className="container">
        <h2 className="barTitle">Corona VS SARs(2003) Virus Cases Bar Graph</h2>
        <Bar data={dataSet} keys={keys} colors={colors} />

        <div className="App">
          {allKeys.map(key => (
            <div key={key} className="field">
              <input
                id={key}
                type="checkbox"
                checked={keys.includes(key)}
                onchange={e => {
                  if (e.target.checked) {
                    setKeys(Array.from(new Set([...keys, key])));
                  } else {
                    setKeys(keys.filter(_key => _key !== key));
                  }
                }}
              />
              <label for={key} style={{ color: colors[key] }}>
                {key}
              </label>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
