window.all = {

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

}