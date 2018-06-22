
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
    ).then((responseJsons)=>{ //Arreglo de respuestas en json
         /*
         * Código que ocupa los jsons...
         */
    }).catch(
        (error)=>{ // Al menos una llamada falló

        }
    );
console.log(computeUsersStats);
