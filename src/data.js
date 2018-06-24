
/*window.computeUsersStats = {

computeUsersStats: (users, progress, courses) => {

    for (let i = 0; i < users.lenght; i++) {
        let usersId = users[i].id;
        let UsersProgress = progress[usersId];
    if ( JSON.stringify(UsersProgress) === "{}"){   
        users[i] = {
            users[i].push,
                stats = { 
                percent = 0,
                reads = 0,
                total = 0,
                completed = 0,
                }
            }
/*window.all = {

todillo: (respuesta) => {
    const users = "../../data/cohorts/lim-2018-03-pre-core-pw/users.json"
    const cohorts = "../../data/cohorts.json"
    const progress = "../../data/cohorts/lim-2018-03-pre-core-pw/progress.json"

 fetch(users)
 .then(answ => answ.json())
 .then(info => {
     renderUsers(info)
 })

 fetch(cohorts)
 .then(answ => answ.json())
 .then(info => {
     renderCohorts(info)
 })

 fetch(progress)
 .then(answ => answ.json())
 .then(info => {
     renderProgress(info)
 })

 const renderUsers = info => {
     return new promise (info)
 }
 const renderCohorts = info => {
     return new promise (info)
 }
 const renderProgress = info => {
     return new promise (info)
 }

promise.all([renderUsers, renderCohorts, renderProgress])
  .then(respuesta) //=> console.log(respuesta))
return console.log(respuesta);
}

}*/
   const computeUsersStats= Promise.all([   //Ejecuta todas las llamadas de manera paralela
        fetch("../data/cohorts/cohorts.json"),
        fetch("../data/cohorts/lim-2018-03-pre-core-pw/progress.json"),
        fetch("../data/cohorts/lim-2018-03-pre-core-pw/users.json")
        
    ]).then(
        (responses)=>{   //Responde a todas las promesas
            return Promise.all(responses.map((response)=>{
               return response.json();                
            }));                        
        }
    }}*/
    function mostrar(id){
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
    