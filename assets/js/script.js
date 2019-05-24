const options = {
    method: 'GET', 
    headers: {'X-Auth-Token': '972c6683e59747d18bbbdf01008cacb2'},
}
const getTeam = () => {
    fetch('https://api.football-data.org/v2/teams/5', options)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        findPlayers(data);
    });
}
const findPlayers = (data) => {
    let squad = data.squad;
    let goalKeeper = [];
    let allDefenders = [];
    let fourDefenders = [];
    let allMidfielders = [];
    let threeMidfielders = [];
    let allAttackers = [];
    let threeAttackers = [];
    console.log(data);
    squad.map(player => {
        let playerName = player.name
        let playerShirt = player.shirtNumber
        let playerPosition = player.position
        if(playerPosition === "Goalkeeper") {
            goalKeeper.push({"name" : playerName, "shirt" : playerShirt, "position" : playerPosition });
        }
        if(playerPosition === "Defender") {
            allDefenders.push({"name" : playerName, "shirt" : playerShirt, "position" : playerPosition });
        }
        if(playerPosition === "Midfielder") {
            allMidfielders.push({"name" : playerName, "shirt" : playerShirt, "position" : playerPosition });
        }
        if(playerPosition === "Attacker") {
            allAttackers.push({"name" : playerName, "shirt" : playerShirt, "position" : playerPosition });
        }
    })
    let randomValue = goalKeeper[Math.floor(Math.random() * goalKeeper.length)];
    document.getElementById("playerName").innerHTML = randomValue.name;
    document.getElementById("playerShirt").innerHTML = randomValue.shirt;
    document.getElementById("playerPosition").innerHTML = randomValue.position;
    for( let i = 0; i < data.squad.length; i++){
        let randomValueDef = allDefenders[Math.floor(Math.random() * allDefenders.length)];
        let randomMidfielder = allMidfielders[Math.floor(Math.random() * allMidfielders.length)];
        let randomAttacker = allAttackers[Math.floor(Math.random() * allAttackers.length)];
        if(fourDefenders.name !== randomValueDef.name){
            if(randomValueDef.shirt !== null){
                if (fourDefenders.length < 4){
                    fourDefenders.push(randomValueDef);
                }   
            }
        }
        if(threeMidfielders.name !== randomMidfielder.name){
            if(randomMidfielder.shirt !== null){
                if (threeMidfielders.length < 3){
                    threeMidfielders.push(randomMidfielder);
                }
            }
        }
        if(threeAttackers.name !== randomAttacker.name){
            if(randomAttacker.shirt !== null){
                if (threeAttackers.length < 3){
                    threeAttackers.push(randomAttacker);
                }
            }
        }
    }
    fourDefenders.map(Defender => {
        let mapDefenders = document.createElement("div");
        mapDefenders.setAttribute("class", "Defenders");
        mapDefenders.innerHTML = Defender.name+"</br>"+Defender.shirt+"</br>"+Defender.position
        document.querySelector("#row1").appendChild(mapDefenders);
    })
    threeMidfielders.map(Midfielder => { 
        let mapMidfielders = document.createElement("div");
        mapMidfielders.setAttribute("class", "Midfielders");
        mapMidfielders.innerHTML = Midfielder.name+"</br>"+Midfielder.shirt+"</br>"+Midfielder.position   
        document.querySelector("#row2").appendChild(mapMidfielders);
    })
    threeAttackers.map(Attacker => {    
        let mapAttackers = document.createElement("div");
        mapAttackers.setAttribute("class", "Attackers");
        mapAttackers.innerHTML = Attacker.name+"</br>"+Attacker.shirt+"</br>"+Attacker.position    
        document.querySelector("#row3").appendChild(mapAttackers);
    })
}
const fixUndef = () => {
    let undef = document.getElementById("playerPosition").innerHTML = playerPosition;
    if(undef === null) {
        document.getElementById("playerPosition").style.display == "none";
    } else {
        document.getElementById("playerPosition").innerHTML = playerPosition;
    }
}
getTeam(); 
fixUndef();


