function saludoPersonalizado(nombre, edad) {
  let saludo = "hola, me llamo " + nombre + " y tengo " + edad + " años";
  return saludo;
}

let saludo = saludoPersonalizado("Isay", 37);
console.log(saludo);
