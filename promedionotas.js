// Función para calcular el promedio de un estudiante
function calcularPromedio(notas) {
    let suma = 0;
    for (let i = 0; i < notas.length; i++) {
        suma += notas[i];
    }
    return suma / notas.length;
}

// Función para determinar si aprueba o reprueba
function determinarEstado(promedio) {
    if (promedio >= 3.0) {
        return "APROBADO";
    } else {
        return "REPROBADO";
    }
}

// Función principal
function procesarEstudiantes() {
    const numeroEstudiantes = 5;
    const numeroNotas = 3; // Cantidad de notas por estudiante

// Ciclo para procesar cada estudiante
    for (let i = 1; i <= numeroEstudiantes; i++) {
        console.log("--- Estudiante " + i + " ---");
        
        let notas = [];
        
        // Ciclo para ingresar las notas de cada estudiante
        for (let j = 1; j <= numeroNotas; j++) {
            let nota = parseFloat(prompt("Ingrese la nota " + j + " del estudiante " + i + ":"));
            
            // Validar que la nota sea un número válido
            while (isNaN(nota) || nota < 0 || nota > 5) {
                alert("Nota inválida. Ingrese un valor entre 0 y 5");
                nota = parseFloat(prompt("Ingrese la nota " + j + " del estudiante " + i + ":"));
            }
            
            notas.push(nota);
        }

        // Calcular promedio
        let promedio = calcularPromedio(notas);