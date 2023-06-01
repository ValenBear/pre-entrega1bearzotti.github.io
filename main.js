function saludar (){
    let nombre = prompt ("Ingresar nombre");
    alert(
        "Bienvenido/a " + nombre + " a BearSneakers"
    );
}

class sneaker {
    constructor(marca, precio, talle){
        this.marca =marca;
        this.precio =precio;
        this.talle =talle;
    }
}

let arrayCarrito = []

let stock = [
    {marca: "Nike", precio: 43000},
    {marca: "Adidas", precio: 39500},
    {marca: "Puma", precio: 35000},
    {marca: "Jordan", precio: 49000},
    {marca: "Fila", precio: 38000}
]

let tallesValidos = ["35", "36", "37", "38", "39", "40", "41", "42", "43", "44", "45"]

function verStock(){
    stock.forEach((sneaker)=>{
        alert(`Marca: ${sneaker.marca} - Precio ${sneaker.precio}`)
    });
    alert("La curva de talles va del 35 al 45")
}

function agregarProducto(){
    let marca = prompt("ingrese la marca de las zapatillas que desees; Nike, Adidas, Puma, Jordan o Fila");
    let talle = prompt("ingrese el talle");
    if (!tallesValidos.includes(talle)){
        alert("Talle invalido. Recuerde que los talles van del 35 al 45");
        return;
    }
    let stockExistente = stock.find(sneaker => sneaker.marca === marca)
    
    if(stockExistente){
        const nuevoSneaker = new sneaker (marca, stockExistente.precio, talle)
        arrayCarrito.push(nuevoSneaker);
        alert("Su producto fue añadido al carrito");
    } else{
        alert("Su producto elegido no se ha encontrado, por favor revise si lo ha escrito correctamente.")
    }
}

arrayCarrito.forEach((producto)=>(
    alert (`usted eligio unos Sneaker ${producto.marca} por un precio de ${producto.precio} en el talle ${producto.talle}`)
))

function verCarrito(){
    if (arrayCarrito.length === 0){
        alert("El carrito esta vacio");
    } else {
        arrayCarrito.forEach((producto)=>(alert (`usted eligio unos Sneaker ${producto.marca} por un precio de ${producto.precio} en el talle ${producto.talle}`)
        ));
    }
}

function finalizarCompra(){
    if (arrayCarrito.length === 0) {
        alert("Muchas gracias por visitar nuestra pagina")
    }
    else{
        const total = arrayCarrito.reduce((fdc,precioFinal)=>fdc + precioFinal.precio, 0);
    alert ("Gracias por su compra, el total a pagar es de: "+ total)
    }
}


saludar ();

let opcion = prompt( "ingrese una opcion: \n 1: Ver stock \n 2: Comprar producto \n 3: Ver carrito")

while(opcion !=="5"){
    if (opcion==="1"){
        verStock ();
        opcion=prompt ("Elija otra opcion: \n 2: Agregar producto \n 3: Ver carrito \n 4: Terminar compra");
    }
    if (opcion==="2"){
        agregarProducto ();
        opcion=prompt ("Elija otra opcion: \n 1: Ver stock \n 2: Seguir comprando \n 3: Ver carrito \n 4: Terminar compra");
    }
    if (opcion==="3"){
        verCarrito ();
        opcion=prompt ("Elija otra opcion: \n 1: Ver stock \n 2: Agregar producto \n 4: Terminar compra");
    }
    if (opcion==="4"){
        finalizarCompra ();
        opcion = "5";
    }
    if (opcion>5){
        alert("Caracter invalido, vuelva a intentar")
        opcion=prompt( "ingrese una opcion: \n 1: Ver stock \n 2: Comprar producto \n 3: Ver carrito \n 4: Terminar compra")
    }
}