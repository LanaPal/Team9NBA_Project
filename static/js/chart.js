const get_attendance = "/attendance";

function chartJS() {
  d3.json(get_attendance).then(function (game_attendance) {
    // grab attendance data from json
    let item = game_attendance;
    console.log(item);

    item.sort(function (a, b) {
      return b.TOTAL_ATTENDANCE - a.TOTAL_ATTENDANCE;
    });
    let nba_attendance = item.map((team) => team.TOTAL_ATTENDANCE);
    let team_name = item.map((team) => team.TEAM);
    // chart JS coding
    const ctx = document.getElementById("myChart").getContext("2d");
    const chart = new Chart(ctx, {
      // The type of chart we want to create
      type: "bar",

      // The data for our dataset
      data: {
        labels: team_name,
        datasets: [
          {
            label: "Team Game Attendance",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: nba_attendance,
          },
        ],
      },

      // Configuration options go here
      options: {},
    });
  });
}
chartJS();
