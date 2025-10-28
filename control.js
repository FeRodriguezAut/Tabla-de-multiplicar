// Ejercicio 8 - Control de acceso

function controlAcceso() {
    let usuarioCorrecto = "admin";
    let contraseñaCorrecta = "1234";
    let intentosMaximos = 3;
    let intentosUsados = 0;
    let accesoPermitido = false;
    
    alert("Sistema de control de acceso\nTienes 3 intentos para ingresar");
    
    // Ciclo que se repite mientras haya intentos disponibles y no se haya logrado acceder
    while (intentosUsados < intentosMaximos && !accesoPermitido) {
        let usuarioIngresado = prompt("Ingresa tu usuario:");
        let contraseñaIngresada = prompt("Ingresa tu contraseña:");
        
        intentosUsados = intentosUsados + 1;
        
        // Verificamos si ambas credenciales son correctas
        if (usuarioIngresado === usuarioCorrecto && contraseñaIngresada === contraseñaCorrecta) {
            accesoPermitido = true;
            alert("¡Bienvenido al sistema!");
            console.log("Acceso concedido al usuario: " + usuarioIngresado);
        } else {
            // Calculamos intentos restantes
            let intentosRestantes = intentosMaximos - intentosUsados;
            
            if (intentosRestantes > 0) {
                alert("Usuario o contraseña incorrectos\nTe quedan " + intentosRestantes + " intentos");
                console.log("Intento fallido. Intentos restantes: " + intentosRestantes);
            } else {
                // Ya no quedan más intentos
                alert("ACCESO DENEGADO\nHas agotado todos tus intentos");
                console.log("Acceso denegado - Se agotaron los intentos");
            }
        }
    }
}

controlAcceso();