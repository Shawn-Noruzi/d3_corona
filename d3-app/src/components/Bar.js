import React, { useEffect, useRef } from "react";
import * as d3 from "d3";
import data from "../data/en_DXYArea_1581650515.json";

const Bar = () => {
  
  let svgRef = useRef(null);

  useEffect(() => draw(), [data]);

  const draw = () => {
    //define scales
    const xScale = d3.scaleBand().domain(xAxisType === "Confirmed Cases").range(0, data.length);
    const yScale = d3
      .scaleLinear()
      .domain([0,data.length])
      .range([0, height]);

    //grab elements and style/position
    d3.select(svgRef.current)
      .selectAll("rect")
      .data(data)
      .attr("x", d => xScale(d.x))
      .attr("y", d => yScale(d.y))
      .attr("width", xScale.bandwidth())
      .attr("height", d => height - yScale(d.y))
      .style("fill", d => d.color);
  };
  const bars = data.map(d => <rect key={d.x} />);
console.log(data);
  return (
    // <svg width={width} height={height} ref={svgRef}>
    //   {bars}
    // </svg>
    <p>Graph Bars</p>
  );
};

export default Bar;
