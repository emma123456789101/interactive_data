
        var dataset1 = [   <h2> the bubble chart that is all the latitudes from 2007.</h2>
    <svg id="Bubble" height="500"></svg>
    <script type="text/javaScript">
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

var svg = d3.select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

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
</script>
    <h1>The link to the scatter plot</h1>
    <h2>The Scatter plot of the first month in 2008</h2>
    <svg id="scatter" width="1000" height="800"></svg>
    <script>
         <!---defining the dataset--->
        var dataset1 = [
        [14.0, 54.7], [13.35, 41.3], [21.44, 38.3],
        [10.84, 43.3], [91.9, 52.3], [338, 11.8],
        [69, 60.2], [11.48, 48.8],  [21.9, 29.8], [81.6, 62.4], [25.99,17.3],
		[10.17, 44.1], [84.6, 44.2], [15.4,43.6],[12.3, 42.7], [96.6,56.3], [99.7, 59.5],
	    [92.8, 50.6]
        ];

        <!-- setting the margin for the graph--->
        var svg = d3.select("svg"),
            margin = 150,
            width = svg.attr("width") - margin, //200
            height = svg.attr("height") - margin //100

        // Step 4
        var xScale = d3.scaleLinear().domain([0, 100]).range([0, width]),
            yScale = d3.scaleLinear().domain([0, 200]).range([height, 0]);

        var g = svg.append("g")
            .attr("transform", "translate(" + 100 + "," + 100 + ")");

        <!-- making the title of the graph-->
        svg.append('text')
        .attr('x', width/2 + 100)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 20)
        .text('the bubble chart that is all the latitudes from 2007');

        <!--creating the x-axis labels>
        svg.append('text')
        .attr('x', width/2 + 100)
        .attr('y', height - 15 + 150)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 14)
        .text('Days of rain');

        <!--creating the y-axis labels>
        svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(60,' + height + ')rotate(-90)')
        .style('font-family', 'Helvetica')
        .style('font-size', 14)
        .text('Days of sun');

        // creating the axis itself
        g.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(xScale));

        g.append("g")
         .call(d3.axisLeft(yScale));

        // creating the actual dots themselves for the scatter plot
        svg.append('g')
        .selectAll("dot")
        .data(dataset1)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xScale(d[0]); } )
        .attr("cy", function (d) { return yScale(d[1]); } )
        .attr("r", 2)
        .attr("transform", "translate(" + 100 + "," + 100 + ")")
<!--adding its interactive which is changing the colour of the bubble whether the mouse is on or off-->
bubbles.on("mouseover", function(d) {
  // Highlight the bubble
  d3.select(this)
    .attr("stroke", "black")
    .attr("stroke-width", 2);

  // Show additional information
  tooltip.style("visibility", "visible")
    .text(d.name + ": " + d.value);
});

bubbles.on("mouseout", function(d) {
  // Remove highlight from the bubble
  d3.select(this)
    .attr("stroke", "none");

  // Hide the tooltip
  tooltip.style("visibility", "hidden");
});
</script>   <h2> the bubble chart that is all the latitudes from 2007.</h2>
    <svg id="Bubble" height="500"></svg>
    <script type="text/javaScript">
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

var svg = d3.select("body")
  .append("svg")
  .attr("width", 500)
  .attr("height", 500);

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
</script>
    <h1>The link to the scatter plot</h1>
    <h2>The Scatter plot of the first month in 2008</h2>
    <svg id="scatter" width="1000" height="800"></svg>
    <script>
         <!---defining the dataset--->
        var dataset1 = [
        [14.0, 54.7], [13.35, 41.3], [21.44, 38.3],
        [10.84, 43.3], [91.9, 52.3], [338, 11.8],
        [69, 60.2], [11.48, 48.8],  [21.9, 29.8], [81.6, 62.4], [25.99,17.3],
		[10.17, 44.1], [84.6, 44.2], [15.4,43.6],[12.3, 42.7], [96.6,56.3], [99.7, 59.5],
	    [92.8, 50.6]
        ];

        <!-- setting the margin for the graph--->
        var svg = d3.select("svg"),
            margin = 150,
            width = svg.attr("width") - margin, //200
            height = svg.attr("height") - margin //100

        // Step 4
        var xScale = d3.scaleLinear().domain([0, 100]).range([0, width]),
            yScale = d3.scaleLinear().domain([0, 200]).range([height, 0]);

        var g = svg.append("g")
            .attr("transform", "translate(" + 100 + "," + 100 + ")");

        <!-- making the title of the graph-->
        svg.append('text')
        .attr('x', width/2 + 100)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 20)
        .text('the bubble chart that is all the latitudes from 2007');

        <!--creating the x-axis labels>
        svg.append('text')
        .attr('x', width/2 + 100)
        .attr('y', height - 15 + 150)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 14)
        .text('Days of rain');

        <!--creating the y-axis labels>
        svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(60,' + height + ')rotate(-90)')
        .style('font-family', 'Helvetica')
        .style('font-size', 14)
        .text('Days of sun');

        // creating the axis itself
        g.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(xScale));

        g.append("g")
         .call(d3.axisLeft(yScale));

        // creating the actual dots themselves for the scatter plot
        svg.append('g')
        .selectAll("dot")
        .data(dataset1)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xScale(d[0]); } )
        .attr("cy", function (d) { return yScale(d[1]); } )
        .attr("r", 2)
        .attr("transform", "translate(" + 100 + "," + 100 + ")")
<!--adding its interactive which is changing the colour of the bubble whether the mouse is on or off-->
bubbles.on("mouseover", function(d) {
  // Highlight the bubble
  d3.select(this)
    .attr("stroke", "black")
    .attr("stroke-width", 2);

  // Show additional information
  tooltip.style("visibility", "visible")
    .text(d.name + ": " + d.value);
});

bubbles.on("mouseout", function(d) {
  // Remove highlight from the bubble
  d3.select(this)
    .attr("stroke", "none");

  // Hide the tooltip
  tooltip.style("visibility", "hidden");
});
</script>
        [14.0, 54.7], [13.35, 41.3], [21.44, 38.3],
        [10.84, 43.3], [91.9, 52.3], [338, 11.8],
        [69, 60.2], [11.48, 48.8],  [21.9, 29.8], [81.6, 62.4], [25.99,17.3],
		[10.17, 44.1], [84.6, 44.2], [15.4,43.6],[12.3, 42.7], [96.6,56.3], [99.7, 59.5],
	    [92.8, 50.6]
        ];

        <!-- setting the margin for the graph--->
        var svg = d3.select("svg"),
            margin = 150,
            width = svg.attr("width") - margin, //200
            height = svg.attr("height") - margin //100

        <!--creating the scale for the graph--->
        var xScale = d3.scaleLinear().domain([0, 100]).range([0, width]),
            yScale = d3.scaleLinear().domain([0, 200]).range([height, 0]);

        var g = svg.append("g")
            .attr("transform", "translate(" + 100 + "," + 100 + ")");

        <!--giving the scatter plot a title--->
        svg.append('text')
        .attr('x', width/2 + 100)
        .attr('y', 100)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 20)
        .text('The Scatter plot of the first month in 2008');

        <!-- the x-axis label--->
        svg.append('text')
        .attr('x', width/2 + 100)
        .attr('y', height - 15 + 150)
        .attr('text-anchor', 'middle')
        .style('font-family', 'Helvetica')
        .style('font-size', 14)
        .text('Days of rain');

        <!---the y-axis label--->
        svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('transform', 'translate(60,' + height + ')rotate(-90)')
        .style('font-family', 'Helvetica')
        .style('font-size', 14)
        .text('Days of sun');

        // Step 6
        g.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(xScale));

        g.append("g")
         .call(d3.axisLeft(yScale));


        svg.append('g')
        .selectAll("dot")
        .data(dataset1)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xScale(d[0]); } )
        .attr("cy", function (d) { return yScale(d[1]); } )
        .attr("r", 2)
        .attr("transform", "translate(" + 100 + "," + 100 + ")")
        .style("fill", "#CC0000");
<!--adding its interactive which is changing the colour of the bubble whether the mouse is on or off-->
bubbles.on("mouseover", function(d) {
  d3.select(this)
    .attr("fill", "blue"); // Change the fill color to red when hovered over
})
.on("mouseout", function(d) {
  d3.select(this)
    .attr("fill", "red"); // Change the fill color back to the original color
});

</script>