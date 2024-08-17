// despues de traer los datos agrego:

let traerUsuario=JSON.parse(localStorage.getItem('datosUsuario')) || null;

const validarUsuario=()=>{
    if(traerUsuario?.rol!=='admin'){
        let alertar=`<div class="alert alert-danger" role="alert"><a href="/login.html"></a></div>`;
        document.querySelector("main").innerHTML=alertar;
    }
};

validarUsuario();