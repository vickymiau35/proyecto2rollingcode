let traerUsuario=JSON.parse(localStorage.getItem('datosUsuario')) || null
if(traerUsuario?.rol!=='admin'){document.getElementById("administrar").innerHTML="";}