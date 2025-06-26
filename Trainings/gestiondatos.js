//Crear los objetos
const productos = {
  producto1: { id: 1, nombre: "Peras", precio: 30000},
  producto2: { id: 2, nombre: "Piñas", precio: 1500000},
  producto3: { id: 3, nombre: "Cocos", precio: 2500000 },
  producto4: { id: 4, nombre: "Naranjas", precio: 200 },
  producto5: { id: 5, nombre: "Manzanas", precio: 45000},
  productos6: {id: 6, nombre: "Uvas", precio:8000000},
  producto7: { id: 7, nombre: "Laptop", precio: 300000000 },
  producto8: { id: 8, nombre: "Mouse", precio: 15000000 },
  producto9: { id: 9, nombre: "Teclado", precio: 2500000 }
};

console.log("Productos (objeto):");
console.log(productos);

//Convertir el objeto a un Set
// Primero, extraemos los valores del objeto y los convertimos en un array
const productosArray = Object.values(productos);

// Creamos un Set (los sets no permiten duplicados)
const productosSet = new Set(productosArray);

console.log("Productos únicos (Set):");
for (const prod of productosSet) {
  console.log(prod);
}

//Crear un Map para asociar categorías
const categoriasMap = new Map();
categoriasMap.set("Frutas", "Peras");
categoriasMap.set("Frutas", "Piñas");
categoriasMap.set("Frutas", "Cocos");
categoriasMap.set("Frutas", "Naranjas");
categoriasMap.set("Frutas", "Uvas");
categoriasMap.set("Frutas", "Manzanas");
categoriasMap.set("Electrónica", "Laptop");
categoriasMap.set("Accesorios", "Mouse");
categoriasMap.set("Periféricos", "Teclado");

console.log("Categorías y productos (Map):");
categoriasMap.forEach((valor, clave) => {
  console.log(`Categoría: ${clave}, Producto: ${valor}`);
});

//Recorrer el objeto con for...in
console.log("Recorrido del objeto productos con for...in:");
for (const key in productos) {
  console.log(`${key}:`, productos[key]);
}

//Recorrer el Set con for...of
console.log("Recorrido del Set con for...of:");
for (const item of productosSet) {
  console.log(item);
}


//Validaciones
console.log("📌 Validaciones:");
console.log("Cantidad de productos en objeto:", Object.keys(productos).length);
console.log("Cantidad de productos únicos en Set:", productosSet.size);
console.log("Cantidad de categorías en Map:", categoriasMap.size);
