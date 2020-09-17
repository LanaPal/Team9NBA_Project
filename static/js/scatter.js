// console.log('here')
// const url = "mongodb://localhost:27017/nba_db";
// const url = '/tweets'

// chart building
const svgWidth = 1000;
const svgHeight = 450;

const margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100,
};

const width = 1000 - margin.left - margin.right;
const height = 450 - margin.top - margin.bottom;

// Create an SVG wrapper, append an SVG group that will hold our chart, and shift the latter by left and top margins.
const svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

const chartGroup = svg
  .append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

// Import Data
// Fetch the JSON data and console log it
const get_player_stats = "/stats";

d3.json(get_player_stats)
  .then(function (player_stats_data) {
    // console.log(player_stats_data);
    player_stats_data.forEach(function (data) {
      data.wins = +data.wins;
      // console.log(data.wins)
      data.SALARY_MILLIONS = +data.SALARY_MILLIONS;
      // console.log(data.SALARY_MILLIONS)
    });

    const xLinearScale = d3
      .scaleLinear()
      .domain([0, d3.max(player_stats_data, (d) => d.wins)])
      .range([0, width]);

    const yLinearScale = d3
      .scaleLinear()
      .domain([0, d3.max(player_stats_data, (d) => d.SALARY_MILLIONS)])
      .range([height, 0]);

    // Step 3: Create axis functions
    // ==============================
    const bottomAxis = d3.axisBottom(xLinearScale);
    const leftAxis = d3.axisLeft(yLinearScale);

    // Step 4: Append Axes to the chart
    // ==============================
    chartGroup
      .append("g")
      .attr("transform", `translate(0, ${height})`)
      .call(bottomAxis);

    chartGroup.append("g").call(leftAxis);

    // Step 5: Create Circles
    // ==============================
    const circlesGroup = chartGroup
      .selectAll("circle")
      .data(player_stats_data)
      .enter()
      .append("circle")
      .attr("cx", (d) => xLinearScale(d.wins))
      .attr("cy", (d) => yLinearScale(d.SALARY_MILLIONS))
      .attr("r", "10")
      .attr("fill", "SteelBlue")
      .attr("opacity", ".5");

    // Step 6: Initialize tool tip
    // ==============================
    const toolTip = d3
      .tip()
      .attr("class", "tooltip")
      .offset([80, -60])
      .html(function (d) {
        return `${d.PLAYER}<br>Team: ${d.TEAM}<br>Wins: ${d.wins}<br>Salary in M$: ${d.SALARY_MILLIONS}`;
      });
    // Step 7: Create tooltip in the chart
    // ==============================
    chartGroup.call(toolTip);

    // Step 8: Create event listeners to display and hide the tooltip
    // ==============================
    circlesGroup
      .on("click", function (data) {
        toolTip.show(data, this);
      })
      // onmouseout event
      .on("mouseout", function (data, index) {
        toolTip.hide(data);
      });

    // Create axes labels
    chartGroup
      .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left + 50)
      .attr("x", 0 - height / 2 - 40)
      .attr("dy", "1em")
      .attr("class", "axisText")
      .text("Salary in Millions");

    chartGroup
      .append("text")
      .attr("transform", `translate(${width / 2 - 30}, ${height + margin.top + 20})`)
      .attr("class", "axisText")
      .text("Wins per Season");

    chartGroup.append("text")
      .attr("x", (width / 2))             
      .attr("y", 0 - (margin.top / 2 - 20))
      .attr("text-anchor", "middle")  
      .style("font-size", "18px") 
      .text("Salary vs Wins for all population of NBA players");
  })
  .catch(function (error) {
    console.log(error);
  });
