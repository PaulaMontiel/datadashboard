Promise.all([
    fetch("../../data/cohorts/lim-2018-03-pre-core-pw/users.json"),
    fetch("../../data/cohorts.json"),
    fetch("../../data/cohorts/lim-2018-03-pre-core-pw/progress.json")
]).then((Responses) => {
    return Promise.all(Responses.map((Response) => {
        return Response.json();
    }));
}
).then((ResponseJsons) => {	//tengo toda la informacion en responsejsons
    //console.log(ResponseJsons);
    let alumnas = ResponseJsons[0];//entramos al array de users
    //console.log(alumnas);
    for (let valor of alumnas) {
        alumId = alumnas.id += alumnas.name;
        let usersId = valor.name + " " + valor.id;//devuelve el nombre y el id juntos
        let usersProg = usersId += ResponseJsons[2]; //devuelve nombre, id y object de progress
        //console.log(usersProg)
        tabla(usersProg)

    }
})
function tabla(usersProg) {
    usersProg = JSON.stringify(usersProg);
    // console.log(usersProg);

document.getElementById("contenido").innerHTML = ""
for(let valor of usersProg){
    console.log(valor);
    
    document.getElementById("contenido").innerHTML += `
                
                <tr>
                     <th scope="row">${valor.name}</th>
                     <td>${valor.completedUnits} de 3 </td>
                     <td>${valor.signupCohort}</td>
                     <td>${valor.timezone}</td>
                   </tr>
            })
               
            
function mostrar(id) {
    if (id == 'bg') {
        document.getElementById('bg').style.display = "block";
        document.getElementById('bg2').style.display = "none";
        document.getElementById('bg3').style.display = "none";
        document.getElementById('bg4').style.display = "none";
    } else if (id == 'bg2') {
        document.getElementById('bg').style.display = "none";
        document.getElementById('bg2').style.display = "block";
        document.getElementById('bg3').style.display = "none";
        document.getElementById('bg4').style.display = "none";
    } else if (id == 'bg3') {
        document.getElementById('bg').style.display = "none";
        document.getElementById('bg2').style.display = "none";
        document.getElementById('bg3').style.display = "block";
        document.getElementById('bg4').style.display = "none";
    } else {
        document.getElementById('bg').style.display = "none";
        document.getElementById('bg2').style.display = "none";
        document.getElementById('bg3').style.display = "none";
        document.getElementById('bg4').style.display = "block";
    }
}}
=======
window.onload = function() {
    requiereCohorts();
};
  // llamamos los cohorts
async function requiereCohorts() {
    let cohorts = '';
    try {
      const jsonCohorts = await fetch('../data/cohorts.json');
      cohorts = await jsonCohorts.json();
    } catch (err) {
      alert('no se pudieron cargar los datos' + err);
    }
    inputChange(cohorts);
}
inputChange = (cohorts) => {
    // mostrar la lista de cohorts
    const cohortsId = cohorts.map(cohort => cohort.id);
    const cohortList = document.getElementById('cursos');
    cohortsId.forEach(function(item) {
      const option = document.createElement('option');
      option.innerText = item;
      cohortList.appendChild(option);
    });
    // Escuchar eventos del dom y llamar la funcion cada vez que se cambie el filtro
    document.getElementById('cursos').addEventListener('change', async function() {
        const e = document.getElementById("cursos");
        const selection = e.options[e.selectedIndex].text;
        const jsonUsers = await fetch('../data/cohorts/'+selection+'/users.json');
        const jsonProgress = await fetch('../data/cohorts/'+selection+'/progress.json');
        alumnas = await jsonUsers.json();
        progreso = await jsonProgress.json();
        /*console.log(progreso[userId]);*/
        poblarTabla(computeUsersStats(alumnas, progreso, cohorts));
    });

}
async function poblarTabla(users) {
    document.getElementById('students').innerText = '';

    // Variables de estadisticas de cohort en general
    let completitudTotalSum = 0, percentLecturasSum = 0,
    percentQuizzSum = 0, percentExercisesSum = 0; completitudTotalUser = 0;
  
    for (let i = 0; i < users.length; i++) {
        const userList = document.getElementById('students');
        const newStudent = document.createElement('div');
        newStudent.classList.add('col-md-12');

        // para que sea una linea gris y una blanca
        if (i % 2 === 0) {
            newStudent.classList.add('estudiante1');
        } else {
            newStudent.classList.add('estudiante2');
        }
        completitudTotalUser = Math.round((users[i].stats.exercises.percent + users[i].stats.reads.percent + users[i].stats.quizzes.percent) / 3);
        userList.appendChild(newStudent);
        createElement(newStudent, 'h4', users[i].name, 'col-md-2');
        createElement(newStudent, 'h4', completitudTotalUser + ' % ', 'col-md-2');
        createElement(newStudent, 'h4', users[i].stats.exercises.percent + ' % ', 'col-md-2');
        createElement(newStudent, 'h4', users[i].stats.quizzes.scoreAvg, 'col-md-2');
        createElement(newStudent, 'h4', users[i].stats.quizzes.percent + ' % ', 'col-md-2');
        createElement(newStudent, 'h4', users[i].stats.reads.percent + ' % ', 'col-md-2');
    }
    function createElement(parent, element, text, clase) {
        const newElement = document.createElement(element);
        if (text === users.name) {
          newElement.classList.add('col-12');
        }
        newElement.innerText = text;
        newElement.classList.add(clase);
        newElement.classList.add('center');
        newElement.classList.add('col-2');
        parent.appendChild(newElement);
    }
    completitudTotalSum += completitudTotalUser ;
    percentLecturasSum += users[i].stats.reads.percent;
    percentQuizzSum += users[i].stats.quizzes.percent;
    percentExercisesSum += users[i].stats.exercises.percent;
    
}
function mostrar(id){
    if(id=='bg'){
        document.getElementById('bg').style.display = "block";
        document.getElementById('bg2').style.display = "none";
    }else if(id=='bg2'){
        document.getElementById('bg').style.display = "none";
        document.getElementById('bg2').style.display = "block";
    }
}
