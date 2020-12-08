console.log('Inicio del punto 1-A-B-C')
var precio1 = parseFloat(prompt('Ingrese el precio del 1° producto')) 
var precio2 = parseFloat(prompt('Ingrese el precio del 2° producto'))
var precio3 = parseFloat(prompt('Ingrese el precio del 3° producto'))
var suma
suma = precio1 + precio2 + precio3
console.log('1° precio: ' +precio1)
console.log('2° precio: ' +precio2)
console.log('3° precio: ' +precio3)
alert('La suma de los tres precios es: ' + suma)
console.log('1-A) La suma de los tres precios es: ' + suma)

var promedio = suma/3
alert('El promedio de los tres precios es: ' +promedio)
console.log('1-B) El promedio de los tres precios es: ' +promedio)

var precioIVa = suma * 1.21
alert('El precio final con IVA es: ' +precioIVa)
console.log('1-C) El precio final con IVA es: ' +precioIVa)
