let productos = [];

fetch("./JS/products.json")
    .then(response => response.json())
    .then(data =>{
        productos = data
        cargarProductos(productos);
    })


const contenedorProductos = document.querySelector("#contenedor-productos")

const botonesCategorias = document.querySelectorAll(".boton-categoria")
const tituloPrincipal = document.querySelector("#titulo-principal")
let botonesAgregar = document.querySelectorAll(".producto-agregar")
const numerito = document.querySelector("#numerito")


// const contenedorProductos = document.querySelector(".contenedor-productos") //ACORDARME QUE SIEMPRE HAY QUE PONER EL PUNTO CUANDO SE LO LLAMA.


function cargarProductos(productosElegidos) {
    contenedorProductos.innerHTML = ""; 

    productosElegidos.forEach(producto => {

        let div = document.createElement("div")  //div contenedor de cada PRODUCTO.
        div.classList.add("producto")
        div.innerHTML = `
                     <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                        <div class="productos-detalles">
                            <h3 class="producto-titulo">${producto.titulo}</h3>
                            <p class="producto-precio">$${producto.precio}</p>
                            <button class="producto-agregar" id= "${producto.id}">Agregar</button>
                         </div>    
        `
        
    contenedorProductos.append(div);
    
    })
        actualizarBotonesAgregar()
}




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

    Toastify({
        text: "Seleccionaste este producto",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
          borderRadius: "1.5rem"
        },
        
        onClick: function(){} // Callback after click
      }).showToast();
    
    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);


    if(productosEnElCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnElCarrito.findIndex(producto => producto.id === idBoton);
        productosEnElCarrito[index].cantidad++;
    }else {
        productoAgregado.cantidad = 1;
        productosEnElCarrito.push(productoAgregado)
   }
   localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnElCarrito))


actualizarNumerito()

}

 //localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnElCarrito))





function actualizarNumerito() {
     let nuevoNumerito = productosEnElCarrito.reduce((acc,producto) => acc + producto.cantidad, 0)
    numerito.innerText  = nuevoNumerito

    console.log(numerito) 

}


