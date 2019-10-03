//Type Conversion
// Number to String
let val;
val = String(4 + 4);

console.log(val); //8
console.log(typeof val); //string
console.log(val.length); // 1
//Otra forma (5).toString();

// String to Number
let val2 = Number("5");

//Math Object
val = Math.PI; // Returns PI
val = Math.round(2.4); // Redondea automaticamente
val = Math.ceil(2.4); // Redondea arriba
val = Math.floor(2.4); // Redondea abajo
val = Math.sqrt(64);
val = Math.abs(-3); // Devuelve el mismo numero, signo contrario
val = Math.pow(8, 2); // 8 al cuadrado
val = Math.max(1, 10, 55, 9); // 55. Si es min, 1
val = Math.floor(Math.random() * 20); // Devuelve un numero random del 1 al 20;

//Template strings
const name = "JOhn";
const age = 30;
const job = "Web dev";
const city = "Miami";
let html;

html = `
<ul>
    <li>Name: ${name}</li>
    <li>Age: ${age}</li>
    <li>Job: ${job}</li>
    <li>City: ${city}</li> 
</ul>`;
//Entre las llaves tambien pueden ir funciones, objetos, condicionales etc.
document.body.innerHTML = html;
