let logueado = JSON.parse(localStorage.getItem('usuarito')) || null
    if(logueado.rol !== 'adminid') 
    {document.getElementById("admin").innerHTML= " "}