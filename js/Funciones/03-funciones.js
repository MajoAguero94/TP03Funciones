// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, 
//luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

let lado1 = parseInt(prompt ('Ingrese el valor de uno de los lados de un rectangulo'))
let lado2 = parseInt(prompt ('Ingrese un segundo valor de los lados de un rectangulo'))

let resultadoFinal = perimetro (lado1,lado2)
document.write ('El perimero del rectagulo es: ' + resultadoFinal)


 function perimetro (a,b){
  let resultado = 2* (a + b)
  return (resultado)
 }

