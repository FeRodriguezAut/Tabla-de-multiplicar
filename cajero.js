// Saldo inicial del cajero
const SALDO_INICIAL = 1000;

//  saldo actual
let saldoActual = SALDO_INICIAL;

// usuario quiere continuar
let continuar = true;

// Ciclo que se repite mientras el usuario quiera hacer retiros
while (continuar) {
    
    // Capturamos el monto que el usuario quiere retirar
    let montoRetiro = parseFloat(prompt("Ingrese el monto a retirar:"));
    
    // Verificamos si el monto es válido (mayor a 0)
    if (montoRetiro <= 0 || isNaN(montoRetiro)) {
        alert("Por favor ingrese un monto válido");
        
    } else if (montoRetiro > saldoActual) {
        // Verificamos si hay fondos suficientes
        alert("Fondos insuficientes. Su saldo actual es: $" + saldoActual);
        
    } else {
        // Si todo está bien, realizamos el retiro
        saldoActual = saldoActual - montoRetiro;
        alert("Retiro exitoso. Ha retirado: $" + montoRetiro + "\nSaldo restante: $" + saldoActual);
    }
    
    // Preguntamos si quiere hacer otra operación
    continuar = confirm("¿Desea realizar otro retiro?");
}

// Mensaje final cuando termina
alert("Gracias por usar nuestro cajero. Saldo final: $" + saldoActual);