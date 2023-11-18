
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
        .attr('x', width/8 + 100)
        .attr('y', 100)
        .attr('text-anchor', 'centre')
        .style('font-family', 'Helvetica')
        .style('font-size', 10)
        .text('the Scatter plot that is all the days of sun and rain in 2008');

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

        <!---creating the axis itself-->
        g.append("g")
         .attr("transform", "translate(0," + height + ")")
         .call(d3.axisBottom(xScale));

        g.append("g")
         .call(d3.axisLeft(yScale));

        <!---creating the actual dots themselves for the scatter plot-->
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
dots.on("mouseover", function(d) {
  d3.select(this)
    .attr("fill", "blue"); // Change the fill color to red when hovered over
})
.on("mouseout", function(d) {
  d3.select(this)
    .attr("fill", "red"); // Change the fill color back to the original color
});
<!--interactive code needs to be added--->
