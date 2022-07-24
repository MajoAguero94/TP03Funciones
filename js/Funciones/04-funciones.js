//Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, 
//la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.


let numeroIngresado = tabla(parseInt( prompt('Ingrese un numero que desea multiplicar')))
function tabla (numero){
     document.write (`<table> 
     <tbody> 
     `)
     for(i=1; i<=10; i++ ){
        let resultado = numero*i
        document.write(`<tr>`)

         document.write (`<td> ${resultado}
         </td>`)
     }
     document.write (` </tbody> </table> 
     `)
}