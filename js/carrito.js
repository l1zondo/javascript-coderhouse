const ropa=[
    {
        id:"camisa1",
         titulo:"camisa vaquita",
        precio:4500
     },

     {
         id:"jean1",
        titulo:"jean elastizado azul",
         precio:5000
     },
    {
        id:"remera1",
         titulo:"remera emoji",
         precio:2500
     }
 ]
 console.log(ropa)

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

 


