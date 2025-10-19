let entrada = parseInt(prompt("Introduce un número para ver su tabla de multiplicar:"));
if (isNaN(entrada)) {
    for (let i = 1; i <= 10; i++) {
    let resultado = entrada * i;

    if (resultado % 2 === 0) {
        console.log(`${entrada} x ${i} = ${resultado}`); 
    }
        }
    }
else {
    console.log("Error: Por favor, introduce un número válido.");
}

