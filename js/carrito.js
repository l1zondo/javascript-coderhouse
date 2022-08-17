console.dir(document.body)
const productos=[{id: 1, titulo:"camisa vaquita", precio:4500},
{id: 2, titulo:"jean elastizado azul", precio:5000},
{id: 3, titulo:"remera emoji", precio:2500}];
 console.log(productos)
function calcularIva(precio){
    let precioConIva=precio * 1.21;
    return precioConIva;
}

let conIva=calcularIva(100);
console.log("El valor del iva es $"+conIva);

function aplicarDescuento(precio){
    return precio * 0.9;
}
let precioConAumento=aplicarDescuento(calcularIva(parseInt(prompt("Ingrese los valores de lo que quiere comprar"))))
console.log(precioConAumento);


let cartas=document.getElementById("cartas");
for(const producto of productos){
    let carta=document.createElement("div");
    carta.className="card col-md-6";
    carta.innerHTML=`
    <div class="card-body">
          <h5 class="card-title">${producto.titulo}</h5>
          <p class="card-text">${producto.precio}</p>
          <button class="btn btn-primary">COMPRAR</button>
        </div>
    
    `;
    cartas.append(carta);
}