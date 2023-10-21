 carritoProductosEnElCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"))


const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector(".contenedor-carrito");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");

// Función para cargar los productos en el carrito
function cargarProductosCarrito() {
    if (carritoProductosEnElCarrito) {
        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoProductos.innerHTML = ""; // Limpiamos el contenido anterior

        carritoProductosEnElCarrito.forEach(producto => {
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                <img class="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Titulo</small>
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                    <p class="producto-precio">${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                    <p class="producto-precio">$${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                    <p class="producto-precio">$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" data-id="${producto.id}"> <i class="bi bi-trash2-fill"></i></button>
            `;
            contenedorCarritoProductos.append(div);
        });
        actualizarBotonesEliminar();
    } else {
        // console.log("carrito vacio");
    }
}

// Función para actualizar los botones "Eliminar" en el carrito
function actualizarBotonesEliminar() {
    const botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(e) {

    Toastify({
        text: "Eliminaste el producto",
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
    

    const idBoton = e.currentTarget.getAttribute("data-id");
    const index = carritoProductosEnElCarrito.findIndex(producto => producto.id === idBoton);

    if (index !== -1) {
        carritoProductosEnElCarrito.splice(index, 1);
        cargarProductosCarrito();
        localStorage.setItem("productos-en-carrito", JSON.stringify(carritoProductosEnElCarrito));
    }
}

cargarProductosCarrito();

actualizarTotal();



const botonVaciarCarrito = document.getElementById("carrito-acciones-vaciar");

botonVaciarCarrito.addEventListener("click", () => {

    Swal.fire({
        title: '¿Estas seguro de que queres vaciar el carrito?',
        icon: 'question',
        html:
          'Se borraran todos los productos del carrito',
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: 'Si',
        cancelButtonText: 'No'
      }).then((result) => {
        if (result.isConfirmed) {
            carritoProductosEnElCarrito.length = 0,
            localStorage.setItem("productos-en-carrito", JSON.stringify(carritoProductosEnElCarrito));
            cargarProductosCarrito();
        } 
      })
    carritoProductosEnElCarrito = [];

    // localStorage.setItem("productos-en-carrito", JSON.stringify(carritoProductosEnElCarrito));

    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoVacio.classList.remove("disabled");
    
    actualizarTotal();
});

// cargarProductosCarrito();
actualizarTotal();


function actualizarTotal() {
    const total = carritoProductosEnElCarrito.reduce((accumulator, producto) => {
        return accumulator + producto.precio * producto.cantidad;
    }, 0);

    const elementoTotal = document.getElementById("total");
    elementoTotal.textContent = `$${total}`;
}



const botonComprarAhora = document.querySelector(".carrito-acciones-comprar");
const mensajeCompraExitosa = document.getElementById("carrito-comprado");

botonComprarAhora.addEventListener("click", () => {
    mensajeCompraExitosa.classList.remove("disabled");

    contenedorCarritoProductos.classList.add("disabled");
    document.getElementById("total").textContent = "$0";

    carritoProductosEnElCarrito = [];
    localStorage.setItem("productos-en-carrito", JSON.stringify(carritoProductosEnElCarrito));
});

