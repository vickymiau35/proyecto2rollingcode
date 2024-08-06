class PaqueteTurismo {
    constructor(nombre,categoria,descripcion,duracion,salida,regreso,alojamiento,imagen,oferta,precio,stock){
        // this.id = crypto.randomUUID();
        // this.codigo=Date.now();
        this.id = paquetes.at(-1).id + 1
        this.nombre = nombre
        this.categoria = categoria
        this.descripcion = descripcion
        this.duracion = duracion
        this.fecha_de_salida = salida
        this.fecha_de_regreso = regreso
        this.alojamiento = alojamiento
        this.imagen = imagen
        this.oferta = oferta
        this.precio = precio
        this.stock = stock
    }
}
let paquetes = [
    {
        id: 1,
        nombre:"Arraial Do Cabo",
        categoria: "Playas",
        descripcion:"Montañas verdes enmarcan playas de arena blanca,aguas cristalinas y un pueblo pesquero  que potencian para una vida tranquila.",
        duracion:"7 noches",
        fecha_de_salida: "2024-06-20",
        fecha_de_regreso: "2024-06-27",
        alojamiento: "Anjos do Mar Suítes",
        imagen: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/97/41/d5.jpg",
        oferta: false,
        precio: "$973.360 pesos",
        stock: 10
    },
    {
        id: 2,
        nombre:"Tokio",
        categoria: "Grandes Ciudades",
        descripcion:"Con rascacielos futuristas, su ambiente gastronómico incomparable y su vida nocturna salvaje,es una descarga de pura adrenalina.",
        duracion:"7 noches",
        fecha_de_salida: "2024-12-20",
        fecha_de_regreso: "2024-12-27",
        alojamiento: "Aman Tokio",
        imagen: "https://viajes.nationalgeographic.com.es/medio/2021/01/26/templo-de-asakusa_ec512f37_1249x840.jpg",
        oferta: true,
        precio: "$2.453.360 pesos",
        stock: 11
    },
    {
        id: 3,
        nombre:"Villa Traful",
        categoria: "Bosques y Montañas",
        descripcion:"Rodeada de majestuosos bosques, lagos de aguas cristalinas y montañas imponentes, se encuentra Villa Traful, un tesoro escondido",
        duracion:"10 noches",
        fecha_de_salida: "2025-01-01",
        fecha_de_regreso: "2025-01-10",
        alojamiento: "Calfulco Wine Hotel & Spa",
        imagen: "https://media.lacapital.com.ar/p/376fc307d9a1161ff3bc7cd7d68d06da/adjuntos/203/imagenes/101/118/0101118628/642x0/smart/nota-turismopng.png",
        oferta:true,
        precio: "$458.390 pesos",
        stock: 7
    },
    {
        id: 4,
        nombre:"Nueva York",
        categoria: "Grandes Ciudades",
        descripcion:"Los edificios más famosos,los museos más grandes y las mejores pizzas: Nueva York es una ciudad de superlativos y cumple con cada uno de ellos.",
        duracion:"10 noches",
        fecha_de_salida: "2025-05-15",
        fecha_de_regreso: "2025-05-25",
        alojamiento: "Margaritaville Resort Times Square",
        imagen: "https://viajes.nationalgeographic.com.es/medio/2023/10/18/nueva-york_4366d94e_538811669_231018102005_800x800.jpg",
        oferta:true,
        precio: "$953.385 pesos",
        stock: 8
    },
    {
        id: 5,
        nombre:"Islas Maldivas",
        categoria: "Playas",
        descripcion:"Conocido por sus hermosas playas de arena blanca y villas vacacionales de lujo y por arrecifes de coral que albergan  una increible fauna marina y tesoros submarinos.",
        duracion:"10 noches",
        fecha_de_salida: "2025-02-15",
        fecha_de_regreso: "2025-02-25",
        alojamiento: "Hotel Riu Palace Maldivas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFn1oQY9t7w6wWe2vyY7Wme5Mg7S9mk0J4A&s",
        oferta:true,
        precio: "$5.453.370 pesos",
        stock: 15
    },
    {
        id: 6,
        nombre:"París",
        categoria: "Grandes Ciudades",
        descripcion:"Tiene fama de ser la escapada romántica. Sus grandes edificios de piedra y hierro forjado, las aceras con acogedores cafés y las curvas de la ribera del Sena son cinematográficos.",
        duracion:"10 noches",
        fecha_de_salida: "2025-09-06",
        fecha_de_regreso: "2025-09-16",
        alojamiento: "Hôtel George-V",
        imagen: "https://media.staticontent.com/media/pictures/01512cb2-8e58-47ca-addf-c8aadbfcde82",
        oferta: false,
        precio: "$1.233.340 pesos",
        stock: 10
    },
]
//verifico si no hay nada en el local storage entonces agrego el array paquetes
cargarProductosEnLocalStorage()

function cargarProductosEnLocalStorage (){
    if (!localStorage.getItem('productos')) {
    localStorage.setItem('productos', JSON.stringify(paquetes));
}
}
let altaProductoValido = true;
const myModal = new bootstrap.Modal(document.getElementById("modalAdd"));
const myModalUpdate = new bootstrap.Modal(document.getElementById("modalUpdate"));
let idProducto = null;
let arrayProductos = JSON.parse(localStorage.getItem("productos"));

//variables para paginacion 
let limite = 5
let desde = 0
// let paginas = arrayProductos.length / limite
let paginas = Math.ceil(arrayProductos.length / limite);
let paginaActiva = 1

let arregloPaginas = arrayProductos.slice(desde,limite)
//crear tabla de productos 

let categorias = ["Playas", "Bosques y Montañas", "Grandes Ciudades"];

let duracionDelViaje = ["7 noches", "10 noches"]


const cargarProductos = ()=>{
    let cuerpoTabla = document.querySelector("#cuerpo-tabla");
    cuerpoTabla.innerHTML = "";
    arregloPaginas.map((producto)=>{
        const filas = document.createElement("tr")
        filas.setAttribute('key',producto.id)
        const celdas = `<td>${producto.id}</td>
        <td>${producto.nombre}</td>
        <td>${producto.categoria}</td>
        <td>${producto.stock}</td>
        <td class="d-flex flex-column flex-md-row align-items-center justify-content-end">
            <button class="btn btn-primary btn-sm my-2 my-md-0 me-md-2 " data-bs-toggle="modal" data-bs-target="#modalUpdate" onclick = "cargarFormulario(${producto.id})">
            <i class="fa fa-pencil" aria-hidden="true"></i>
            </button>
            <button class="btn btn-danger btn-sm my-2 my-md-0" onclick="borrarRegistro(${producto.id})">
            <i class="fa fa-trash-o" aria-hidden="true"></i>
            </button>
        </td>`
        filas.innerHTML = celdas
        cuerpoTabla.append(filas)
    });
    cargarItemPaginacion()
}

const cargarItemPaginacion = ()=>{
    document.querySelector("#items").innerHTML = ""
    for (let i = 0; i < paginas; i++) {
        const item = document.createElement("li")
        item.classList = `page-item ${paginaActiva == i+1 ? "active" : ""}`
        const enlace = `<button class="page-link bg-info" onclick ="pasarPagina(${i})">${i+1}</button>`
        item.innerHTML = enlace
        document.querySelector("#items").append(item)
    }

}

const modificarArregloProducto = ()=>{
    
    arregloPaginas = arrayProductos.slice(desde, desde + limite);
    cargarProductos()
}
const pasarPagina = (pagina)=>{
    paginaActiva = pagina + 1
    desde = limite * pagina
    if (desde <= arrayProductos.length) {
        modificarArregloProducto()
    }
}

const paginaSiguiente = () => {
    if (paginaActiva < paginas) {
        // desde += 5
        desde += limite;
        paginaActiva++
        modificarArregloProducto()
    }
}

const paginaPrevia = () => {
    if (desde > 0) {
        paginaActiva--
        // desde-=5
        desde -= limite;
        modificarArregloProducto()
    }
}

const actualizarPaginacion = () => {
    paginas = Math.ceil(arrayProductos.length / limite);
    cargarItemPaginacion(); 
};


cargarProductos()

//agregar productos 
let nombre = document.querySelector("#nombre")
let listaCategorias = document.getElementById("categoria")
let descripcion = document.querySelector("#descripcion")
let listaDuracionDelViaje = document.getElementById("duracion")
let fechaDeSalida = document.querySelector("#fecha_de_salida")
let fechaDeRegreso = document.querySelector("#fecha_de_regreso")
let alojamiento = document.querySelector("#alojamiento")
let imagen = document.querySelector("#imagen")
let oferta = document.querySelector("#oferta")
let precio = document.querySelector("#precio")
let stock = document.querySelector("#stock")

categorias.forEach((item) => {
    let option = document.createElement("option");
    option.value = item;
    option.innerText = item;
    listaCategorias.append(option);
});


duracionDelViaje.forEach((item) => {
    let option = document.createElement("option");
    option.value = item;
    option.innerText = item;
    listaDuracionDelViaje.append(option);
});
console.log(listaCategorias,listaDuracionDelViaje);

const agregarProducto = (event)=>{
    event.preventDefault()
    if (
        nombre.value.length > 0 && 
        descripcion.value.length > 0 &&
        fechaDeSalida.value &&
        fechaDeRegreso.value &&
        alojamiento.value.length > 0 && 
        imagen.value.length > 0 && 
        precio.value.length > 0 &&
        stock.value > 0 
    ) {
       altaProductoValido = true; 
    }else{
        altaProductoValido = false;
    }

    if (altaProductoValido) {
        let nuevoProducto = new PaqueteTurismo (
            nombre.value,
            listaCategorias.value,
            descripcion.value,
            listaDuracionDelViaje.value,
            fechaDeSalida.value,
            fechaDeRegreso.value,
            alojamiento.value,
            imagen.value,
            oferta.checked,
            precio.value,
            stock.value
        );
        arrayProductos.push(nuevoProducto)
        localStorage.setItem('productos', JSON.stringify(arrayProductos));
        // paginaActiva = Math.min(paginaActiva, Math.ceil(arrayProductos.length / limite));
        paginas = Math.ceil(arrayProductos.length / limite); 
        paginaActiva = paginas;
        // cargarProductos()
        cargarProductos()
        document.querySelector("#formulario-producto").reset();
        myModal.hide()
    }else {
    alert("Por favor, complete todos los campos obligatorios que están con *.");
  }
}
if (document.querySelector("#formulario-producto")) {
    document
      .querySelector("#formulario-producto")
      .addEventListener("submit", agregarProducto);
  }

//modificar productos

const cargarFormulario = (id) => {
    
    idProducto = arrayProductos.findIndex((item) => item.id === id);
    console.log(arrayProductos[idProducto]);
    let formulario = document.querySelector("#formulario-actualizado");
    console.log(formulario);
    Array.from(formulario.elements).forEach((campo) => {
        
        if (campo.type === "checkbox") {
          campo.checked = arrayProductos[idProducto][campo.id];
        } else {
          campo.value = arrayProductos[idProducto][campo.id];

        }
    });
};

//actualizar los productos
const actualizarPaquete = (event) =>{
    event.preventDefault()
    let formulario = document.querySelector("#formulario-actualizado");
    Array.from(formulario.elements).forEach((campo) => {
        //vacuna
        if (campo.type === "checkbox") {
          campo.checked = arrayProductos[idProducto][campo.id];
        } else {
          campo.value = arrayProductos[idProducto][campo.id];

        }
    });
    // if (idProducto !== -1) {
    //     let formulario = document.querySelector("#formulario-actualizado");
    //     Array.from(formulario.elements).forEach((campo) => {
    //         // Verificación para asegurar que el campo tiene un ID y el producto tiene la propiedad correspondiente
    //         if (campo.id && arrayProductos[idProducto][campo.id] !== undefined) {
    //             if (campo.type === "checkbox") {
    //                 arrayProductos[idProducto][campo.id] = campo.checked;
    //               } else {
    //                 arrayProductos[idProducto][campo.id] = campo.value;
    //               }
    //         }
    //     });
    // } 
    localStorage.setItem('productos', JSON.stringify(arrayProductos));
    cargarProductos()
    myModalUpdate.hide()
    formulario.reset();
}
//borrar productos 
const borrarRegistro = (id) => {
    let index = arrayProductos.findIndex((item) => item.id === id);
  
    if (index >= 0) {
      let validar = confirm(
        `Está seguro que quiere eliminar el paquete turístico  ${arrayProductos[index].nombre}`
      );
      if (validar) {
        arrayProductos.splice(index, 1);
        localStorage.setItem("productos", JSON.stringify(arrayProductos));
        paginas = Math.ceil(arrayProductos.length / limite);
        paginaActiva = Math.min(paginaActiva, Math.ceil(arrayProductos.length / limite)); 
        // cargarProductos();
        modificarArregloProducto();
      }
    }
  };
