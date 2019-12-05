// TODO: add code here
window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) {
            let container = document.getElementById('container');
            let astronautArray = json;
            for (let i = 0; i < astronautArray.length; i++) {
                container.innerHTML += `
                    <div class="astronaut">
                    <div class="bio">
                    <h3>${astronautArray[i].firstName} ${astronautArray[i].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${astronautArray[i].hoursInSpace}</li>
                        <li id="index">Active: ${astronautArray[i].active}</li>
                        <li>Skills: ${astronautArray[i].skills.join(', ')}</li>
                    </ul>
                    </div>
                    <img class="avatar" src="${astronautArray[i].picture}">
                    </div>
                `;
                if (astronautArray[i].active) {
                    document.getElementById('id').style.color = 'green';
                }
            }
        })
        
    })
})