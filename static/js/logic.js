// console.log('here')
// const url = "mongodb://localhost:27017/nba_db";
const get_tweets = '/tweets'
const get_stats = '/stats'
// const url2 = 'http://127.0.0.1:5000/arenas'

// Fetch the JSON data and console log it
function createData(){
d3.json(get_stats).then(function(stats) {
  let dataPlayers = []
  stats.forEach((row) => {
    let players = []
    Object.entries(row).forEach(([key, val])=>{
      if (key == 'PLAYER' || key == 'TEAM' || key == 'SALARY_MILLIONS' || key == 'MPG' || key == 'Rk' || key == 'wins')
      players.push(val)


    })
    var temp = players[0]
    players[0] = players [1]
    players[1] = temp
    console.log(players)
    dataPlayers.push(players)
  }

  )
  console.log(dataPlayers)

  $('#players').DataTable( {
    data: dataPlayers,
    columns: [
        { title: "Player Name" },
        { title: "MPG" },
        { title: "Rank" },
        { title: "Salary" },
        { title: "Team" },
        { title: "Game wins" }
    ]
} );
  return dataPlayers
});
}
let dataSet = createData()


// Use D3 to read in samples.json
// Create Charts with function
function createCharts(){
  console.log('test')
  d3.json(get_tweets).then(function(player_twitter_data) {
      //Scatter Plot Chart
      let item = player_twitter_data
      
      item.sort(function(a,b){
        return b.TWITTER_FAVORITE_COUNT - a.TWITTER_FAVORITE_COUNT
      }
      )
      let favorite = item.map(player => player.TWITTER_FAVORITE_COUNT)
      let retweet = item.map(player => player.TWITTER_RETWEET_COUNT)
      let player_name = item.map(player => player.PLAYER)

      let trace = {
          x: favorite.slice(0,25),
          y: retweet.slice(0,25),
          text: player_name.slice(0,25),
          mode: 'markers',
          type: 'scatter',
          // // marker: {
          // //     size: retweet,
          // },
          
      };
      let dataPlot = [trace];

      let layout = {
          title: "Twitter Favorite Count vs Retweet Count",
          xaxis: {
            title:{
              text:'Twitter Favorite Count'
            }
            },
            
          
          yaxis: {
            title:{
              text:'Twitter Retweet Count'
            }
          }
      };

  
      Plotly.newPlot("scatter", dataPlot, layout);

  });

  d3.json(get_stats).then(function(player_stats_data) {
    //Scatter Plot Chart
    let item = player_stats_data
    console.log(item)
    
    item.sort(function(a,b){
      return b.POINTS - a.POINTS
    }
    )
    let points = item.map(player => player.POINTS)
    
    let player_name = item.map(player => player.PLAYER)

    let trace2 = {
        x: player_name.slice(0,25),
        y: points.slice(0,25),
        type: 'bar',
        
        
    };
    let dataPlot2 = [trace2];

    let layout2 = {
        title: "Top 25 Player Points Average",
        xaxis: {
          title:{
            text:'Player Name',
          },
          tickangle: 35

          },
          
        
        yaxis: {
          title:{
            text:'Points Average'
          }
        }
    };


    Plotly.newPlot("bar2", dataPlot2, layout2);


    
    let salary = item.map(player => player.SALARY_MILLIONS)
    let game_wins = item.map(player => player.wins)

    let trace3 = {
        x: game_wins.slice(0,25),
        y: points.slice(0,25),
        text: player_name.slice(0,25),
        mode: 'markers',
        marker:{
          size:salary.slice(0,25)
        }
        
        
    };
    let dataPlot3 = [trace3];

    let layout3 = {
        title: "Top 25 Players Points vs Salary and Wins in 2016-17 Season",
        xaxis: {
          title:{
            text:'Wins',
          },
         

          },
          
        
        yaxis: {
          title:{
            text:'Points Average'
          }
        }
         
    };


    Plotly.newPlot("bubble", dataPlot3, layout3);
});
}
createCharts()




