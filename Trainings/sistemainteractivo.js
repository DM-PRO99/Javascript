
// Sistema Interactivo
// Este programa solicita el nombre y la edad del usuario

// Datos de entrada
let nombreUsuario = prompt("¡Hola! ¿Cuál es tu nombre?");
let edadTexto = prompt("¿Cuántos años tienes?");
let edadNumero = Number(edadTexto);

// Operacion

if (isNaN(edadNumero)) {  //es una función que determina si un valor es NaN (Not a Number), es decir, si no es un número válido. 
    console.error("Error: Por favor, ingresa una edad válida en números."); // Si el valor no es numérico, mostrar un mensaje de error en consola
} else {
    //se Verifica si el dato ingresado es menor de 18 años
    if (edadNumero < 18) {
        alert("Hola " + nombreUsuario + ", eres menor de edad. ¡Sigue aprendiendo y disfrutando del código!");
    } else {
        alert("Hola " + nombreUsuario + ", eres mayor de edad. ¡Prepárate para grandes oportunidades en el mundo de la programación!");
    }
}
