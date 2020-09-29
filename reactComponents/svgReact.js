import React from "react";

function SVGdrawReact(props) {
  return (
    <svg width="300" height="200">
      <rect width="100%" height="100%" fill="red" />
      <circle cx="150" cy="100" r="80" fill="green" />
      <text x="150" y="70" fontSize="30" fill="white" textAnchor="middle">
        Hello
      </text>
      <text x="150" y="125" fontSize="60" fill="white" textAnchor="middle">
        SVG
      </text>
    </svg>
  );
}

export default SVGdrawReact;