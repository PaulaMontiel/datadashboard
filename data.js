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
    