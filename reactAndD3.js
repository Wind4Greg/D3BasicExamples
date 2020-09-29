import React from "react";
import ReactDOM from "react-dom";
import SVGdrawReact from "./reactComponents/svgReact";
import SineWavePlot from "./reactComponents/sineWavePlot";

let contents = <main>
    <h1>React and D3 Examples</h1>
    <h2>Sine Wave Plot</h2>
    <p>React does all the SVG drawing here, D3 computes the scales, and
        the basic SVG path data string.
    </p>
    <SineWavePlot />
    <h2>Drawing SVG in React</h2>
    <SVGdrawReact />
</main>;
ReactDOM.render(contents, document.getElementById("root"));
