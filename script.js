/* ==========================================
   DATOS DE PRUEBA
   ========================================== */

const productos = [

    /* =========================
       SIMPLES
       ========================= */

    {
        categoria: "SIMPLES",
        nombre: "HAMBURGUESA SIMPLE",
        precio: "35",
        imagen: "imagenes/hambuerguesa.png",

        ingredientes: [
            "PAN BURGER",
            "CARNE SIMPLE",
            "TOMATE Y LECHUGA",
            "QUESO",
            "SALSAS VARIAS",
            "SALSAS TOPICAS"
        ]
    },

    {
        categoria: "SIMPLES",
        nombre: "PANCHO CLÁSICO",
        precio: "25",
        imagen: "imagenes/pancho.png",

        ingredientes: [
            "PAN",
            "SALCHICHA",
            "TOMATE",
            "CEBOLLA",
            "PAPAS AL HILO",
            "SALSAS A ELECCIÓN"
        ]
    },

    {
        categoria: "SIMPLES",
        nombre: "PORCIÓN DE PIZZA",
        precio: "20",
        imagen: "imagenes/porcion_pizza.png",

        ingredientes: [
            "MASA",
            "SALSA DE TOMATE",
            "QUESO MOZZARELLA",
            "JAMÓN",
            "ORÉGANO",
            "ACEITUNAS"
        ]
    },


    /* =========================
       COMBOS
       ========================= */

    {
        categoria: "COMBOS",
        nombre: "COMBO PIZZA",
        precio: "55",
        imagen: "imagenes/pizza.png",

        ingredientes: [
            "PIZZA GRANDE",
            "QUESO MOZZARELLA",
            "SALSA DE TOMATE",
            "JAMÓN",
            "BEBIDA",
            "SALSAS A ELECCIÓN"
        ]
    },

    {
        categoria: "COMBOS",
        nombre: "POLLO EN CANASTA",
        precio: "60",
        imagen: "imagenes/pollo_en_canasta.png",

        ingredientes: [
            "POLLO FRITO",
            "PAPAS FRITAS",
            "ENSALADA",
            "PAN",
            "BEBIDA",
            "SALSAS A ELECCIÓN"
        ]
    },


    /* =========================
       BEBIDAS
       ========================= */

    {
        categoria: "BEBIDAS",
        nombre: "SALVIETTI",
        precio: "12",
        imagen: "imagenes/salvietti.png",

        ingredientes: [
            "BEBIDA GASEOSA",
            "500 ML",
            "BOTELLA",
            "FRÍA",
            "HIELO",
            "VASO"
        ]
    },

    {
        categoria: "BEBIDAS",
        nombre: "SIMBA",
        precio: "12",
        imagen: "imagenes/simba.png",

        ingredientes: [
            "BEBIDA GASEOSA",
            "500 ML",
            "BOTELLA",
            "FRÍA",
            "HIELO",
            "VASO"
        ]
    }

];


/* ==========================================
   BUSCAR ELEMENTOS DEL HTML
   ========================================== */

const leftBtn = document.getElementById("leftBtn");

const rightBtn = document.getElementById("rightBtn");

const botonesCategoria = document.querySelectorAll(".categoria");

const imagenProducto = document.querySelector(".imagen-producto");

const productoNombre = document.getElementById("producto-nombre");

const productoPrecio = document.getElementById("producto-precio");

const ficha = document.querySelector(".ficha-producto");


const ingredientes = [

    document.getElementById("ingrediente-1"),

    document.getElementById("ingrediente-2"),

    document.getElementById("ingrediente-3"),

    document.getElementById("ingrediente-4"),

    document.getElementById("ingrediente-5"),

    document.getElementById("ingrediente-6")

];


/* ==========================================
   COMPROBAR QUE TODO EXISTE
   ========================================== */

console.log("JavaScript funcionando");

console.log("Botón izquierdo:", leftBtn);

console.log("Botón derecho:", rightBtn);

console.log("Imagen:", imagenProducto);

console.log("Nombre:", productoNombre);

console.log("Precio:", productoPrecio);

console.log("Categorías:", botonesCategoria);


/* ==========================================
   VARIABLES
   ========================================== */

let categoriaActual = "SIMPLES";

let productosFiltrados = productos.filter(

    producto => producto.categoria === categoriaActual

);

let indiceActual = 0;


/* ==========================================
   MOSTRAR PRODUCTO
   ========================================== */

function mostrarProducto() {

    const producto = productosFiltrados[indiceActual];

    if (!producto) {

        console.error("No se encontró el producto.");

        return;

    }


    /* =========================
       CAMBIAR IMAGEN
       ========================= */

    imagenProducto.classList.remove("animar-imagen");

    void imagenProducto.offsetWidth;

    imagenProducto.src = producto.imagen;

    imagenProducto.classList.add("animar-imagen");


    /* =========================
       ANIMAR FICHA
       ========================= */

    ficha.classList.remove("animar-ficha");

    void ficha.offsetWidth;

    ficha.classList.add("animar-ficha");


    /* =========================
       CAMBIAR NOMBRE
       ========================= */

    productoNombre.textContent = producto.nombre;


    /* =========================
       CAMBIAR PRECIO
       ========================= */

    productoPrecio.textContent = producto.precio;


    /* =========================
       CAMBIAR INGREDIENTES
       ========================= */

    ingredientes.forEach((ingrediente, index) => {

        ingrediente.textContent = producto.ingredientes[index];

    });

}


/* ==========================================
   BOTÓN DERECHO
   ========================================== */

rightBtn.addEventListener("click", function () {

    indiceActual++;

    if (indiceActual >= productosFiltrados.length) {

        indiceActual = 0;

    }

    mostrarProducto();

});


/* ==========================================
   BOTÓN IZQUIERDO
   ========================================== */

leftBtn.addEventListener("click", function () {

    indiceActual--;

    if (indiceActual < 0) {

        indiceActual = productosFiltrados.length - 1;

    }

    mostrarProducto();

});


/* ==========================================
   BOTONES DE CATEGORÍA
   ========================================== */

botonesCategoria.forEach(function (boton) {

    boton.addEventListener("click", function () {

        categoriaActual = boton.textContent.trim();

        console.log("Categoría seleccionada:", categoriaActual);


        /* FILTRAR */

        productosFiltrados = productos.filter(

            producto => producto.categoria === categoriaActual

        );


        /* VOLVER AL PRIMER PRODUCTO */

        indiceActual = 0;


        /* CAMBIAR BOTÓN ACTIVO */

        botonesCategoria.forEach(function (btn) {

            btn.classList.remove("activa");

        });

        boton.classList.add("activa");


        /* MOSTRAR */

        mostrarProducto();

    });

});


/* ==========================================
   PRODUCTO INICIAL
   ========================================== */

mostrarProducto();