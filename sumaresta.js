let bandera = 0;
while (true) {
    let entrada = prompt("ingrese el valor")
    if (entrada == "a") {
        bandera = sumar(bandera , parseInt(entrada));
    } else if (entrada == "b") {
        bandera = restar(bandera , parseInt(entrada));
    } else { break; }
    }
    console.log (bandera);
}
function sumar (anterior, nuevo) {
    return anterior += nuevo;
}