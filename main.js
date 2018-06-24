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
        for(let valor of alumnas){
            alumId = alumnas.id += alumnas.name; 
        let usersId = valor.name + " " + valor.id;//devuelve el nombre y el id juntos
        let usersProg = usersId += ResponseJsons[2]; //devuelve nombre, id y object de progress
        //console.log(usersProg)
        tabla(usersProg)

    }})
        function tabla(usersProg) {
            console.log(usersProg)
        }
     /*document.getElementById("contenido").innerHTML = ""
            for(let valor of usersProg){
                console.log(valor)
               document.getElementById("contenido").innerHTML += `
               
               <tr>
                    <th scope="row">${valor.name}</th>
                    <td>${valor.completedUnits} de 3 </td>
                    <td>${valor.signupCohort}</td>
                    <td>${valor.timezone}</td>
                  </tr>
              `
            }
        }    
         
    
    
       /* for (let i= 0; i < alumnas.length; ++i){
              alumnasIds = alumnas[i].id += ResponseJsons[2];
               tabla(alumnasIds)
              //console.log(alumnasIds);
        }})
         function tabla(alumnasIds) {
                console.log(alumnasIds)
         }/*document.getElementById("contenido").innerHTML = ""
                for(let valor of alumnasIds){
                  /*  console.log(valor)
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