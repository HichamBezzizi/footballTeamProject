
const options = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {'X-Auth-Token': '972c6683e59747d18bbbdf01008cacb2'},
}

const getTeam = () => {
fetch('https://api.football-data.org/v2/teams/18', options)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    // console.log(JSON.stringify(myJson));
    var data = JSON.stringify(myJson);
    var playerName
    var playerPos
    var playerNat
    var playerNumber
    document.querySelector("#footTeam").innerHTML = data //this displays it in HTML
  });
}
// getTeam(); //function call


