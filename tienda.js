function iniciarTienda() {
    let totalCompra = 0;
    let seguirComprando = true;
    
    alert("Bienvenido a la tienda");
    
    while (seguirComprando) {
        let nombreProducto = prompt("Ingrese el nombre del producto:");
        let precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
        
        while (isNaN(precioProducto) || precioProducto <= 0) {
            alert("Precio inválido. Debe ingresar un número mayor a 0");
            precioProducto = parseFloat(prompt("Ingrese el precio del producto:"));
        }
         let descuento = 0;
    
    if (totalCompra > 100000) {
        descuento = totalCompra * 0.10;
        alert("¡Felicidades! Has obtenido un 10% de descuento por compras superiores a $100.000");
    }
    
    let totalFinal = totalCompra - descuento;
    
    console.log("Subtotal: $" + totalCompra);
    console.log("Descuento aplicado: $" + descuento);
    console.log("TOTAL A PAGAR: $" + totalFinal);
    
    
    alert("Total a pagar: $" + totalFinal + "\nGracias por su compra!");
}

iniciarTienda();
