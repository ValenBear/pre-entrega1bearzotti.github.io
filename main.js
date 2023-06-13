
let stock = [
    {
        id: 1,
        nombre:"Nike Air Force 1",
        marca:"Nike",
        precio:"$73.700",
        precioReal:73700,
        imagen:"./imagenes/zapatilla-nike-airforce1.jpeg",
    },
    {
        id: 2,
        nombre:"Nike Air Max 90 Futura",
        marca:"Nike",
        precio:"$80.000",
        precioReal:80000,
        imagen:"./imagenes/zapatilla-nike-airmax90.jpeg",
    },
    {
        id: 3,
        nombre:"Jordan Air XXXVII",
        marca:"Jordan",
        precio:"$110.000",
        precioReal:110000,
        imagen:"./imagenes/zapatilla-jordan-airxxxvii.jpeg",
    },
    {
        id: 4,
        nombre:"Jordan Air 4 Retro",
        marca:"Jordan",
        precio:"$126.500",
        precioReal:126500,
        imagen:"./imagenes/zapatilla-jordan-air4retro.jpeg",
    },
    {
        id: 5,
        nombre:"Adidas Superstar",
        marca:"Adidas",
        precio:"$40.900",
        precioReal:40900,
        imagen:"./imagenes/zapatilla-adidas-superstar.jpeg",
    },
    {
        id: 6,
        nombre:"Adidas Ozelia",
        marca:"Adidas",
        precio:"$37.200",
        precioReal:37200,
        imagen:"./imagenes/zapatilla-adidas-ozelia.jpeg",
    },
    {
        id: 7,
        nombre:"Puma Slipstream",
        marca:"Puma",
        precio:"$55.000",
        precioReal:55000,
        imagen:"./imagenes/zapatilla-puma-slipstream.jpeg",
    },
    {
        id: 8,
        nombre:"Puma Rs-X Triple",
        marca:"Puma",
        precio:"$47.700",
        precioReal:47700,
        imagen: "./imagenes/zapatilla-puma-rsxtriple.jpeg",
    },
    {
        id: 9,
        nombre:"Vans Sk8 Hi",
        marca:"Vans",
        precio:"$43.000",
        precioReal:43000,
        imagen: "./imagenes/zapatilla-vans-sk8hi.jpeg",
    },
    {
        id: 10,
        nombre:"Vans Old Skool",
        marca:"Vans",
        precio:"$46.400",
        precioReal:46400,
        imagen:"./imagenes/zapatilla-vans-oldskool.jpeg",
    },
    {
        id: 11,
        nombre:"Fila Acd Mid",
        marca:"Fila",
        precio:"$41.000",
        precioReal:41000,
        imagen: "./imagenes/zapatilla-fila-acdmid.jpeg",
    },
    {
        id: 12,
        nombre:"Fila Oakmont Sl",
        marca:"Fila",
        precio:"$31.500",
        precioReal:31500,
        imagen: "./imagenes/zapatilla-fila-oakmontsl.jpeg",
    },
]

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
    carrito = []
    actualizarStorage(carrito);
    carritoDom.innerHTML = `
    <div class="cart-seguircomprando">
    <h4> La compra ha sido finalizada</h4>
    <h3> Muchas gracias ${datosFormulario.nombre} por comprar en BearSneakers </h3>
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