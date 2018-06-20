/*const alumnas = localStorage.getItem(conectJson);
const JSON = JSON.parse(alumnas);
//["id", "signupCohort", "timezone", "name", "locale", "role"];
console.log(conectJson + JSON.parse(alumnas));*/
 
const usersJson = "../../data/cohorts/lim-2018-03-pre-core-pw/users.json";
const alumnas = localStorage.getItem(usersJson);
let progress = "";
let cohorts = "";

fetch(usersJson)
.then (Response => Response.json())
.then(data => {
    console.log(data);
    document.getElementsByTagName("#alumnas")
    renderUsers(data)
})

const renderUsers = data => {
    
    //document.getElementsByTagName("#alumnas")
const render = data.forEach(element => {
    return console.log += `<p>${element.name}</p>`
});
return render;    
}