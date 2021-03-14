
function handleLogin(){
    let loginCred ={
        username: "light",
        password: "yagami"
    }

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username === loginCred.username && password === loginCred.password){
        setTimeout(function(){
            window.location="josephus.html";
        }, 3000); 
        
        document.getElementById("logo").innerHTML = "";
        document.getElementById("logo").setAttribute("class", "fa fa-spinner fa-spin");
    }
    if(username !== loginCred.username || password !== loginCred.password){
        document.getElementById("loginLabel").innerHTML = "Incorrect Username or Passoword!";
        document.getElementById("loginLabel").style.fontSize = "1rem"
    }

    

}