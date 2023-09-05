let mostrador = document.getElementById("mostrador");
let seleccion = document.getElementById("seleccion");
let imgSeleccionada = document.getElementById("img");
let modeloSeleccionado = document.getElementById("modelo");
let descripSeleccionada = document.getElementById("descripcion");
let precioSeleccionado = document.getElementById("precio");
let textCantidad = document.getElementById("cantidad");

let detallePedido = document.getElementById("ListaPedidos");
let detalleTotal = document.getElementById("TotalPedido");

let producto ="";
let precio=0;
let totalPago=0;
let cantidad=0;
let itemAux="";

function cargar(item){
    quitarBordes();

    seleccion.style.height = "auto";
    seleccion.style.opacity = "1";


    item.style.border = "2px solid red";
  
    imgSeleccionada.src = item.querySelector("[name = imgProducto]").src;

    producto = item.querySelector("[name=NombreProducto]").innerHTML;
    precio = item.querySelector("[name=precio]").value;
    cantidad=item.querySelector("[name=cantidad]").value;
    modeloSeleccionado.innerHTML =  producto;

    precioSeleccionado.innerHTML =  `$ ${precio}`;
    textCantidad.value=cantidad
    itemAux = item;
}

function cerrar(){
    mostrador.style.width = "100%";
    seleccion.style.height = "0%";
    seleccion.style.opacity = "0";
    quitarBordes();
    
    textCantidad.value=""
}
function removeProducto(){
    cantidad = itemAux.querySelector("[name=cantidad]").value = cantidad;
    if(cantidad>0){
        itemAux.querySelector("[name=cantidad]").value = 0
        itemAux.setAttribute("state","false");
        itemAux.classList.remove("selected");
        alert("ELIMINADO");
        cerrar();
        recorrerProductos();
    }else{
        alert("El producto no está agregado");
    }
}

function saveProducto(){
    cantidad = textCantidad.value;
    if(cantidad>0){
        itemAux.querySelector("[name=cantidad]").value = cantidad
        itemAux.setAttribute("state","true");
        itemAux.classList.add("selected");
        alert("GUARDADO");
        cerrar();
        recorrerProductos();

    }else{
        alert("Cantidad Ingresada es invalida!")
    }

}

function recorrerProductos(){
    var items = document.getElementsByClassName("item");
    aux="";
    totalPago=0;
    for(i=0;i <items.length; i++){
        item = items[i].getAttribute("state");
        

        producto = items[i].querySelector("[name=NombreProducto]").innerHTML;
        precio = parseInt(items[i].querySelector("[name=precio]").value);
        cantidad=parseInt(items[i].querySelector("[name=cantidad]").value);
        total = precio * cantidad;

        if(item == "true"){
            aux +=`<li>
                ${producto}
                <ul class="detallesItem">
                    <li>Precio:$ ${precio}</li>
                    <li>Cantidad: ${cantidad}</li>
                    <li>Total:$ ${total}</li>
                </ul>
            </li>`
            totalPago +=total;
        }
    }
    console.log(aux);
    detallePedido.innerHTML = aux;
    detalleTotal.innerHTML = `Total:$ ${totalPago}`
}

function quitarBordes(){
    var items = document.getElementsByClassName("item");
    for(i=0;i <items.length; i++){
        items[i].style.border = "1px solid #ccc";
    }
}