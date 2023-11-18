
// Set up the data
const data = [
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

{group:"Yeovilton",lon:-2.64148,lat:51.00586}]


// Create the SVG container
const svg = d3.select("#heat")
.append("svg")
.attr("width", width)
.attr("height", height);

// Create the heatmap
const heatmap = svg.selectAll("rect")
.data(data)
.enter()
.append("rect")
.attr("x", d => xScale(d.lon))
.attr("y", d => yScale(d.lat))
.attr("width", rectWidth)
.attr("height", rectHeight)
.attr("fill", d => colorScale(d.value));
