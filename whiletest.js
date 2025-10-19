let bandera = 0;
while (true) {
    let entrada = prompt("ingrese el valor")
    if (entrada == "a") {
        break;
    }
    bandera = sumar(bandera , parseInt(entrada));
    console.log (bandera);
}
function sumar (anterior, nuevo) {
    return anterior += nuevo;
}
