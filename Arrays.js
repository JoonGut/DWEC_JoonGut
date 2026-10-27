let arr = [95, 95, 14, 83, 58, 33, 65, 52, 7, 72, 13, 46, 19, 31,
27, 36, 30, 86, 88, 88, 68, 16, 5, 14, 41, 56, 89, 11, 6, 29, 72,
11, 69, 36, 16, 11, 82, 84, 32, 84, 95, 98, 76, 99, 100, 12, 89, 1,
92, 27, 66, 48, 38, 49, 30, 40, 87, 19, 31, 37, 5, 32, 9, 33, 98,
94, 5, 15, 4, 88, 47, 34, 83, 8, 31, 4, 2, 72, 31, 39, 15, 10, 46,
78, 11, 21, 92, 22, 83, 3, 6, 71, 39, 54, 50, 77, 13, 85, 7, 36 ];

function ordenar (array_recivida){
  let nuevaArray = [];
  nuevaArray = [...array_recivida];
  nuevaArray.sort();
  return nuevaArray;
}
function esPar(num){
  if (num % 2 === 0) {
    return true;
  }
  return false;
}
function impares_ordenados(){
    let impares = [];
    for (let i = 0; i < arr.length; i++) {
        if (!esPar(arr[i])) {
            impares.push(arr[i]);
        }
    }
    return ordenar(impares);
}
function impares_dos_cifras(){
    let impares_dos_cifras = [];
    for (let i = 0; i < arr.length; i++) {
        if (!esPar(arr[i]) && arr[i] >= 10) {
            impares_dos_cifras.push(arr[i]);
        }
    }
    return ordenar(impares_dos_cifras);
}
function frecuencia(){
    let frecuencia = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (frecuencia[num]) {
            frecuencia[num]++;
        } else {
            frecuencia[num] = 1;
        }
    }
    return frecuencia;
}
console.log((ordenar(arr)));
console.log(impares_ordenados());
console.log(impares_dos_cifras());
console.log(frecuencia());