import * as d3 from "d3";
const matrix = [
    [11975, 5871, 8916, 2868],
    [1951, 10048, 2060, 6171],
    [8010, 16145, 8090, 8045],
    [1013, 990, 940, 6907]
];



window.onload = function () {
    d3.select("#Demo")
        .append("table")
        .selectAll("tr")
        .data(matrix)
        .join("tr")
        .selectAll("td")
        .data(d => d)
        .join("td")
        .text(d => d);
    
    // Analysis of D3 join and select
    let myRows = document.querySelectorAll("tr");
    let myTds = document.querySelectorAll("td");
    // Make these visible in the dev console
    window.myRows = myRows;
    window.myTds = myTds;
    let explain = document.getElementById("Explain");
    let info = document.createElement("p");
    info.innerHTML = "The __data__ associated with each row:";
    explain.appendChild(info);
    
    myRows.forEach(function(row){
        let p = document.createElement("p");
        p.innerHTML = row.__data__.join(", ");
        p.classList.add("rowData");
        explain.appendChild(p);
        
    });
    info = document.createElement("p");
    info.innerHTML = "The __data__ associated with each td as a span";
    explain.appendChild(info);
    info = document.createElement("p");
    explain.appendChild(info);
    myTds.forEach(function(td) {
        let span = document.createElement("span");
        span.innerHTML = td.__data__.toFixed(0);
        span.classList.add("tdData");
        info.appendChild(span);
    });
};
