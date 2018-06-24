Promise.all ([
        fetch("../../data/cohorts/lim-2018-03-pre-core-pw/users.json"),
        fetch("../../data/cohorts.json"),
        fetch("../../data/cohorts/lim-2018-03-pre-core-pw/progress.json")
    ]).then((Responses) => {
        return Promise.all(Responses.map((Response) => {
            return Response.json();
    }));
    }  
    ).then (ResponseJsons) 
   ResponseJsons.array.forEach(element => {
       console.log(element)
   });     
      
   
    
  
 
/*for (let i=0; i < alumnas.lenght; ++i){
    console.log(alumnas);
}})*/
/*alumnas = ResponseJsons => {
    const render = alumnas.forEach(element => {
       `${element.name}`
       console.log(render);  
    });   
   } 
)*/