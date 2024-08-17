const loguearUsuarios=()=>{let datosUsuarios=[
    {id:"mrtravel", email:"mrtravel@gmail.com", contraseña:"MrTravel2024", rol:"admin"},
    {id:"traveler", email:"traveler@gmail.com", contraseña:"Traveler2024", rol:"user"}]}

localStorage.setItem('datosUsuarios',JSON.stringify(datosUsuarios))

let correo=document.getElementById('email');
let contraseña=document.getElementById('pass');

const iniciarSesion=(event)=>{event.preventDefault();
    let traerUsuarios=JSON.parse(localStorage.getItem('datosUsuarios')) || [];
    let validarDatos=traerUsuarios.find(
        (traerUsuario)=>traerUsuario.email===correo.value && traerUsuario.pass===contraseña.value)
    if(validarDatos)
        {console.log(validarDatos);
        let globalUser={id:validarDatos.id,email:validarDatos.email,contraseña:validarDatos.contraseña,rol:validarDatos.rol};
        localStorage.setItem('datosUsuario',JSON.stringify(datosUsuario))
        location.assign("./index.html")
        }else{
            alert("Alguno de los datos ingresados es incorrecto")
        }
}

const cerrarSesion=()=>{localStorage.removeItem("datosUsuario")};

cerrarSesion();

document.getElementById("formularioLogin").addEventListener("submit",iniciarSesion);