//alert('ey');
/***********EJERCICIOS DESTRUCTURING************/
/***********************************************/
//1. Dado el siguiente objeto:
const empleados = [
  { name: 'Luis', email: 'Luis@gmail.com' },
  { name: 'Ana', email: 'Ana@gmail.com' },
  { name: 'Andrea', email: 'Andrea@gmail.com' },
];

// 1. Extrae la empleada Ana con todos sus datos personales:
// {"name":"Ana", "email":"Ana@gmail.com"}

const [, persona] = empleados;

console.log(persona);

// 2. Extrae el email del empleado Luis --> Luis@gmail.com
const [persona1] = empleados;
console.log(persona1);
let { email } = persona1;
console.log(email);

//3. Usa la desestructuración para intercambiar los valores de a y b

// Inicialmente
// let a = 5;
// let b = 3;
// // Al final
// let a = 3;
// let b = 5;

let a, b;

[a, b] = [3, 5];

console.log(a);
console.log(b);

// const cambiarvalor = {(a=3, b=5)=>
//   console.log(a,b)

// }

/***************EJERCICIOS SPREAD/REST*************************/
// 4. Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.

// sumEveryOther(6, 8, 2, 3, 1); //20
// sumEveryOther(11, 3, 12); //26

const sumEveryOther = (...parametros) => {
  let sum = 0;
  parametros.forEach((numero) => {
    //sum = sum += numero;
    sum += numero;
  });
  console.log(sum);
};

sumEveryOther(6, 8, 2, 3, 1); //20

// 5. Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.

// const addOnlyNums = (...parametros) => {
//   let suma = 0;
//   if (typeof parametros === 'number') {
//     parametros.forEach((numero) => {
//       suma += numero
//     }

//   }
//   console.log(suma);
// };

//addOnlyNums(1, 'perro', 2, 4);

const addOnlyNums = (...parametros) => {
  let suma = 0;
  parametros.forEach((numero) => {
    if (typeof numero === 'number') {
      suma += numero;
    }
  });
  console.log(suma);
};

addOnlyNums(1, 'perro', 2, 4);

// 6. Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.

const countTheArgs = (...parametros) => {
  let cont = 0;
  parametros.forEach((numero) => {
    cont = cont + 1;
  });
  console.log(cont);
};

countTheArgs('gato', 'perro');
countTheArgs('gato', 'perro', 'pollo', 'oso');

// 7. Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).

array1 = [1, 2, 3];
array2 = [4, 5, 6];

const combineTwoArrays = (array1, array2) => {
  let sumaArr = [...array1, ...array2];
  console.log(sumaArr);
};

combineTwoArrays(array1, array2);

// array4 = [1, 2, 3];
// array5 = [4, 5, 6];

// const sumar4y5 = [...array4, ...array5];
// console.log(sumar4y5);

/******************************EXTRAS************************/
// 8. Dado el siguiente objeto:

const HIGH_TEMPERATURES = {
  yesterday: 30,
  today: 35,
  tomorrow: 32,
};
//const maximaHoy = HIGH_TEMPERATURES.today;
//const maximaManana = HIGH_TEMPERATURES.tomorrow;

//console.log(maximaHoy);
//console.log(maximaManana);

const { today: maximaHoy, tomorrow: maximaManana } = HIGH_TEMPERATURES;

console.log(maximaHoy);
console.log(maximaManana);

//9. Escriba una función llamada onlyUniques que acepte cualquier número de argumentos y devuelva un array de elementos únicos, sin repetidos.

let onlyUniques = (...argumentos) => {
  let newArr = [...new Set(argumentos)];
  //argumentos.forEach((elemento) => {});
  console.log(newArr);
};

//onlyUniques('gato', 'pollo', 'cerdo', 'cerdo');
//['gato', 'pollo', 'cerdo']
onlyUniques(1, 1, 2, 2, 3, 6, 7, 8); //[1, 2, 3, 6, 7, 8]

// const ages = [26, 27, 26, 26, 28, 28, 29, 29, 30];
// const uniqueAges = ages.filter((x, i, a) => a.indexOf(x) == i);
// console.log(uniqueAges);

// const soloedad = ages.reduce((a, b) => a + b);
// console.log(soloedad);

// 10. Escriba una función llamada combineAllArrays que pueda recibir cualquier cantidad de arrays como argumentos y los combine todos en un solo array.
// let combineAllArrays = (...parametros) => {
//   //let sumaArr2 = [...parametros];
//   let sumaArr3 = [];
//   parametros.forEach((arr) => {
//     sumaArr3 = [...arr][...arr];
//     console.log(sumaArr3);
//   });
//   console.log(sumaArr2);
//   console.log(parametros.length);
// };

// combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1], [3, 4, 5]);
let combineAllArrays = (...arrays) => {
  let sumarArr = [];
  arrays.forEach((arr) => {
    sumarArr = sumarArr.concat(arr);
  });
  console.log(sumarArr);
};

combineAllArrays([3, 6, 7, 8], [2, 7, 3, 1], [3, 4, 5]);

// 11. Escriba una función llamada sumAndSquare que reciba cualquier número de argumentos, los eleve al cuadrado y devuelva la suma de todos los valores cuadrados.

let sumAndSquare = (...parametros) => {
  let result = 0;
  parametros.forEach((num) => {
    result += num ** 2;
  });
  console.log(result);
};
sumAndSquare(1, 2, 3);
