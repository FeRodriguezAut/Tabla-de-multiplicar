function juegoAdivinador() {
    let numeroDecimal = Math.random();
    let numeroGrande = numeroDecimal * 20;
    let numeroEntero = Math.floor(numeroGrande);
    let numeroAleatorio = numeroEntero + 1;
    
    let numeroUsuario = 0;
    let intentos = 0;
    
    alert("¡Bienvenido al juego del adivinador!");
    alert("He pensado un número entre 1 y 20. ¡Intenta adivinarlo!");

    while (numeroUsuario !== numeroAleatorio) {
        numeroUsuario = parseInt(prompt("Ingresa tu intento (número entre 1 y 20):"));
        
        while (isNaN(numeroUsuario) || numeroUsuario < 1 || numeroUsuario > 20) {
            alert("Por favor ingresa un número válido entre 1 y 20");
            numeroUsuario = parseInt(prompt("Ingresa tu intento (número entre 1 y 20):"));
        }
        
        intentos = intentos + 1;
        
        if (numeroUsuario < numeroAleatorio) {
            alert("El número que busco es MAYOR que " + numeroUsuario);
        } else if (numeroUsuario > numeroAleatorio) {
            alert("El número que busco es MENOR que " + numeroUsuario);
        } else {
            alert("¡FELICIDADES! Adivinaste el número " + numeroAleatorio + " en " + intentos + " intentos");
        }
    }
    
    console.log("Número secreto: " + numeroAleatorio);
    console.log("Total de intentos: " + intentos);
}

juegoAdivinador();
