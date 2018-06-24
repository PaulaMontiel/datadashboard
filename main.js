Promise.all ([
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
        for (let i= 0; i < alumnas.length; ++i){
            let usersId = alumnas[i].id;
            console.log(usersId);
        } 
        })	
        
        
      
   
    
  
 
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