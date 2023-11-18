//defining the dataset

var data = [
{group:"Aberporth", lon:-4.56999,lat:52.13914},

{group:"Armagh",lon:-6.64866,lat:54.35234},

{group:"Bradford",lon: -1.77234,lat:53.81341},


{group:"Camborne",lon: -5.32656,lat: 50.21782},

{group:"Eastbourne",lon:0.28543,lat:50.76167},

{group:"Eskdalemuir",lon:-3.206,lat:55.311},

{group:"Heathrow",lon:-0.44904,lat:51.47872},

{group:"Hurn",lon:-1.83483,lat:50.7789},


{group:"Lerwick",lon:-1.18299,lat:60.13946},

{group:"Leuchars",lon:-2.86051,lat:56.37745},
{group:"Oxford",lon:-1.2625,lat:51.76073},

{group:"Paisley",lon:-4.42966,lat:55.8455},

{group:"Ross-on-Wye",lon:-2.58441,lat:51.91075},

{group:"Shawbury",lon:-2.66329,lat:52.79433},

{group:"Sheffield",lon:-1.48986,lat:53.38101},

{group:"Valley",lon:-4.53524,lat:53.25238},

{group:"Waddington",lon:-0.52173,lat:53.17509},

{group:"Whitby",lon:-0.62411,lat:54.48073},

{group:"Yeovilton",lon:-2.64148,lat:51.00586}];
// set the dimensions and margins of the graph
var margin = {top: 80, right: 25, bottom: 30, left: 30},
  width = 450 - margin.left - margin.right,
  height = 450 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#heatmap")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");
//Read the data
d3.csv("file:///C:/Users/Emma%20Davidson/OneDrive%20-%20Edinburgh%20Napier%20University/Documents/interactive%20data%20visualisation%20practical/data.csv", function(data) {

// Labels of row and columns
  var myNames = d3.map(data, function(d){return d.name;}).keys()
  var myLons = d3.map(data, function(d){return d.lon;}).keys()

// Build X scales and axis:
var x = d3.scaleBand()
  .range([ 0, width ])
  .domain(myNames)
  .padding(0.05);
svg.append("g")
.style("font-size",15)
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x).ticksize(0))
  .select(".domain").remove()

// Build X scales and axis:
var y = d3.scaleBand()
  .range([ height, 0 ])
  .domain(myLons)
  .padding(0.05);
svg.append("g")
   .style("font-size",15)
  .call(d3.axisLeft(y).ticksize(0))
  .select(".domain").remove()

// Build color scale
  var myColor = d3.scaleSequential()
    .interpolator(d3.interpolateInferno)
    .domain([1,100])

// create a tooltip
  var tooltip = d3.select("#heatmap")
    .append("div")
    .style("opacity", 0)
    .attr("class", "tooltip")
    .style("background-color", "white")
    .style("border", "solid")
    .style("border-width", "2px")
    .style("border-radius", "5px")
    .style("padding", "5px")

  // Three function that change the tooltip when user hover / move / leave a cell
  var mouseover = function(d) {
    tooltip
      .style("opacity", 1)
    d3.select(this)
      .style("stroke", "black")
      .style("opacity", 1)
  }
  var mousemove = function(d) {
    tooltip
      .html("The exact value of<br>this cell is: " + d.lat)
      .style("left", (d3.mouse(this)[0]+70) + "px")
      .style("top", (d3.mouse(this)[1]) + "px")
  }
  var mouseleave = function(d) {
    tooltip
      .style("opacity", 0)
    d3.select(this)
      .style("stroke", "none")
      .style("opacity", 0.8)
  }

  // add the squares
  svg.selectAll()
    .data(data, function(d) {return d.name+':'+d.lon;})
    .enter()
    .append("rect")
      .attr("x", function(d) { return x(d.name) })
      .attr("y", function(d) { return y(d.lon) })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", x.bandwidth() )
      .attr("height", y.bandwidth() )
      .style("fill", function(d) { return myColor(d.lat)} )
      .style("stroke-width", 4)
      .style("stroke", "none")
      .style("opacity", 0.8)
    .on("mouseover", mouseover)
    .on("mousemove", mousemove)
    .on("mouseleave", mouseleave)
})

// Add title to graph
svg.append("text")
        .attr("x", 0)
        .attr("y", -50)
        .attr("text-anchor", "left")
        .style("font-size", "22px")
        .text("A heatmap");

// Add subtitle to graph
svg.append("text")
        .attr("x", 0)
        .attr("y", -20)
        .attr("text-anchor", "left")
        .style("font-size", "12px")
        .style("fill", "grey")
        .style("max-width", 400)
        .text("A heat map representing all the longitudes and latitudes of the airports in Britain");


