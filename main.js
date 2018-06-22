function btnSedes() {
    document.getElementById("bg").style.display = "none";
    document.getElementById("tabla").style.visibility = "visible";
    fetch("../../data/cohorts/lim-2018-03-pre-core-pw/users.json")
.then (Response => Response.json())
.then(data => {
    //console.log(data);
    tabla1(data)
})
 
function tabla1(data){
    //console.log(data)
    document.getElementById("contenido").innerHTML = ""
    for(let valor of data){
       // console.log(valor)
       document.getElementById("contenido").innerHTML += `
       
       <tr>
            <th scope="row">${valor.name}</th>
            <td>${valor.id}</td>
            <td>${valor.signupCohort}</td>
            <td>${valor.timezone}</td>
          </tr>
       `
    }
}
}
function btnAlumnas() {
/*    fetch("../../data/cohorts.json")
.then (Response => Response.json())
.then(data => {
    console.log(data);
    tabla1(data)
})*/
const data = window.all.todillo(respuesta);
 document.getElementsByTagName("a")[1] = data;
tabla1(data => {
    //console.log(data)
    document.getElementById("contenido").innerHTML = ""
    for(let valor of data){
       // console.log(valor)
       document.getElementById("contenido").innerHTML += `
       
       <tr>
            <th scope="row">${valor.name}</th>
            <td>${valor.id}</td>
            <td>${valor.signupCohort}</td>
            <td>${valor.timezone}</td>
          </tr>
       `
    }
})
}

function btnAvances() {
    fetch("../../data/cohorts/lim-2018-03-pre-core-pw/progress.json")
    .then (Response => Response.json())
    .then(data => {
        console.log(data);
    })   
}

/*const usersJson = 
let users = "";
const cohortsJson = "../../data/cohorts.json"
let cohorts = "";
const progressJson= "../../data/cohorts/lim-2018-03-pre-core-pw/progress.json"
let progress = "";*/

