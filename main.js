    Promise.all ([
        fetch("../../data/cohorts/lim-2018-03-pre-core-pw/users.json"),
        fetch("../../data/cohorts.json"),
        fetch("../../data/cohorts/lim-2018-03-pre-core-pw/progress.json")
    ]).then((Responses) => {
        return Promise.all(Responses.map((Response) => {
            return Response.json();
    }));
    }  
    ).then((ResponseJsons) => {
      console.log(ResponseJsons);
    })
    
 /*Promise.all([   //Ejecuta todas las llamadas de manera paralela
    fetch("../../data/cohorts.json"),
    fetch("../data/cohorts/lim-2018-03-pre-core-pw/progress.json"),
    fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json")
    
])
.then((responses) =>{   //Responde a todas las promesas
        return Promise.all(responses.map((response)=>{
           return (response.json());                
        }));                        
    })
    .then(responseJsons) => { //Arreglo de respuestas en json
    console.log(responseJsonss)
    }
    
    /*
     * Código que ocupa los jsons...
     */



/*function mostrar(id){
    if(id=='bg'){
        document.getElementById('bg').style.display = "block";
        document.getElementById('bg2').style.display = "none";
        document.getElementById('bg3').style.display = "none";
        document.getElementById('bg4').style.display = "none";
    }else if(id=='bg2'){
        document.getElementById('bg').style.display = "none";
        document.getElementById('bg2').style.display = "block";
        document.getElementById('bg3').style.display = "none";
        document.getElementById('bg4').style.display = "none";
    }else if(id=='bg3'){
        document.getElementById('bg').style.display = "none";
        document.getElementById('bg2').style.display = "none";
        document.getElementById('bg3').style.display = "block";
        document.getElementById('bg4').style.display = "none";
    }else{
        document.getElementById('bg').style.display = "none";
        document.getElementById('bg2').style.display = "none";
        document.getElementById('bg3').style.display = "none";
        document.getElementById('bg4').style.display = "block";
    }
}
/*function btnSedes() {
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
/*const data = window.all.todillo(respuesta);
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
