//2.2 Crea tres variables: una con un número entero, otra con un número decimal y otra con una cadena de texto. Muestra cada una en la consola usando console.log().
//Primer Variable
let numero = 0;
    console.log(numero);
//Segunda Variable
let decimal = 1.9;
    console.log(decimal);
//Tercer Variable
let texto = "Soy Diego";
    console.log(texto);

//2.3 Declara una constante llamada PI con el valor 3.1416. Intenta cambiar su valor y observa qué sucede.
const PI = 3.14159;
console.log(PI);


//2.4 Declara una variable sin asignarle valor. Muestra en consola qué contiene.
let contenido = 1;
//Me arrojó erro en la linea 17 o palabra desconocida


//2.5 Crea una variable con valor null y otra con un valor booleano. Muestra ambos en consola.
// Con valor NULL
let edad = null; // La variable 'edad' se declara e inicializa como null, indicando que no tiene un valor asignado todavía.
   console.log(edad);


//Valor Booleano    
let estaActivo = true;
let tienePermiso = false;
if (estaActivo) {
  console.log("La función está activa.");
} else {
  console.log("La función está inactiva.");
}




//Parte 3: Entrada y Salida de Datos
//3.1 Usa prompt() para pedirle al usuario su edad y guárdala en una variable. Luego, muestra en consola un mensaje que diga "Tienes [edad] años".
let años = prompt("Por favor, ingresa tu edad:");
console.log("Hola,Tienes " + años + "años!");

//3.2 Usa alert() para mostrar un mensaje de bienvenida.
alert("¡Hola, mundo Bienvenios a mi primer taller de Javascript!");

//3.3 Usa confirm() para preguntar al usuario si desea continuar. Muestra en consola el valor que devuelve esta función.
alert("¿Deseas continuar?");

//Parte 4: Operadores
//4.1 Declara dos variables numéricas. Realiza y muestra los resultados de las siguientes operaciones: suma, resta, multiplicación, división y módulo.
let numero1 = 50;
let numero2 = 20;
//Operaaciones

let suma = numero1 + numero2;
console.log("Suma:",suma);

let resta = numero1 - numero2;
console.log("Resta:",resta);

let multiplicación = numero2 * numero1
console.log("Multiplicación:",multiplicación);

let division = numero1 / numero2;
console.log("División:",division);

let modulo = numero1 % numero2;
console.log("Módulo (50 % 20):", modulo);


//4.2 Declara dos variables con cadenas de texto y únelas en una nueva variable usando el operador de concatenación.

let primernombre = "Diego";
let primerapellido = "Mena";
let nombrecompleto = primernombre + primerapellido;
console.log (nombrecompleto);

//4.3 Evalúa y muestra en consola el resultado de las siguientes comparaciones:


console.log ("5 == '5':", 5 == "5");
console.log ("5 === '5':", 5 === "5");
console.log ("true && false:", true && false);
console.log ("False || true:", false || true);
console.log ("!true:", !true);

//Parte 5: Condicionales

//5.1 Crea un programa que pida al usuario un número y muestre en consola si es mayor, menor o igual a 10.
let number = prompt("Ingresa un número,por favor:");
numero = datonumerico(numero);

if (isNaN(number)) {
  console.log ("Dato incorrecto,ingresa un dato correcto.");
} else {
  if (number > 10) {
    console.log("EL número ingresado ("+number+") es mayor que 10.");
  } else if (number < 10) {
    console.log("El número ingresado ("+number+") es menor que 10.");
  } else {
    console.log ("El número ingresado ("+number+") es igual a 10.");
  }
}

//5.2 Crea un programa que solicite el nombre de un usuario y compare si se llama "Admin". Si es así, muestra un mensaje de bienvenida especial, de lo contrario, un mensaje genérico.
let lastname = prompt("Cuál es tu nombre?");

if (lastname === "Admin") {
  alert ("!Hola Admin Bienvenido:");
} else {
  alert ("Hola" + lastname+ ", Bienvenido.");
}


//5.3 Usa el operador ternario para mostrar si un número ingresado es par o impar.
let num = prompt("Escribe un número:");

num= number(num);
let resultado = (num % 2 ===0) ? "Es par" : "Es impar";
alert(resultado);

//Parte 6: Consola del Navegador
//Un mensaje informativo (console.info)
console.info("About of the cars");
console.warn("Advertencia");
console.error("Ingresa un número correcto");
console.group("aplication");
console.groupEnd("Terminar");
console.time("loop");
console.timeEnd("loop");

//Parte 7: Comentarios

// aqui se solicita al usuario que ingrese un nombre.
let nombre = prompt("Cuál es tu nombre?");

//Aqui es la operacion si cumple con los parámetros sigue el bucle con condicional y nos arrojará el siguiente mensaje.
if (nombre === "Admin") {
  alert ("!Hola Admin Bienvenido:");
} else {        //dependiendo de cada condiconal que se cumpla asi mismo arroja un mensaje predeterminado.
  alert ("Hola" + nombre+ ", Bienvenido.");
}

//Parte 8: Desafío Final
//8.1 Crea un archivo HTML y vincúlalo con un archivo .js externo. En ese archivo: