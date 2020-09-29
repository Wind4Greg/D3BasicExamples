import React from "react";
import ReactDOM from "react-dom";
import SVGdrawReact from "./reactComponents/svgReact";
import SineWavePlot from "./reactComponents/sineWavePlot";

let contents = <main>
    <h1>React and D3 Examples</h1>
    <h2>Drawing SVG in React</h2>
    <SVGdrawReact />
    <h2>Sine Wave Plot (To be written)</h2>
    <SineWavePlot />
</main>;
ReactDOM.render(contents, document.getElementById("root"));
