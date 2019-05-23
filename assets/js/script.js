
const options = {
    method: 'GET', 
    headers: {'X-Auth-Token': '972c6683e59747d18bbbdf01008cacb2'},
}

const getTeam = () => {
    fetch('https://api.football-data.org/v2/teams/18', options)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        findPlayers(data);

    });
}

const findPlayers = (data) => {

    console.log(data.squad);

    for (let i = 0; i < data.squad.length; i++){

        let playerName = data.squad[29].name;
        let playerShirt = data.squad[29].shirtNumber;
        let playerRole = data.squad[29].role;
        let playerPosition = data.squad[29].position;

        // console.log(data.squad[i].name);
        // console.log(data.squad[i].role);
        // console.log(data.squad[i].shirtNumber);
        document.getElementById("playerName").innerHTML = playerName;
        document.getElementById("playerShirt").innerHTML = playerShirt;
        document.getElementById("playerRole").innerHTML = playerRole;
        document.getElementById("playerPosition").innerHTML = playerPosition;

    }

}

const fixUndef = () => {

    let undef = document.getElementById("playerPosition").innerHTML = playerPosition;

    if(undef === null) {

        document.getElementById("playerPosition").style.display == "none";


    } else {

        document.getElementById("playerPosition").innerHTML = playerPosition;
    }

}

const keepPlayers = () => {

}

const attkPlayers = () => {
    
}

const MidfPlayers = () => {
    
}

const DefPlayers = () => {
    
}

//function call
getTeam(); 
fixUndef();


