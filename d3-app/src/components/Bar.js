import React, { useEffect, useRef } from "react";
import {select} from "d3";
import useResizeObserver from "./useResizeObserver"


const Bar = ({data,keys,colors}) => {

  const svgRef = useRef(null);
  const wrapperRef = useRef();
  const dimensions = useResizeObserver(wrapperRef);

  useEffect(() => {
      const svg = select(svgRef.current);
      const {width, height} = dimensions || wrapperRef.current.getBoundingClientRect();
  }, [colors,data,dimensions,keys]);


  return (
    <React.Fragment>
        <div ref={wrapperRef} style={{marginBottom: "2rem"}}>
            <svg ref = {svgRef}>
                <g className="x-axis"/>
                <g className="y-axis"/>
            </svg>
        </div>
    </React.Fragment>
  );
};

export default Bar;
