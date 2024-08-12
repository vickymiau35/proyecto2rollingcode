const loginUsuarios=()=>{
    let usuarios= [
        {
            id:"mrtravel",
            correo:"mrtravel@gmail.com",
            contraseña:"MrTravel2024"
            ,rol:"admin"
        },
        {
            id:"traveler",
            correo:"traveler@gmail.com",
            contraseña:"Traveler2024",
            rol:"user"
        }
    ]
localStorage.setItem('usuarios',JSON.stringify(usuarios));
}
const logOut = () => {
    localStorage.removeItem('usuarito');
    let boton = document.querySelector("#modo-boton");
    boton.classList = "btn btn-danger btn-block";
    boton.innerText = "Iniciar sesión";
    boton.setAttribute("data-bs-toggle", "modal");
    boton.setAttribute("data-bs-target", "#modalLogin");
    actualizarEstadoPagina();
};
const loguearse = (event) => {
    event?.preventDefault();
    let usuarito = JSON.parse(localStorage.getItem('usuarito'));
    let boton = document.querySelector("#modo-boton");
    let modalLoginElement = document.querySelector("#modalLogin");
    let modalLoginInstance = bootstrap.Modal.getInstance(modalLoginElement);
    if (usuarito) {
        // Si el usuario ya está logueado
        boton.classList = "btn btn-success btn-block";
        boton.innerText = "Cerrar sesión";
        boton.removeAttribute("data-bs-toggle");
        boton.removeAttribute("data-bs-target");
        boton.addEventListener("click", logOut);
    } else if(event) {
        // Si el usuario no está logueado
        let logueados = JSON.parse(localStorage.getItem('usuarios')) || [];
        let correo = document.getElementById('correo').value;
        let contraseña = document.getElementById('contraseña').value;
        let validoDatos = logueados.find((logueado) => logueado.correo === correo && logueado.contraseña === contraseña);
        if (validoDatos) {
            usuarito = {
                id: validoDatos.id,
                correo: validoDatos.correo,
                rol: validoDatos.rol
            };
            localStorage.setItem('usuarito', JSON.stringify(usuarito));
            if (modalLoginInstance) {
                modalLoginInstance.hide();
              } else {
                console.error('No se pudo obtener la instancia de modalLogin');
              }
            boton.classList = "btn btn-success btn-block";
            boton.innerText = "Cerrar sesión";
            boton.removeAttribute("data-bs-toggle");
            boton.removeAttribute("data-bs-target");
            boton.addEventListener("click", logOut);
            actualizarEstadoPagina();
        } else {
            alert("Alguno de los datos es incorrecto");
        }
    }
};
document.getElementById("formulariologin").addEventListener("submit",loguearse);

const actualizarEstadoPagina = () => {
    let logueado = JSON.parse(localStorage.getItem('usuarito')) || null;
    let adminItem = document.getElementById("admin");
    if (adminItem) {
        if (logueado && logueado.rol === "admin") {
            adminItem.classList.remove("d-none"); // Mostrar el elemento
        } else {
            adminItem.classList.add("d-none"); // Ocultar el elemento
            let alertar= `<div class= "alert alert-danger" role:"alert">No es posible acceder.
            <a href="../sesion.html">Iniciar sesión nuevamente.</a></div>`
            document.querySelector('main').innerHTML=alertar;
        }
    }
};
window.addEventListener('pageshow', (event) => {
    actualizarEstadoPagina();
});





// const loginUsuarios=()=>{let usuarios= [ {id:"mrtravel",correo:"mrtravel@gmail.com",contraseña:"MrTravel2024",rol:"admin"}
//                                          {id:"traveler",correo:"traveler@gmail.com",contraseña:"Traveler2024",rol:"user"}
// ]}

// localStorage.setItem('usuarios',JSON.stringify(usuarios));

// let mail= document.getElementById('correo');
// let pass= document.getElementById('contraseña');

// const loguearse=(event)=>{event.preventDefault();
    
//     let logueados= JSON.parse(localStorage.getItem('usuarios')) || [];
//     let validoDatos= logueados.find((logueado)=>
//                                      logueado.correo===mail.value && 
//                                      logueado.contraseña===pass.value);
//         if (validoDatos){console.log(validoDatos)
//            let usuarito= {id:validoDatos.id, correo:validoDatos.correo,rol:validoDatos.rol}
//         localStorage.setItem('usuarito',JSON.stringify(usuarito))
//         location.assign("./index.html");
//         }else{alert("Alguno de los datos es incorrecto")}                              
// };
// const logOut=()=>{localStorage.removeItem("usuarito")};
// logOut();

// document.getElementById("formulariologin").addEventListener("submit",loguearse);