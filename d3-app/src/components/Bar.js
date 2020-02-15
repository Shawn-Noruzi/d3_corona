import React, { useEffect, useRef } from "react";
import { select, scaleBand, axisBottom, stack, max, scaleLinear } from "d3";
import useResizeObserver from "../useResizeObserver";

const Bar = ({ data, keys, colors }) => {
  const svgRef = useRef(null);
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
    const svg = select(svgRef.current);
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    //creating the 'stacked' part of the bars
    const stackGenerator = stack().keys(keys);
    //finds the max for y scale
    const layers = stackGenerator(data);
    const extent = [0,max(layers, layer => max(layer, sequence => sequence[1]))]

    const yScale = scaleLinear().domain(extent).range([height,0]);

    const xScale = scaleBand()
      .domain(data.map(d => d.Disease))
      .range([0, width/2]);

    const xAxis = axisBottom(xScale);
    svg.select(".x-axis").attr("transform", `translate(0,${height-30})`).call(xAxis)

    // const yScale = scaleBand().domain()
  }, [colors, data, dimensions, keys]);

  return (
    <React.Fragment>
      <div ref={wrapperRef} style={{ marginBottom: "2rem" }}>
        <svg className="container" ref={svgRef}>
          <g className="x-axis" />
          <g className="y-axis" />
        </svg>
      </div>
    </React.Fragment>
  );
};

export default Bar;
