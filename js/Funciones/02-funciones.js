//Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. 
//A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.

let parrafo = tiposDeLetra(prompt('Ingrese un texto'))



function tiposDeLetra(texto) {
    if(texto === texto.toLowerCase()){
        document.write ('El texto esta escrito con minuscula')
    }else if (texto === texto.toUpperCase()){
        document.write ('Su texto esta escrito con mayuscula')
    }else (document.write ('El texto esta escrito con mayusculas y minusculas'))
    
}