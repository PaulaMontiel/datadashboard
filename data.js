/*
window.computeUsersStats = {

computeUsersStats: (users, progress, courses) => {

    for (let i = 0; i < users.lenght; i++) {
        let usersId = users[i].id;
        let progress = progress[usersId];
        users[i] = {
            ...users[i],
              stats {[
                percent = 0;
                reads = 0;
                total = 0;
                completed = 0;

            }
        }
    }

 /*const renderUsers = info => {
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

}
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
    ).then((responseJsons)=>{ //Arreglo de respuestas en json
         // Código que ocupa los jsons...
         
    }).catch(
        (error)=>{ // Al menos una llamada falló

        }
    );
console.log(computeUsersStats);*/
