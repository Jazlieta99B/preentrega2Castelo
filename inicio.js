let carrito = []

// Traigo los datos de los juegos del archivo json
async function crearJ() {
    try {
        const response = await fetch("./data.json")
        const data = await response.json()
        let producto1 = data.producto1
        let producto2 = data.producto2
        let producto3 = data.producto3
        let producto4 = data.producto4
        let producto5 = data.producto5
        let producto6 = data.producto6

        // Pusheo o quito los elementos al carrito al hacer click en el boton
        let boton1 = document.getElementById("monopoly")
        boton1.addEventListener("click", agregarM)
        function agregarM() {
            carrito.push(producto1)
            // Mostrar cantidad de elementos en carritos en el botón del carrito
            let conteo = carrito.length
            botonConteo = document.querySelector("button").textContent = `${conteo}`
            Toastify({
                text: "Usted agregó el juego Monopoly al carrito",
                className: "info",
                style: {
                    background: "#3F826D",
                },
                gravity: "top",
                position: "right",
                offset: {
                    y: 60,
                }
            }).showToast();
        }

        let boton11 = document.getElementById("monopolyQuitar")
        boton11.addEventListener("click", quitarM)
        function quitarM() {
            const indice = carrito.indexOf(producto1);
            if (indice !== -1) {
                carrito.splice(indice, 1);
                // Mostrar cantidad de elementos en carritos en el botón del carrito
                let conteo = carrito.length
                botonConteo = document.querySelector("button").textContent = `${conteo}`
                Toastify({
                    text: "Usted eliminó el juego Monopoly del carrito",
                    className: "info",
                    style: {
                        background: "#3F826D",
                    },
                    gravity: "top",
                    position: "right",
                    offset: {
                        y: 60,
                    }
                }).showToast();
            }
        }

        let boton2 = document.getElementById("4EnLinea")
        boton2.addEventListener("click", agregar4)
        function agregar4() {
            carrito.push(producto2)
            // Mostrar cantidad de elementos en carritos en el botón del carrito
            let conteo = carrito.length
            botonConteo = document.querySelector("button").textContent = `${conteo}`
            Toastify({
                text: "Usted agregó el juego 4 en linea al carrito",
                className: "info",
                style: {
                    background: "#3F826D",
                },
                gravity: "top",
                position: "right",
                offset: {
                    y: 60,
                }
            }).showToast();
        }
        let boton12 = document.getElementById("4EnLineaQuitar")
        boton12.addEventListener("click", quitar4)
        function quitar4() {
            const indice = carrito.indexOf(producto2);
            if (indice !== -1) {
                carrito.splice(indice, 1);
                // Mostrar cantidad de elementos en carritos en el botón del carrito
                let conteo = carrito.length
                botonConteo = document.querySelector("button").textContent = `${conteo}`
                Toastify({
                    text: "Usted eliminó el juego 4 en linea del carrito",
                    className: "info",
                    style: {
                        background: "#3F826D",
                    },
                    gravity: "top",
                    position: "right",
                    offset: {
                        y: 60,
                    }
                }).showToast();
            }
        }

        let boton3 = document.getElementById("keSos")
        boton3.addEventListener("click", agregarK)
        function agregarK() {
            carrito.push(producto3)
            // Mostrar cantidad de elementos en carritos en el botón del carrito
            let conteo = carrito.length
            botonConteo = document.querySelector("button").textContent = `${conteo}`
            Toastify({
                text: "Usted agregó el juego ¿Ke sos? al carrito",
                className: "info",
                style: {
                    background: "#3F826D",
                },
                gravity: "top",
                position: "right",
                offset: {
                    y: 60,
                }
            }).showToast();
        }
        let boton13 = document.getElementById("keSosQuitar")
        boton13.addEventListener("click", quitarK)
        function quitarK() {
            const indice = carrito.indexOf(producto3);
            if (indice !== -1) {
                carrito.splice(indice, 1);
                // Mostrar cantidad de elementos en carritos en el botón del carrito
                let conteo = carrito.length
                botonConteo = document.querySelector("button").textContent = `${conteo}`
                Toastify({
                    text: "Usted eliminó el juego ¿Ke sos? del carrito",
                    className: "info",
                    style: {
                        background: "#3F826D",
                    },
                    gravity: "top",
                    position: "right",
                    offset: {
                        y: 60,
                    }
                }).showToast();
            }
        }

        let boton4 = document.getElementById("sayMyName")
        boton4.addEventListener("click", agregarS)
        function agregarS() {
            carrito.push(producto4)
            // Mostrar cantidad de elementos en carritos en el botón del carrito
            let conteo = carrito.length
            botonConteo = document.querySelector("button").textContent = `${conteo}`
            Toastify({
                text: "Usted agregó el juego Say My Name al carrito",
                className: "info",
                style: {
                    background: "#3F826D",
                },
                gravity: "top",
                position: "right",
                offset: {
                    y: 60,
                }
            }).showToast();
        }
        let boton14 = document.getElementById("sayMyNameQuitar")
        boton14.addEventListener("click", quitarS)
        function quitarS() {
            const indice = carrito.indexOf(producto4);
            if (indice !== -1) {
                carrito.splice(indice, 1);
                // Mostrar cantidad de elementos en carritos en el botón del carrito
                let conteo = carrito.length
                botonConteo = document.querySelector("button").textContent = `${conteo}`
                Toastify({
                    text: "Usted eliminó el juego Say My Name del carrito",
                    className: "info",
                    style: {
                        background: "#3F826D",
                    },
                    gravity: "top",
                    position: "right",
                    offset: {
                        y: 60,
                    }
                }).showToast();
            }
        }

        let boton5 = document.getElementById("uno")
        boton5.addEventListener("click", agregarU)
        function agregarU() {
            carrito.push(producto5)
            // Mostrar cantidad de elementos en carritos en el botón del carrito
            let conteo = carrito.length
            botonConteo = document.querySelector("button").textContent = `${conteo}`
            Toastify({
                text: "Usted agregó el juego Uno al carrito",
                className: "info",
                style: {
                    background: "#3F826D",
                },
                gravity: "top",
                position: "right",
                offset: {
                    y: 60,
                }
            }).showToast();
        }
        let boton15 = document.getElementById("unoQuitar")
        boton15.addEventListener("click", quitarU)
        function quitarU() {
            const indice = carrito.indexOf(producto5);
            if (indice !== -1) {
                carrito.splice(indice, 1);
                // Mostrar cantidad de elementos en carritos en el botón del carrito
                let conteo = carrito.length
                botonConteo = document.querySelector("button").textContent = `${conteo}`
                Toastify({
                    text: "Usted eliminó el juego Uno del carrito",
                    className: "info",
                    style: {
                        background: "#3F826D",
                    },
                    gravity: "top",
                    position: "right",
                    offset: {
                        y: 60,
                    }
                }).showToast();
            }
        }

        let boton6 = document.getElementById("ajedrez")
        boton6.addEventListener("click", agregarA)
        function agregarA() {
            carrito.push(producto6)
            // Mostrar cantidad de elementos en carritos en el botón del carrito
            let conteo = carrito.length
            botonConteo = document.querySelector("button").textContent = `${conteo}`
            Toastify({
                text: "Usted agregó el juego Ajedrez al carrito",
                className: "info",
                style: {
                    background: "#3F826D",
                },
                gravity: "top",
                position: "right",
                offset: {
                    y: 60,
                }
            }).showToast();
        }
        let boton16 = document.getElementById("ajedrezQuitar")
        boton16.addEventListener("click", quitarA)
        function quitarA() {
            const indice = carrito.indexOf(producto6);
            if (indice !== -1) {
                carrito.splice(indice, 1);
                // Mostrar cantidad de elementos en carritos en el botón del carrito
                let conteo = carrito.length
                botonConteo = document.querySelector("button").textContent = `${conteo}`
                Toastify({
                    text: "Usted eliminó el juego Ajedrez del carrito",
                    className: "info",
                    style: {
                        background: "#3F826D",
                    },
                    gravity: "top",
                    position: "right",
                    offset: {
                        y: 60,
                    }
                }).showToast();
            }
        }

        // Al hacer click en el carrito desplegar información sobre la compra
        let botonCarrito = document.getElementById("botonCarrito")
        botonCarrito.addEventListener("click", agregarBoton)
        function agregarBoton() {

            // Mostrar los elementos del carrito:                                           

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
            elementoCarrito.innerHTML = "";
            textoCarrito.innerHTML =
                `<p>${nombreInput.value} usted tiene en el carrito ${carrito.length} ítem/ítems.</p>
                <ul> ${itemsCarrito.join(' ')}</ul>
                <p>El precio total es de $${precioTotal}</p>`
            elementoCarrito.appendChild(textoCarrito);


            // Guardar los elementos del carrito en el Local Storage
            let storageCarrito = carrito.map((p) => {
                return ` ${p.nombre}`
            })
            localStorage.setItem("Carrito", storageCarrito)
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
    }
    catch (error) {
        console.log("Ocurrió un error")
    }
}
crearJ()


// Formulario
let listaUsuarios = []
let nombreUsuarios = []
let emailUsuarios = []

let nombreInput = document.getElementById("name")
nombreInput.addEventListener("blur", () => {
    nombreUsuarios.push(nombreInput.value)
})
let emailInput = document.getElementById("email")
emailInput.addEventListener("blur", () => {
    emailUsuarios.push(emailInput.value)
})
let botonInput = document.getElementById("botonForm")
botonInput.addEventListener("click", () => {
    if (nombreUsuarios != "" && emailUsuarios != "") {
        function usuario(nombre, mail) {
            this.nombre = nombre
            this.mail = mail
        }
        let usuario1 = new usuario(nombreInput.value, emailInput.value)
        listaUsuarios.push(usuario1)
        Toastify({
            text: "¡Registrad@ con éxito!",
            className: "info",
            style: {
                background: "linear-gradient(to right, #00b09b, #8a2be2)",
            },
            gravity: "top",
            position: "right",
            offset: {
                y: 60,
            }
        }).showToast();
        
        // Elimino el formulario al ingresar los datos
        let borrarForm = document.querySelector("#borrarF").textContent = ""
    }
    // Guardar los datos de usuario en el Local Storage
    let storageUsuarioNombre = listaUsuarios.map((p) => {
        return `Nombre: ${p.nombre} - Email: ${p.mail}`
    })
    localStorage.setItem("Usuario", storageUsuarioNombre)
})

// Creo un modal para el carrito
if (document.getElementById("botonCarrito")){
    let modal = document.getElementById("modal")
    let button = document.getElementById("botonCarrito")
    let span = document.getElementById("close")
    let body = document.getElementById("body")

    button.onclick = function(){
        modal.style.display = "block"
        body.style.position = "static"
        body.style.height = "100%"
        body.style.overflow = "hidden"
    }

    span.onclick = function(){
        modal.style.display = "none"
        body.style.position = "inherit"
        body.style.height = "auto"
        body.style.overflow = "visible"
    }
}