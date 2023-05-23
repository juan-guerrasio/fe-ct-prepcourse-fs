
/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let array = [];
   for (const key in objeto) {
      let par = [key,objeto [key]];
      array.push(par)
      }
      return array;
   }



function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let objeto = {};
   let array=string.split("").sort()

   array.forEach(letra => {
      if(!objeto[letra])objeto[letra]=1;
      else objeto[letra]++;
   });
   return objeto;

}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let mayusculas = "";
   let minusculas = "";

   for (let i = 0; i < string.length; i++) {
      if(string[i]===string[i].toUpperCase()){
         mayusculas = mayusculas.concat(string[i])
      }
      else{
         minusculas = minusculas.concat(string[i])
      }
   }
   return mayusculas + minusculas;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   const array = frase.split(" ");

   array.forEach((string, index) => {
      var palabraArray = string.split("");
      array[index] = palabraArray.reverse().join("");
   });

   var stringReverse = array.join(" ");
   return stringReverse
}

function capicua(numero){
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var numTostring = numero.toString()
   var numArray = numTostring.split("")
   var numReversSting = numArray.reverse()
   var numRveSting = numReversSting.join("");

   if(numero.toString() === numRveSting){
      return "Es capicua"
   }else{
      return "No es capicua"
   }

}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var borrar = string.split("");
   var filtrar = borrar.filter((letra)=> letra !== "a" && letra !== "b" && letra!== "c")

   var nuevoString = filtrar.join("")
   return nuevoString
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:

   return arrayOfStrings.sort( (a,b) => (a.length - b.length) )
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   return array1.filter(Element => (
      array2.includes(Element)
   ))
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

function soloStrings(array) {
   // La funcion llamada 'soloStrings' recibe como argumento un arreglo de enteros y strings llamado 'array'.
   // Debe devolver un arreglo con solo los strings.
   // Ej:
   // soloStrings([1, 'Henry', 2, 'Toni']) debe retornar ['Henry', 'Toni']
 
   // Tu código aca:
   var arrayPalabra = [];
 
   for (i = 0; i < array.lenght; i++ ){
     if(typeof array[i] === "string"){
       arrayPalabra.push(array[i])
     }
   }
   return arrayPalabra;
}


