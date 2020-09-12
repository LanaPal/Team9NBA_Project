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

//Bubble Chart
// let trace3 = {
//   x: firstItem.otu_ids.slice(0,10),
//   y: firstItem.sample_values.slice(0,10),
//   text: firstItem.otu_labels.slice(0,10),
//   mode: 'markers',
//   marker: {
//       size: firstItem.sample_values,
//   },
  
// };
// let dataPlot3 = [trace3];

// let layout3 = {
//   title: "Count of Bacteria by Family - Selected Subjects",
// };


// Plotly.newPlot("bubble", dataPlot3, layout3);

// });
// }



