function saludar (){
    let nombre = prompt ("Ingresar nombre");
    alert(
        "Bienvenido/a " + nombre + " a BearSneakers"
    );
}

function despedir (){
    if (precioTotal !==0){
        alert("El monto total a pagar es de "+ precioTotal)
    }
    alert ("Muchas gracias por su compra");
}

function comprarProducto (){
    producto = prompt( "Elija la marca de zapatillas que quiere saber el precio \n 1: Nike \n 2: Adidas \n 3: Puma")

    if(producto ==="1"){
        alert("Elegiste la marca de zapatillas Nike, el valor es de "+ zapatillaNike);
        compra = prompt("Desea agregarlo al carro? \n 1: Si \n 2: No")
        if(compra ==="1"){
            precioTotal= precioTotal+zapatillaNike
            compra=0
        } else if(compra ==="2"){
            compra=0
        }
    } else if (producto ==="2"){
        alert("Elegiste la marca de zapatillas Adidas, El valor es de "+ zapatillaAdidas);
        compra = prompt("Desea agregarlo al carro? \n 1: Si \n 2: No")
        if(compra ==="1"){
            precioTotal= precioTotal+zapatillaAdidas
            compra=0
        } else if(compra ==="2"){
            compra=0
        }
    } else if (producto ==="3"){
        alert("Elegiste la marca de zapatillas Puma, El valor es de "+ zapatillaPuma);
        compra = prompt("Desea agregarlo al carro? \n 1: Si \n 2: No")
        if(compra ==="1"){
            precioTotal= precioTotal+zapatillaPuma
            compra=0
        } else if(compra ==="2"){
            compra=0
        }
    }

    opcion = prompt("Elija otra opcion: \n 1: Seguir comprando \n 2: Mostrar precio actual \n 3: Terminar compra")
}

function mostrarPrecio (){
    alert("El precio total es de "+ precioTotal)
}

let compra;
let precioTotal=0;
let producto;
let zapatillaNike=43000;
let zapatillaAdidas=39500;
let zapatillaPuma=35000;

saludar ();
let opcion = prompt("Ingrese que opcion quiere realizar: \n 1: Comprar zapatillas \n 2: Mostrar precio final \n 3: Terminar compra")

while(opcion !=="3"){
    if (opcion==="1"){
        comprarProducto ();
    }
    if (opcion==="2"){
        mostrarPrecio ()
        opcion=prompt ("Elija otra opcion: \n 1: Seguir comprando \n 3: Terminar compra");
    }   
}

despedir ();