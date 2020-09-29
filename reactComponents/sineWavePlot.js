import React from "react";
// import d3axis from "d3-axis";
// import d3scale from "d3-scale";
import * as d3 from "d3";

/*

    Using D3 to help create a plot with React

    1. Create some data
    2. Create scales -- DONE
    3. Create x and y axes -- These need to be fed a DOM element CAN'T
    4. Create a line plot -- Yes, this works!

*/

let sizing = {width: 300, height: 200};

function sineData(numPoints) {
    let points = [];
    for (let i = 0; i < numPoints; i ++) {
        let x = 2*Math.PI*(i/(numPoints-1));
        let y = Math.sin(x);
        points.push([x, y]);
    }
    return points;
}

function SineWavePlot(props) {
  let points = sineData(100);
  console.log(points);
  
  let xScale = d3.scaleLinear().domain([0, 2*Math.PI]).range([0,sizing.width]);
  let yScale = d3.scaleLinear().domain([-1, 1]).range([0,sizing.height]);
  console.log(xScale(0), xScale(2*Math.PI));
  let axisLeft = d3.axisLeft(yScale);
  let axisBottom = d3.axisBottom(xScale);
  // Can't use axis without a DOM reference
  let line = d3.line().x((d) => xScale(d[0])).y((d) => yScale(d[1]));
  let lineStyle = {fill: "yellow", stroke: "blue", strokeWidth: "2px"};
  return (
    <svg width={sizing.width} height={sizing.height} >
        <path d={line(points)} style={lineStyle}></path>
    </svg>
  );
}

export default SineWavePlot;