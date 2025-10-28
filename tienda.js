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