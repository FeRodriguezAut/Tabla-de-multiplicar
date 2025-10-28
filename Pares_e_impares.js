

function contadorParesImpares() {
    let cantidadNumeros = 10;
    let contadorPares = 0;
    let contadorImpares = 0;
    
    alert("Ingresarás 10 números y te diré cuántos son pares y cuántos impares");
    
    for (let i = 1; i <= cantidadNumeros; i++) {
        let numero = parseInt(prompt("Ingresa el número " + i + " de 10:"));
        
        while (isNaN(numero)) {
            alert("Debes ingresar un número válido");
            numero = parseInt(prompt("Ingresa el número " + i + " de 10:"));
        }
        
        if (numero % 2 === 0) {
            contadorPares = contadorPares + 1;
            console.log("El número " + numero + " es PAR");
        } else {
            contadorImpares = contadorImpares + 1;
            console.log("El número " + numero + " es IMPAR");
        }
    }
    
    console.log("");

    console.log("Total de números pares: " + contadorPares);
    console.log("Total de números impares: " + contadorImpares);

    
    alert("Resultados:\nNúmeros pares: " + contadorPares + "\nNúmeros impares: " + contadorImpares);
}

contadorParesImpares();