console.log('here')
// const url = "mongodb://localhost:27017/nba_db";
const url = '/stats'
// const url2 = 'http://127.0.0.1:5000/arenas'

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  // console.log(JSON.parse(JSON.stringify(data)));
  console.log(data);
});
// // d3.json(url2).then(function(data) {
//   console.log(data);
// });
// Promise Pending
// const dataPromise = d3.json(url);
// console.log("Data Promise: ", dataPromise);


// Use D3 to read in samples.json
// Create Charts with function
function createCharts(id){
  d3.json("/tweets").then((data) => {
      //filter data for first 10 items
      //Bubble Chart
      let trace = {
          x: firstItem.TWITTER_FAVORITE_COUNT.slice(0,10),
          y: firstItem.TWITTER_RETWEET_COUNT.slice(0,10),
          text: firstItem.PLAYER.slice(0,10),
          mode: 'markers',
          marker: {
              size: firstItem.TWITTER_RETWEET_COUNT,
          },
          
      };
      let dataPlot = [trace];

      let layout = {
          title: "Twitter Favorite Count vs Retweet Count",
      };

  
      Plotly.newPlot("bubble", dataPlot, layout);

  });
}



