let carrito = []

// Realizo una funcion para crear un objeto para cada juego
function producto(nombre, precio, clasificación) {
    this.nombre = nombre
    this.precio = precio
    this.clasificación = clasificación
}
const producto1 = new producto("Monopoly", 18000, 8)
const producto2 = new producto("4 en linea", 2000, 5)
const producto3 = new producto("¿Ke sos?", 11000, 5)
const producto4 = new producto("Say My Name", 5000, 16)
const producto5 = new producto("Uno", 3000, 8)
const producto6 = new producto("Ajedrez", 10000, 8)

let juegos = [
    { nombre: "Monopoly", clasificación: "8", precio: 18000, jugadoresMin: "2", jugadoresMax: "6" },
    { nombre: "4 en linea", clasificación: "5", precio: 2000, jugadoresMin: "2", jugadoresMax: "2" },
    { nombre: "¿Ke sos?", clasificación: "5", precio: 11000, jugadoresMin: "2", jugadoresMax: "6" },
    { nombre: "Say My Name", clasificación: "16", precio: 5000, jugadoresMin: "4", jugadoresMax: "12" },
    { nombre: "Uno", clasificación: "8", precio: 3000, jugadoresMin: "2", jugadoresMax: "10" },
    { nombre: "Ajedrez", clasificación: "8", precio: 10000, jugadoresMin: "2", jugadoresMax: "2" }
]

// Pusheo los elementos al carrito al hacer click en el boton
let boton1 = document.getElementById("monopoly")
boton1.addEventListener("click", agregarM)
function agregarM() {
    carrito.push(producto1)
    // Mostrar cantidad de elementos en carritos en el botón del carrito
    let conteo = carrito.length
    botonConteo = document.querySelector("button").textContent = `${conteo}`
}

let boton2 = document.getElementById("4EnLinea")
boton2.addEventListener("click", agregar4)
function agregar4() {
    carrito.push(producto2)
    // Mostrar cantidad de elementos en carritos en el botón del carrito
    let conteo = carrito.length
    botonConteo = document.querySelector("button").textContent = `${conteo}`
}

let boton3 = document.getElementById("keSos")
boton3.addEventListener("click", agregarK)
function agregarK() {
    carrito.push(producto3)
    // Mostrar cantidad de elementos en carritos en el botón del carrito
    let conteo = carrito.length
    botonConteo = document.querySelector("button").textContent = `${conteo}`
}

let boton4 = document.getElementById("sayMyName")
boton4.addEventListener("click", agregarS)
function agregarS() {
    carrito.push(producto4)
    // Mostrar cantidad de elementos en carritos en el botón del carrito
    let conteo = carrito.length
    botonConteo = document.querySelector("button").textContent = `${conteo}`
}

let boton5 = document.getElementById("uno")
boton5.addEventListener("click", agregarU)
function agregarU() {
    carrito.push(producto5)
    // Mostrar cantidad de elementos en carritos en el botón del carrito
    let conteo = carrito.length
    botonConteo = document.querySelector("button").textContent = `${conteo}`
}

let boton6 = document.getElementById("ajedrez")
boton6.addEventListener("click", agregarA)
function agregarA() {
    carrito.push(producto6)
    // Mostrar cantidad de elementos en carritos en el botón del carrito
    let conteo = carrito.length
    botonConteo = document.querySelector("button").textContent = `${conteo}`
}

// Al hacer click en el carrito desplegar información sobre la compra
let botonCarrito = document.getElementById("botonCarrito")
botonCarrito.addEventListener("click", agregarBoton)
function agregarBoton() {

    // Guardar los elementos del carrito en el Local Storage
    localStorage.setItem("Carrito", nombres(carrito))

    // Mostrar los elementos del carrito:                                           
    function nombres(array) {
        let total = 0
        for (let i = 0; i < array.length; i++) {
            total += array[i].nombre;
        }
        return total;
    }

    let itemsCarrito = carrito.map((p) => {
        return `<li>${p.nombre}</li>`
    })

    // Sumar el precio total del carrito:
    function sumarPrecios(array) {
        let total = 0;
        for (let i = 0; i < array.length; i++) {
            total += array[i].precio
        }
        return total
    }

    const precioTotal = sumarPrecios(carrito);

    elementoCarrito = document.querySelector("aside")
    let textoCarrito = document.createElement("div")
    textoCarrito.innerHTML =
        `<p>${parsenName} usted tiene en el carrito ${carrito.length} ítem/ítems, los mismos son:</p>
        <ul> ${itemsCarrito.join(' ')}</ul>
        <p>El precio total es de $${precioTotal}</p>`
    elementoCarrito.appendChild(textoCarrito);
}


// PARA FILTRAR LOS JUEGOS POR EDADES                          
let opcion1 = document.getElementById("#opcion1")
const contenedor = document.querySelector(".bt1")
contenedor.addEventListener("click", () => {
    let primerTexto = document.createElement("div")
    primerTexto.innerHTML =
        `<h3 class="nombresCarrito">Flitrado de juegos entre 5 a 7 años:</h3> <br>
        <div class="elementoFiltrado">
        <div class="tarjetaFiltrada">                
        <h4>Juego: <span class="letra">4 en linea</span></h4>
        <p><span class="linea">Clasificación:</span> 5 años</p>
        <p><span class="linea">Precio:</span> $2000</p></div></div>
        <div class="elementoFiltrado">
        <div class="tarjetaFiltrada">                
        <h4>Juego: <span class="letra">¿Ke sos?</span></h4>
        <p><span class="linea">Clasificación:</span> 5 años</p>
        <p><span class="linea">Precio:</span> $11000</p></div></div>`
    document.body.appendChild(primerTexto)
})

let opcion2 = document.getElementById("#opcion2")
const contenedorB = document.querySelector(".bt2")
contenedorB.addEventListener("click", () => {
    let segundoTexto = document.createElement("div")
    segundoTexto.innerHTML =
        `<h3 class="nombresCarrito">Flitrado de juegos entre 8 a 15 años:</h3> <br>
        <div class="elementoFiltrado">
        <div class="tarjetaFiltrada">                
        <h4>Juego: <span class="letra">4 en linea</span></h4>
        <p><span class="linea">Clasificación:</span> 5 años</p>
        <p><span class="linea">Precio:</span> $2000</p></div></div>
        <div class="elementoFiltrado">
        <div class="tarjetaFiltrada">                
        <h4>Juego: <span class="letra">¿Ke sos?</span></h4>
        <p><span class="linea">Clasificación:</span> 5 años</p>
        <p><span class="linea">Precio:</span> $11000</p></div></div>
        <div class="elementoFiltrado">
        <div class="tarjetaFiltrada">                
        <h4>Juego: <span class="letra">Monopoly</span></h4>
        <p><span class="linea">Clasificación:</span> 8 años</p>
        <p><span class="linea">Precio:</span> $18000</p></div></div>
        <div class="elementoFiltrado">
        <div class="tarjetaFiltrada">                
        <h4>Juego: <span class="letra">Uno</span></h4>
        <p><span class="linea">Clasificación:</span> 8 años</p>
        <p><span class="linea">Precio:</span> $3000</p></div></div>
        <div class="elementoFiltrado">
        <div class="tarjetaFiltrada">                
        <h4>Juego: <span class="letra">Ajedrez</span></h4>
        <p><span class="linea">Clasificación:</span> 8 años</p>
        <p><span class="linea">Precio:</span> $10000</p></div></div>`
    document.body.appendChild(segundoTexto)
})

let opcion3 = document.getElementById("#opcion3")
const contenedorC = document.querySelector(".bt3")
contenedorC.addEventListener("click", () => {
    let tercerTexto = document.createElement("div")
    tercerTexto.innerHTML =
        `<h3 class="nombresCarrito">Flitrado de juegos para 16 o más años:</h3> <br>
        <div class="elementoFiltrado">
        <div class="tarjetaFiltrada">              
        <h4>Juego: <span class="letra">4 en linea</span></h4>
        <p><span class="linea">Clasificación:</span> 5 años</p>
        <p><span class="linea">Precio:</span> $2000</p></div></div>
        <div class="elementoFiltrado">
        <div class="tarjetaFiltrada">                
        <h4>Juego: <span class="letra">¿Ke sos?</span></h4>
        <p><span class="linea">Clasificación:</span> 5 años</p>
        <p><span class="linea">Precio:</span> $11000</p></div></div>
        <div class="elementoFiltrado">
        <div class="tarjetaFiltrada">                
        <h4>Juego: <span class="letra">Monopoly</span></h4>
        <p><span class="linea">Clasificación:</span> 8 años</p>
        <p><span class="linea">Precio:</span> $18000</p></div></div>
        <div class="elementoFiltrado">
        <div class="tarjetaFiltrada">                
        <h4>Juego: <span class="letra">Uno</span></h4>
        <p><span class="linea">Clasificación:</span> 8 años</p>
        <p><span class="linea">Precio:</span> $3000</p></div></div>
        <div class="elementoFiltrado">
        <div class="tarjetaFiltrada">                
        <h4>Juego: <span class="letra">Ajedrez</span></h4>
        <p><span class="linea">Clasificación:</span> 8 años</p>
        <p><span class="linea">Precio:</span> $10000</p></div></div>
        <div class="elementoFiltrado">
        <div class="tarjetaFiltrada">                
        <h4>Juego: <span class="letra">Say My Name</span></h4>
        <p><span class="linea">Clasificación:</span> 16 años</p>
        <p><span class="linea">Precio:</span> $5000</p></div></div>`
    document.body.appendChild(tercerTexto)
})

// Formulario
let listaUsuarios = ["Coder"]
let nombreUsuario = document.querySelector("#name").value
// listaUsuarios.push(nombreUsuario)
let listaStr = JSON.stringify(listaUsuarios)
localStorage.setItem("Nombres de los usuarios", listaStr)
let aggInfoUser = document.getElementById("botonForm")
// aggInfoUser.addEventListener("click", () => {
//     listaUsuarios.push(nombreUsuario)
// })

let nombreUser = localStorage.getItem("Nombres de los usuarios")
let parsenName= JSON.parse(nombreUser)
