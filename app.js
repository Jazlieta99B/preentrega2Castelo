// let edad = parseInt(prompt("Ingrese su edad"))
let carrito = []
let juegos = [
    { nombre: "Monopoly", clasificación: "8", precio: 18000, jugadoresMin: "2", jugadoresMax: "6" },
    { nombre: "4 en linea", clasificación: "5", precio: 2000, jugadoresMin: "2", jugadoresMax: "2" },
    { nombre: "¿Ke sos?", clasificación: "5", precio: 11000, jugadoresMin: "2", jugadoresMax: "6" },
    { nombre: "Say My Name", clasificación: "16", precio: 5000, jugadoresMin: "4", jugadoresMax: "12" },
    { nombre: "Uno", clasificación: "8", precio: 3000, jugadoresMin: "2", jugadoresMax: "10" },
    { nombre: "Ajedrez", clasificación: "8", precio: 10000, jugadoresMin: "2", jugadoresMax: "2" }
]

// Filtro de juegos por edades:
// Creo un ciclo para pedir que ingrese su edad en formato de número
let condition = true
while (condition == true) {
    let edad = parseInt(prompt("Ingrese su edad en números"))
    // Salta error en caso de que no se ingrese un número
    if (isNaN(edad)) { alert("Debe ingresar un número") }
    // En caso de haber un número se ejecuta un filtro para la edad puesta
    else {
        let filtroEdad = juegos.filter((p) => p.clasificación <= edad)
        console.log(filtroEdad)

        const filtrado = document.querySelector(".filtradoEdad")
        // En base al filtro, se ve en pantalla un listado con los juegos para esas edades
        for (let j of filtroEdad) {
            let lista = document.createElement("div")
            lista.innerHTML =
                `<div class="elementoFiltrado">
                <div class="tarjetaFiltrada">                
                <h4>Juego: <span class="letra">${j.nombre}</span></h4>
                <p><span class="linea">Clasificación:</span> ${j.clasificación} años</p>
                <p><span class="linea">Precio:</span> $${j.precio}</p></div></div>`
            filtrado.appendChild(lista)
        }
        const titulo = document.querySelector(".tituloFiltrado").textContent = `Filtrado de juegos para edades ${edad}:`
        break;
    }
}

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

console.log(producto1)
console.log(producto2)
console.log(producto3)
console.log(producto4)
console.log(producto5)
console.log(producto6)
