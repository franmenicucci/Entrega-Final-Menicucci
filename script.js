const productos = [
    {
        id: "cafe-01",
        titulo: "Napoli",
        imagen: "./Imagenes/cafe/01.jpg",
        categoria:  {
            nombre: "Cafe",
            id: "cafe"
        },
        precio: 457
    
    },
    {
        id: "cafe-02",
        titulo: "Tirrenia",
        imagen: "./Imagenes/cafe/02.jpg",
        categoria:  {
            nombre: "Cafe",
            id: "cafe"
        },
        precio: 498
    
    },
    {
        id: "cafe-03",
        titulo: "Firenze",
        imagen: "./Imagenes/cafe/03.jpg",
        categoria:  {
            nombre: "Cafe",
            id: "cafe"
        },
        precio: 388
    
    },
    {
        id: "cafe-04",
        titulo: "Venezia",
        imagen: "./Imagenes/cafe/04.jpg",
        categoria:  {
            nombre: "Cafe",
            id: "cafe"
        },
        precio: 375
    
    },
    {
        id: "cafe-05",
        titulo: "Cagliari",
        imagen: "./Imagenes/cafe/05.jpg",
        categoria:  {
            nombre: "Cafe",
            id: "cafe"
        },
        precio: 457
    
    },
    {
        id: "cafe-06",
        titulo: "Pisa",
        imagen: "./Imagenes/cafe/06.jpg",
        categoria:  {
            nombre: "Cafe",
            id: "cafe"
        },
        precio: 420
    
    },
    {
        id: "cafe-07",
        titulo: "Genoa",
        imagen: "./Imagenes/cafe/07.jpg",
        categoria:  {
            nombre: "Cafe",
            id: "cafe"
        },
        precio: 457
    
    },
    {
        id: "cafe-08",
        titulo: "Roma",
        imagen: "./Imagenes/cafe/08.jpg",
        categoria:  {
            nombre: "Cafe",
            id: "cafe"
        },
        precio: 478
    
    },
    {
        id: "cafe-09",
        titulo: "Milan",
        imagen: "./Imagenes/cafe/09.jpg",
        categoria:  {
            nombre: "Cafe",
            id: "cafe"
        },
        precio: 465
    
    },
    {
        id: "cafe-10",
        titulo: "Lecce",
        imagen: "./Imagenes/cafe/10.jpg",
        categoria:  {
            nombre: "Cafe",
            id: "cafe"
        },
        precio: 317
    
    },
   
   //MAQUINAS DE CAFE
   
    {
        id: "maquina-01",
        titulo: "Perugia",
        imagen: "./Imagenes/maquinas/01.jpg",
        categoria:  {
            nombre: "Maquinas",
            id: "maquinas"
        },
        precio: 120000
    
    },
    {
        id: "maquina-02",
        titulo: "Mantova",
        imagen: "./Imagenes/maquinas/02.jpg",
        categoria:  {
            nombre: "Maquinas",
            id: "maquinas"
        },
        precio: 125000
    
    },
    {
        id: "maquina-03",
        titulo: "Livorno",
        imagen: "./Imagenes/maquinas/03.jpg",
        categoria:  {
            nombre: "Maquinas",
            id: "maquinas"
        },
        precio: 120000
    
    },
    {
        id: "maquina-04",
        titulo: "Rimini",
        imagen: "./Imagenes/maquinas/04.jpg",
        categoria:  {
            nombre: "Maquinas",
            id: "maquinas"
        },
        precio: 130000
    
    },
   
   
   //ACCESORIOS PARA CAFE
   
    {
        id: "accesorio-01",
        titulo: "Cubo Aesthetic",
        imagen: "./Imagenes/accesorios/01.jpg",
        categoria:  {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 17000
    
    },
    {
        id: "accesorio-02",
        titulo: "Cucharas Lungo",
        imagen: "./Imagenes/accesorios/02.jpg",
        categoria:  {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 13000
    
    },
    {
        id: "accesorio-03",
        titulo: "Tazas Origin",
        imagen: "./Imagenes/accesorios/03.jpg",
        categoria:  {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio: 19000
    
    },
    {
        id: "accesorio-04",
        titulo: "Tazas View Mug",
        imagen: "./Imagenes/accesorios/04.jpg",
        categoria:  {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio:12000
    
    },
    {
        id: "accesorio-05",
        titulo: "Bolsa Recicladora",
        imagen: "./Imagenes/accesorios/05.jpg",
        categoria:  {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio:11000
    
    },
    {
        id: "accesorio-06",
        titulo: "Tazas Espresso",
        imagen: "./Imagenes/accesorios/06.jpg",
        categoria:  {
            nombre: "Accesorios",
            id: "accesorios"
        },
        precio:9000
    
    },

]


const contenedorProductos = document.querySelector("#contenedor-productos")
console.log(contenedorProductos)

const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito")


// const contenedorProductos = document.querySelector(".contenedor-productos") //ACORDARME QUE SIEMPRE HAY QUE PONER EL PUNTO CUANDO SE LO LLAMA.

console.log(contenedorProductos)
function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = ""; 

    productosElegidos.forEach(producto => {

        let div = document.createElement("div")  //div contenedor de cada PRODUCTO.
        div.classList.add("producto")
        div.innerHTML = `
                     <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="productos-detalles">
                            <h3 class="producto-titulo">${producto.titulo}</h3>
                            <p class="producto-precio">$${producto.precio}7</p>
                            <button class="producto-agregar" id= "${producto.id}">Agregar</button>
                         </div>    
        `
        
    contenedorProductos.append(div);
    
    })
        actualizarBotonesAgregar()
}

cargarProductos(productos);


botonesCategorias.forEach(boton => {
    boton.addEventListener("click",(e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos"){
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);
            tituloPrincipal.innerText = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productosBoton)
           
    
        } else {
            tituloPrincipal.innerText = "Todos los productos"
            cargarProductos(productos)
        }
       
    })
    

})


function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar")

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito)
    })
}



const productosEnElCarrito = [];




function agregarAlCarrito(e) {
    
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);


    if(productosEnElCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnElCarrito.findIndex(producto => producto.id === idBoton);
        productosEnElCarrito[index].cantidad++;
    }else {
    productoAgregado.cantidad = 1;
    productosEnElCarrito.push(productoAgregado)
   }

actualizarNumerito()

}

localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnElCarrito))





function actualizarNumerito() {
     let nuevoNumerito = productosEnElCarrito.reduce((acc,producto) => acc + producto.cantidad, 0)
    numerito.innerText  = nuevoNumerito

    console.log(numerito) 

}


