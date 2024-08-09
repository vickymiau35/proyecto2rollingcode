function crearTarjeta(producto) {
    return `
        <div>
            <div class="card">
                <div class="card-img-container">
                    <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                    <div class="badge-container">
                        <i class="bi bi-luggage-fill"></i> 
                        <span>Paquete</span>
                    </div>
                </div>
                <div class="card-body">
                 <h4 class="card-title">${producto.nombre}</h4>
                 <p class="card-text fw-medium">${producto.duracion}</p>
                 <p class="card-text">Alojamiento : ${producto.alojamiento}</p>
                 <p class="card-text">${producto.precio}</p>
                 <a href="#" onclick="irViaje(${producto.id})">Ver más...</a>
                </div>
            </div>
        </div>
    `;
}

function llenarSeccionesTarjetas() {
    const secciones = {
        "Ofertas": document.getElementById('div-ofertas'),
        "Playas": document.getElementById('div-playa'),
        "Bosques y Montañas": document.getElementById('div-bosques'),
        "Grandes Ciudades": document.getElementById('div-ciudades')
    };
    const arrayProductos = JSON.parse(localStorage.getItem("productos")) || [];
    Object.values(secciones).forEach(div => {
        div.innerHTML = '';
    });
    arrayProductos.forEach(producto => {
        const tarjeta = crearTarjeta(producto);
        if (producto.oferta) {
            secciones["Ofertas"].innerHTML += tarjeta;
        } else {
            const seccion = secciones[producto.categoria];
            if (seccion) {
                seccion.innerHTML += tarjeta;
            }
        }
    });
}


function irViaje(id){
    location.href=`./pages/detalles.html?id=${id}`
}



document.addEventListener('DOMContentLoaded', llenarSeccionesTarjetas);
window.addEventListener('storage', (event) => {
    if (event.key === 'productos') {
        llenarSeccionesTarjetas();
    }
});