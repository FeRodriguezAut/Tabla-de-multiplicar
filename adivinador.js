function juegoAdivinador() {
    let numeroDecimal = Math.random();
    let numeroGrande = numeroDecimal * 20;
    let numeroEntero = Math.floor(numeroGrande);
    let numeroAleatorio = numeroEntero + 1;
    
    let numeroUsuario = 0;
    let intentos = 0;
    
    alert("¡Bienvenido al juego del adivinador!");
    alert("He pensado un número entre 1 y 20. ¡Intenta adivinarlo!");