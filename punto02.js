console.log('Inicio del punto 2-A')
var largo = parseFloat(prompt('Ingrese el largo del terreno para alambrar'))
var ancho = parseFloat(prompt('Ingrese el ancho del terreno para alambrar'))

var perimetro = (largo * 2) + (ancho * 2)
var cantidad = perimetro * 3

alert('Para alambrar el terreno necesita: ' +cantidad+ ' metros de alambre')
console.log('Largo del terreno: ' +largo)
console.log('Ancho del terreno: ' +ancho)
console.log('El perimetro del terreno es: ' +perimetro)
console.log('2-A) Para alambrar el terreno necesita: ' +cantidad+ ' metros de alambre')

console.log('*************************************************************')
console.log('Inicio del punto 2-B')
var radio = parseFloat(prompt('Ingrese el radio del terreno para alambrar'))
const pi = 3.14
var perimetroCircular = 2 * pi * radio
var cant = perimetroCircular * 3

alert('Para alambrar el terreno se necesita: ' +cant+' metros de alambre')
console.log('El radio es de: ' +radio)
console.log('El perimetro del Terreno es de: ' +perimetroCircular)
console.log('2-B) Para alambrar el terreno se necesita: ' +cant+' metros de alambre')

console.log('*************************************************************')
console.log('Inicio del punto 2-C')
var largo1 = parseFloat(prompt('Ingrese los metros de largo del contrapiso'))
var ancho1 = parseFloat(prompt('Ingrese los metros de ancho del contrapiso'))
var superficie = largo1 * ancho1
var cantCemento = superficie * 2
var cantCal = superficie * 3

alert('Se necesitan '+cantCemento+ ' bolsas de cemento y '+cantCal+' bolsas de Cal')
console.log('Los metros cuadrados del contrapiso son de: ' + superficie + 'm^2')
console.log('2-C) Se necesitan '+cantCemento+ ' bolsas de cemento y '+cantCal+' bolsas de Cal' )
