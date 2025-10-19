console.log("Buscando números primos del 1 al 100...");

// 1. Bucle principal: recorre los números que queremos probar (del 2 al 100).
//    Empezamos en 2 porque el 1 no es primo.
for (let numero = 2; numero <= 100; numero++) {
  
  // 2. Suponemos que el número ES primo hasta que se demuestre lo contrario.
  let esUnPrimo = true;

  // 3. Bucle anidado: intenta encontrar un divisor para 'numero'.
  //    Este bucle hace el trabajo que antes hacía la función esPrimo.
  for (let i = 2; i < numero; i++) {
    
    // 4. Si encontramos un divisor, el número no es primo.
    if (numero % i === 0) {
      esUnPrimo = false; // Cambiamos nuestra suposición.
      break; // ¡Importante! Salimos del bucle anidado porque ya no hace falta seguir buscando.
    }
  }

  // 5. Si después de revisar, nuestra suposición 'esUnPrimo' sigue siendo 'true'...
  if (esUnPrimo) {
    console.log(numero); // ...entonces lo imprimimos.
  }
}
