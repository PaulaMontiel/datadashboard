function btnSedes() {
    fetch("../../data/cohorts/lim-2018-03-pre-core-pw/users.json")
.then (Response => Response.json())
.then(data => {
    console.log(data);
    tabla1(data)
})
} 

function tabla1(data){
    console.log(data)
}

function btnAlumnas() {
    fetch("../../data/cohorts.json")
.then (Response => Response.json())
.then(data => {
    console.log(data);
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

