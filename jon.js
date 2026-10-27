console.log("Soy Jon y prefiero la tortilla de patatas con cebolla");
//EJERCICIO 1
let precio = 100;
let iva = 0.21;

function precio_total(precio, iva) {
    return precio * (1 + iva);
}
console.log(`Precio: ${precio}, IVA: ${iva}, Total: ${precio_total(precio, iva)}`);


//EJERCICIO 2
function area(lado){
    return Math.pow(lado,2);
}
function perimetro (lado){
    return Math.pow(lado,4);
}
let lado1 = 4;
area = area(lado1);
perimetro = perimetro(lado1)
console.log(`El área de un cuadrado de lado ${lado1} es ${area}`);
console.log(`El perímetro de un cuadrado de lado ${lado1} es ${perimetro}`);

//Ejercicio 3 
function cal_cociente(num1,num2){
    let cociente = num1 % num2;
    if (cociente ==0){
        console.log("Error");
    }else{
        console.log(`El cociente de ${num1} y ${num2} es: ${cociente}`);
    }
}
let num1 = prompt("Ingresa el primer número:");
let num2 = prompt("Ingresa el segundo número:");

//Convertir a int
num1 = parseFloat(num1);
num2 = parseFloat(num2);

cal_cociente(num1,num2);

//Ejercicio 4
function diferencia_mayor_menor(num1,num2){
    let resta;
    if(num1 > num2){
        resta = num1 - num2;
        console.log(`La diferencia entre el mayor ${num1} y el pequeño ${num2} es: ${resta}`)
    }else{
        resta = num2 - num1;
        console.log(`La diferencia entre el mayor ${num1} y el pequeño ${num2} es: ${resta}`)
    }
}
num1 = prompt("Ingrese el primer numero: ");
num2 = prompt("Ingresa el segundo número:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

//Ejercicio 5 
let cantidad;
function descuento_tienda(precio,cantidad){
    let descuento = 0.15;
    let precio_final;
    if (cantidad > 10 && precio > 40){
        precio_final = precio * descuento;
        console.log(`El coste total era de ${precio} con el desceunto de ${descuento} el precio final es ${precio_final}`)
    }else{
        if (cantidad < 10){
            console.log(`No se aplica descuento porque la cantidad ${cantidad} es inferior a 10`)
        }else{
            console.log(`El precio ${precio} no es superior a 40`)
        }
    }
}
cantidad = prompt("Ingrese la cantidad de articulos que quiere comprar: ");
precio = prompt("Ingrese el precio que eso tendra: ");
descuento_tienda(precio,cantidad);

//Ejercicio 6
//let numero_azar = prompt("Ingrese la cantidad de articulos que quiere comprar: ");
let numero_azar = Math.floor(Math.random() * 10) + 1;
numero_azar = parseInt(numero_azar);
if(numero_azar < 1 || numero_azar > 5){
    while(numero_azar < 1 || numero_azar > 5){
        numero_azar = prompt("Ingrese la cantidad de articulos que quiere comprar: ");
    }
}else{
        console.log(`Correcto su numero ${numero_azar} entra en el rango [1-5]`)
}

//Ejercicio 7

function esPrimo(num){
    let cont = 2;
    if (num > 1){
        while (cont < num && num % cont != 0) {
            cont++;
        }
        if (cont == num) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}
let ingresa_primo = prompt("Ingresa un numero primo: ");
ingresa_primo = parseInt(ingresa_primo);
console.log(`El numero ${ingresa_primo} es primo? ${esPrimo(ingresa_primo)}`);

//Ejercicio 8
function suma_distintos_cero(num){
    let lista_numeros = []
    while(num != 0){
        lista_numeros.push(num)
        num = prompt("Ingresa un numero: ");
        num = parseInt(num);
    }
    return lista_numeros;
}
let num = prompt("Ingresa un numero: ");
num = parseInt(num);
let lista_sin_ceros = suma_distintos_cero(num);
let num_maximo = Math.max(...lista_sin_ceros);
let num_min = Math.min(...lista_sin_ceros);
console.log(`El numero mas pequeño introducido ${num_min} y el mayor es ${num_maximo}`);

//Ejercicio 9
function dia_semanas(dia_semana) {
    let dias_semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    if (dia_semana >= 0 && dia_semana <= 6) {
        return dias_semana[dia_semana];
    } else {
        return "Número fuera de rango";
    }
}

let dia_semana = prompt("Ingrese un numero [0(domingo)-6(Sabado)] :");
dia_semana = parseInt(dia_semana);
let dia_string = dia_semanas(dia_semana);
console.log(`El dia es ${dia_string}`);

//Ejercicio 10

function sumaLista(array){
    let suma = 0;
    for (let i = 0; i < array.length; i++){
        suma += array[i];
    }
    return suma;
}
function rellenarArray(array){
    for (let i = 0; i < array.length; i++){
        let numero_aleatorio = Math.floor(Math.random() * 10) +1;
        array[i] = numero_aleatorio;
    }
    return array;
}
let array_10 = new Array(5);
let suma_total = 0;
array_10 = rellenarArray(array_10);
suma_total = sumaLista(array_10);
console.log(`La suma de tu arra : ${array_10} es de ${suma_total}`);

//Ejercicio 11
function vocal_o_consonante(letra){
    let vocales = ['a','e','i','o','u'];
    for (let i = 0; i < vocales.length; i++){
        if (vocales[i] == letra){
            return true;
        }
    }
    return false;
}
let letra = prompt("Ingresa una letra: ");
letra = letra.toLowerCase();
if (vocal_o_consonante(letra)){
    console.log(`Tu letra: ${letra}, es una vocal`)
}else{
    console.log(`Tu letra: ${letra}, es una consonante`)
}

//Ejercicio 12
function encadenar_array (array){
    return array.join('-');
}
let array = ["Hola","me","llamo","Jon"]
console.log(encadenar_array(array))


//Ejercicio13 
function buscar_producto(producto,productos){
    for (let i = 0 ;i < productos.length; i++){
        if (productos [i][0] == producto.toLowerCase()){
            return productos[i][1];
        }
    }
    return -1;
}
let productos = [
    ["monitores",22.34],
    ["teclado",11.3],
    ["ratones",5.3]
];

let producto = prompt("Ingrese el producto que quiere buscar: ");
buscar_producto(producto,productos);
if (buscar_producto(producto,productos) == -1){
    console.log("El producto no se ha encontrado");
}else{
    console.log(`El producto ${producto} tiene un precio de ${buscar_producto(producto,productos)}`);
}