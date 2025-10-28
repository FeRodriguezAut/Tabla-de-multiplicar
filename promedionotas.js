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