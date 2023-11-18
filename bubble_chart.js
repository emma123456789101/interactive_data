

var dataset = [
      {source:"Aberporth", x: 100, y: 60, val: 5213.914, color: "#C9D6DF"},
      {source:"Armagh", x: 30, y: 80, val: 5435.234, color: "#F7EECF"},
      {source:"Bradford", x: 50, y: 40, val: 5381.341, color: "#E3E1B2"},
      {source:"Camborne", x: 190, y: 100, val: 5021.782, color: "#F9CAC8"},
      {source:"Eastbourne", x: 80, y: 170, val: 5076.167, color: "#00FF00"},
      {source:"Eskdalemuir", x: 170, y: 49, val: 5531.1, color: "#FFFF01"},
      {source:"Heathrow", x: 97, y: 111, val: 5147.872	, color: "#2FC392"},
      {source:"Hurn", x: 59, y: 250, val:5077.89, color: "#808000"},
      {source:"Lerwick", x: 162, y: 290, val: 6013.946, color: "#B93434"},
      {source:"Oxford", x: 180, y: 300, val: 5176.073, color: "#34B941"},
      {source:"Paisley", x: 58, y: 147, val: 5584.55, color: "#226C29"},
      {source:"Ross-on-Wye", x: 270, y: 100, val: 5191.075, color: "#22596C"},
      {source:"Shawbury", x: 30, y: 111, val: 5279.433, color: "#98C5D5"},
      {source:"Sheffield", x: 177, y: 200, val: 5338.101, color: "#D598D5"},
      {source:"Valley", x: 220, y: 182, val: 5325.238, color: "#C32FC3"},
      {source:"Waddington", x: 259, y: 33, val: 5317.509, color: "#C32FA5"},
      {source:"Whitby", x: 250, y: 220, val: 5448.073, color: "#2FC343"},
      {source:"Yeovilton", x: 98, y: 265, val: 5100.586, color: "#C3482F"}


    ]
<!--- Creating the SVG container-->
 const bubbleChartwidth = 400;
 const bubbleChartHeight = 500;
var svg = d3.select("#bubble_chart")
  .append("svg")
  .attr("width", 600)
  .attr("height", 600);

<!--- Create the bubble elements-->
var bubbles = svg.selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", d => d.x)
  .attr("cy", d => d.y)
  .attr("r", d => Math.sqrt(d.val)/4)
  .attr("fill", d => d.color);

<!--adding its interactive which is changing the colour of the bubble whether the mouse is on or off-->
bubbles.on("mouseover", function(d) {
  d3.select(this)
    .attr("fill", "red"); // Change the fill color to red when hovered over
})
.on("mouseout", function(d) {
  d3.select(this)
    .attr("fill", d => d.color); // Change the fill color back to the original color
});
<!--adding the city name-->
svg.selectAll("text")
      .data(dataset).enter()
      .append("text")
      .attr("x", function(d) {return d.x+(Math.sqrt(d.val)/4)})
      .attr("y", function(d) {return d.y+17})
      .text(function(d) {return d.source})
      .style("font-family", "arial")
      .style("font-size", "10px");

      svg.append('text')
        .attr('x', width/2 + 100)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 20)
        .text('the bubble chart that is all the latitudes from 2007');

