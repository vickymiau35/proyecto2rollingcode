class PaqueteTurismo {
    constructor(nombre,categoria,descripcion,duracion,salida,regreso,alojamiento,imagen,precio,stock){
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
        this.precio = precio
        this.stock = stock
    }
}

let paquetes = [
    {
        id: 1,
        nombre:"Arraial Do Cabo",
        categoria: "America del Sur",
        descripcion:"Montañas verdes enmarcan playas de arena blanca,aguas cristalinas y un pueblo pesquero  que potencian para una vida tranquila.",
        duracion:"7 días",
        fecha_de_salida: "2024-06-20",
        fecha_de_regreso: "2024-06-27",
        alojamiento: "Anjos do Mar Suítes",
        imagen: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0a/97/41/d5.jpg",

        precio: "$973.360 pesos",
        stock: 10
    },
    {
        id: 2,
        nombre:"Tokio",
        categoria: "Asia Oriental",
        descripcion:"Con rascacielos futuristas, su ambiente gastronómico incomparable y su vida nocturna salvaje,es una descarga de pura adrenalina.",
        duracion:"7 días",
        fecha_de_salida: "2024-12-20",
        fecha_de_regreso: "2024-12-27",
        alojamiento: "Aman Tokio",
        imagen: "https://viajes.nationalgeographic.com.es/medio/2021/01/26/templo-de-asakusa_ec512f37_1249x840.jpg",
        precio: "$2.453.360 pesos",
        stock: 11
    },
    {
        id: 3,
        nombre:"Villa Traful",
        categoria: "América del Sur",
        descripcion:"Rodeada de majestuosos bosques, lagos de aguas cristalinas y montañas imponentes, se encuentra Villa Traful, un tesoro escondido",
        duracion:"10 días",
        fecha_de_salida: "2025-01-01",
        fecha_de_regreso: "2025-01-10",
        alojamiento: "Calfulco Wine Hotel & Spa",
        imagen: "https://media.lacapital.com.ar/p/376fc307d9a1161ff3bc7cd7d68d06da/adjuntos/203/imagenes/101/118/0101118628/642x0/smart/nota-turismopng.png",
        precio: "$458.390 pesos",
        stock: 7
    },
    {
        id: 4,
        nombre:"Nueva York",
        categoria: "América del Norte",
        descripcion:"Los edificios más famosos,los museos más grandes y las mejores pizzas: Nueva York es una ciudad de superlativos y cumple con cada uno de ellos.",duracion:"7 días",
        duracion:"10 días",
        fecha_de_salida: "2025-05-15",
        fecha_de_regreso: "2025-05-25",
        alojamiento: "Margaritaville Resort Times Square",
        imagen: "https://viajes.nationalgeographic.com.es/medio/2023/10/18/nueva-york_4366d94e_538811669_231018102005_800x800.jpg",
        precio: "$953.385 pesos",
        stock: 8
    },
    {
        id: 5,
        nombre:"Islas Maldivas",
        categoria: "Asia del Sur",
        descripcion:"Conocido por sus hermosas playas de arena blanca y villas vacacionales de lujo y por arrecifes de coral que albergan  una increible fauna marina y tesoros submarinos.",
        duracion:"10 días",
        fecha_de_salida: "2025-02-15",
        fecha_de_regreso: "2025-02-25",
        alojamiento: "Hotel Riu Palace Maldivas",
        imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPFn1oQY9t7w6wWe2vyY7Wme5Mg7S9mk0J4A&s",
        precio: "$5.453.370 pesos",
        stock: 15
    },
    {
        id: 6,
        nombre:"París",
        categoria: "Europa",
        descripcion:"Tiene fama de ser la escapada romántica. Sus grandes edificios de piedra y hierro forjado, las aceras con acogedores cafés y las curvas de la ribera del Sena son cinematográficos.",
        duracion:"10 días",
        fecha_de_salida: "2025-09-06",
        fecha_de_regreso: "2025-09-16",
        alojamiento: "Hôtel George-V",
        imagen: "https://media.staticontent.com/media/pictures/01512cb2-8e58-47ca-addf-c8aadbfcde82",
        precio: "$1.233.340 pesos",
        stock: 10
    },
]
//verifico si no hay nada en el local storage entonces agrego el array paquetes
if (!localStorage.getItem('productos')) {
    localStorage.setItem('productos', JSON.stringify(paquetes));
}
let altaProductoValido = true;
const myModal = new bootstrap.Modal(document.getElementById("modalAdd"));
const MyModalUpdate = new bootstrap.Modal(document.getElementById("modalUpdate"));
let idProducto = null;
let arrayProductos = JSON.parse(localStorage.getItem("productos"))