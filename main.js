

let carritoDom = document.getElementById("cart");

const contenedorProductos = document.getElementById("contenedor-productos")



const actualizarStorage= (carrito)=>{
    localStorage.setItem("carrito", JSON.stringify(carrito));
}

const dibujarCarrito = () => {
carritoDom.className = "cart";
carritoDom.innerHTML = `
    <div class="carrito-dom">
      <img src="./imagenes/carrito.png" alt="" class="carrito-dom-logo">
      <h4 class="carrito-dom-titulo">Carrito de compras</h4>
    </div>
  `;
  if(carrito.length === 0){
    const carritoVacio = document.createElement("h4");
    carritoVacio.className = "carrito-vacio";
    carritoVacio.textContent = "El carrito esta vacio";
    carritoDom.appendChild(carritoVacio);
  } else {
  const carritoContainer = document.createElement("div");
  carritoContainer.className = "carrito-container";
  carrito.forEach((producto, i) => {
    let productoHTML = `
    <div class="carrito-producto">
      <img class="carrito-producto-imagen" src="${producto.imagen}"/>
      <div class="carrito-producto-descripcion">${producto.nombre}</div>
      <div class="carrito-producto-descripcion">Cantidad: ${producto.cantidad}</div>
      <div class="carrito-producto-descripcion">Precio: ${producto.precio}</div>
      <div class="carrito-producto-descripcion">Subtotal: $${producto.precioReal * producto.cantidad}</div>
      <button class="btn btn-danger" id="sacar-producto" onClick="eliminarProducto(${i})">Eliminar producto</button>
    </div>
    `;
    const productoElement = document.createElement("div");
    productoElement.innerHTML = productoHTML;
    carritoContainer.appendChild(productoElement);
  });
  carritoDom.appendChild(carritoContainer);
    }
    precioTotal = carrito.reduce((total, producto) => total + producto.precioReal * producto.cantidad, 0)
    if (precioTotal > 0){
    const divPrecioTotal = document.createElement("h4");
    divPrecioTotal.className = "cart-preciototal";
    divPrecioTotal.textContent = `Precio total: $${precioTotal}`;
    carritoDom.appendChild(divPrecioTotal)};
    let vaciarCarritoBoton = document.getElementById("vaciar-carrito-boton");
    if (carrito.length > 0){
        vaciarCarritoBoton = document.createElement("div");
        vaciarCarritoBoton.className = "cart-vaciarcarrito"
        vaciarCarritoBoton.innerHTML = `
        <button class="btn btn-danger" onClick="vaciarCarrito()">Vaciar carrito</button>
        `
        carritoDom.appendChild(vaciarCarritoBoton);
    }
    if (carrito.length > 0){
    const finalizarCompraBoton = document.createElement("div");
    finalizarCompraBoton.className = "cart-finalizarcompra";
    finalizarCompraBoton.innerHTML = `
        <button class="btn btn-danger boton-finalizarcompra" onClick="finalizarCompra()">Finalizar Compra</button>
    `
    carritoDom.appendChild(finalizarCompraBoton);
    }
};

const agregarCarrito= (indice) =>{
    const productoSelecionado = carrito.findIndex((elemento) =>{
        return elemento.id ===stock[indice].id;
    })
    if (productoSelecionado === -1){
        const productoAgregado = stock[indice];
        productoAgregado.cantidad = 1
        carrito.push(productoAgregado);
        actualizarStorage(carrito);
        precioTotal = carrito.reduce((total, producto) => total + producto.precioReal * producto.cantidad, 0);
        dibujarCarrito(indice);
    } else {
        carrito[productoSelecionado].cantidad += 1;
        actualizarStorage(carrito);
        precioTotal = carrito.reduce((total, producto) => total + producto.precioReal * producto.cantidad, 0);
        dibujarCarrito(indice);
    }
}

const eliminarProducto = (indice) =>{
    carrito.splice(indice, 1)
    actualizarStorage(carrito);
    carritoDom:innerHTML = "";
    dibujarCarrito(indice);
}

const vaciarCarrito = () => {
    carrito = [];
    actualizarStorage(carrito);
    carritoDom.innerHTML = "";
    dibujarCarrito();
}

const finalizarCompra = (carrito) => {
  Swal.fire(
    'Ya casi!',
    'Complete el formulario para terminar la compra',
  )
    carritoDom.innerHTML = `
    <div class="cart-comprafinalizada">
    <h4>Terminaste la compra</h4>
    <form class="row g-3" id="cart-comprafinalizada-formulario">
  <div class="col-md-4">
    <label for="nombre" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="nombre" name="nombre"required>
  </div>
  <div class="col-md-4">
    <label for="telefono" class="form-label">Telefono</label>
    <input type="tel" class="form-control" id="telefono" name="telefono" required>
  </div>
  <div class="col-md-4">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" name="email" required>
  </div>
  <div class="col-md-3">
  <label for="provincia" class="form-label">Provincia</label>
  <select class="form-select" id="provincia" name="provincia" required>
    <option selected disabled value="">Elija una provincia...</option>
    <option>Buenos Aires</option>
    <option>Ciudad Autónoma de Buenos Aires</option>
        <option>Catamarca</option>
        <option>Chaco</option>
        <option>Chubut</option>
        <option>Córdoba</option>
        <option>Corrientes</option>
        <option>Entre Ríos</option>
        <option>Formosa</option>
        <option>Jujuy</option>
        <option>La Pampa</option>
        <option>La Rioja</option>
        <option>Mendoza</option>
        <option>Misiones</option>
        <option>Neuquén</option>
        <option>Río Negro</option>
        <option>Salta</option>
        <option>San Juan</option>
        <option>San Luis</option>
        <option>Santa Cruz</option>
        <option>Santa Fe</option>
        <option>Santiago del Estero</option>
        <option>Tierra del Fuego, Antártida e Islas del Atlántico Sur</option>
        <option>Tucumán</option>
  </select>
</div>
  <div class="col-md-6">
    <label for="ciudad" class="form-label">Ciudad</label>
    <input type="text" class="form-control" id="ciudad" name="ciudad" required>
  </div>
  <div class="col-md-3">
    <label for="codigoPostal" class="form-label">Codigo postal</label>
    <input type="text" class="form-control" id="codigoPostal" name="codigoPostal" required>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2">
      <label class="form-check-label" for="invalidCheck2">
        Desea recibir mails sobre promociones de nuestra pagina
      </label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-danger" type="submit">Enviar</button>
  </div>
</form>
    </div>
    `
    const formulario = document.getElementById("cart-comprafinalizada-formulario");
    formulario.addEventListener("submit", guardarDatosFormulario);
}

const obtenerCotizacion = (event) => {
  event.preventDefault();
  const dolarACotizar = document.getElementById("dolar-a-cotizar").value;

  fetch('https://api.exchangerate-api.com/v4/latest/USD')
  .then(response => response.json())
  .then(data => {
    const cotizacion = data.rates.ARS;
    const dolarACotizar = document.getElementById("dolar-a-cotizar").value;
    const resultado = dolarACotizar * cotizacion;
    document.getElementById('dolarResultado').textContent = `La cotización de ${dolarACotizar} dólares a pesos argentinos es: ${resultado}ARS`;
  })
  .catch(error => {
    document.getElementById('dolarResultado').textContent = 'Ocurrió un error al obtener la cotización.';
    console.log('Ocurrió un error al obtener la cotización:', error);
  });
}



  const formDolar = document.getElementById("form-dolar")
  formDolar.innerHTML = `
  <h4>Quieres saber la cotizacion de USD a ARS?</h4>
  <input type="number" id="dolar-a-cotizar" placeholder="Valor a cotizar...">
  <button onclick="obtenerCotizacion(event)" class="btn btn-danger">Obtener Cotizacion</button>
  <p id="dolarResultado"></p>`;



const guardarDatosFormulario = (event) => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const email = document.getElementById("email").value;
    const provincia = document.getElementById("provincia").value;
    const ciudad = document.getElementById("ciudad").value;
    const codigoPostal = document.getElementById("codigoPostal").value;

    const datosFormulario ={
        nombre,
        telefono,
        email,
        provincia,
        ciudad,
        codigoPostal,
    };

    localStorage.setItem("datosFormulario", JSON.stringify(datosFormulario));
    Swal.fire(
      'Compra finalizada!',
      `Muchas gracias ${datosFormulario.nombre} por comprar en BearSneakers`,
      'success'
    )
    carrito = []
    actualizarStorage(carrito);
    carritoDom.innerHTML = `
    <div class="cart-seguircomprando">
    <div class="cart-boton-seguircomprando">
    <button class="btn btn-danger" onClick="dibujarCarrito()">Seguir comprando</button>
    </div>
    </div>
    `
}

stock.forEach((producto, indice) => {
  let card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `<img src=${producto.imagen} class="card-img-top" alt="zapatilla${producto.indice + 1}">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <p class="card-text precio">${producto.precio}</p>
      <a href="#cart" class="btn btn-outline-danger" onClick="agregarCarrito(${indice})">Agregar al carrito</a>
    </div>`;
  contenedorProductos.appendChild(card);
});


let carrito = [];
let precioTotal = 0;

if (localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
    dibujarCarrito();
}