let nombre = "Miguel";
let apellido = "Ruiz";
let sueldoActual = 120000;
let porcentajeDeAumento = 25;
let calculoAumeto = (sueldoActual*porcentajeDeAumento)/100;
let nuevoSueldo = sueldoActual+calculoAumeto;

let texto = `
Hola, estimado ${nombre} ${apellido}
En base a su sueldo actual:
$${sueldoActual}
Ha recibido un aumento del 25%:
$${calculoAumeto}
y su nuevo sueldo es de: $${nuevoSueldo} 
`
console.log(texto)