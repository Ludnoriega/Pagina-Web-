let alumno = [["nl45485190@gmail.com", "45485190"],
              ["ab46453515@gmail.com", "46453515"]];

let admin = [["ludnoriega@gmail.com", "mfalla"],
             ["anabazan@gmail.com", "fallam"]];




function login(){
    var user, contra, cargo;

    user = document.getElementById("usuario").value;
    contra = document.getElementById("contrasena").value;

    for(let i=0; i<alumno.length; i++){
        for(let j=0; j<alumno.length; j++){
            if(user==alumno[i][j] && contra==alumno[i][j]){
                alert("ALUMNO");
                cargo = alumnos;
                return cargo;
            }
        }
    }
    for(let j=0; j<admin.length; j++){
        for(let i=0; i<admin.length; i++){
            if (user==admin[j][i] && contra==admin[j][i]){
                alert("ADMINISTRADOR");
                cargo=administrador;
                return cargo;
            }
        }
    }
}

function Clear(){
    document.getElementById("usuario").value = "";
    document.getElementById("contrasena").value = "";
}
const boton = document.querySelector("enviar");
boton.addEventListener("click", function(){
    var verificar = login();
    if(verificar==alumnos){
        window.location.href="E:\FAT\trabajo con ana\ALUMNO\index_alumno.html";
    }
    if(verificar==administrador){
        window.location.href="E:\FAT\trabajo con ana\ADMINISTRADOR\index_admin.html";
    }
    else{
        alert("USUARIO Y/O CONTRASEÑA INCORRECTOS");
        Clear();
    }
});