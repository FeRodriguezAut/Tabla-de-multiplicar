// 1. Pedimos al usuario que introduzca un número.
const numeroInput = prompt("Introduce un número para ver su tabla de multiplicar:");

// 2. Convertimos el texto que el usuario escribió a un número entero.
const numero = parseInt(numeroInput);

// 3. Verificamos si la entrada es un número válido.
if (isNaN(numero)) {
  // Si no es un número, mostramos un mensaje de error.
alert("Error: Por favor, introduce un número válido.");
} else {
  // Si es un número válido, procedemos a crear la tabla.
console.log(`--- Tabla de Multiplicar del ${numero} ---`);

  // 4. Usamos un bucle 'for' para contar del 1 al 10.
for (let i = 1; i <= 10; i++) {
    // En cada vuelta del bucle, calculamos el resultado.
    const resultado = numero * i;

    // 5. Mostramos la línea de la tabla en la consola.
    console.log(`${numero} x ${i} = ${resultado}`);
}
}
