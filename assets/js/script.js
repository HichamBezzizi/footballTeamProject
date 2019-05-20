
const options = {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    headers: {'X-Auth-Token': '972c6683e59747d18bbbdf01008cacb2'},
}

const getTeam = () => {
    fetch('https://api.football-data.org/v2/teams/18', options)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        // console.log(JSON.stringify(myJson));
        // var data = JSON.stringify(myJson);
        // console.log(myJson.squad)
        // console.log(myJson.squad[1])
        //document.querySelector("#footTeam").innerHTML = data //this displays it in HTML
        // console.log(JSON.parse(data.squad));

        findPlayers(data)

    });
}

const findPlayers = (data) => {

    // console.log(JSON.parse(data));

    console.log(data.squad)
    console.log(data.squad[1])
    console.log(data.squad[0].name)
    console.log(data.squad.length)

    // console.log(data);
    // for loop here
    // for(let i = 0; i < myJson[0].answers.length; i++){
    //     if(myJson[0].answers[i] != "" && myJson[0].answers[i] != null){
    //     document.getElementById(optionsRadios${i+1}).parentElement.classList.remove('hidden');
    //     document.getElementById(optionsRadios${i+1}).parentElement.lastElementChild.innerHTML = myJson[0].answers[i];
    //     };
    // };

    for (let i = 0; i < data.squad.length; i++){
        
        console.log(data.squad[i].name)
    }

}

getTeam(); //function call


