//Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo,
//cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:



// Escribe por pantalla el elemento que ocupa la segunda posición.
// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

//

let ciudadesMencionadas = [];

document.write('<h2> Ciudades Ingresadas </h2>')
while (confirm("Desea ingresar una ciudad?")) {
  let ciudad = [prompt("Ingrese un ciudad")];
  ciudadesMencionadas.push(ciudad);
  document.write("<ul>");
  for (i = 0; i < ciudad.length; i++) {
      document.write(`<li>  ${ciudad[i]} </li>`);
    }
    document.write("</ul>");
    
    
}
// Mostrar la longitud del arreglo.
document.write('<h3>Longitud del arreglo: </h3>'+ ciudadesMencionadas.length );
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.

document.write('<h3>Ciudades en la posicion 1ra, 3ra y ultima</h3>' );

document.write( '<br>' + ciudadesMencionadas[0]);
document.write( '<br>' + ciudadesMencionadas[2]);
document.write( '<br>' + ciudadesMencionadas[ciudadesMencionadas.length -1]);


document.write('<h3>Ciudad que ocupa la 2da posicion</h3>' );
document.write( '<br>' + ciudadesMencionadas [1])
  
document.write('<h3>Modicar la2da posicion por Barcelona</h3>' );
ciudadesMencionadas.splice(1,1, 'Barcelona')
document.write("<ul>");
  for (i = 0; i < ciudadesMencionadas.length; i++) {
      document.write(`<li>  ${ciudadesMencionadas[i]} </li>`);
    }
    document.write("</ul>");

// Añade en última posición la ciudad de París.
document.write('<h3>Añadir en ultima posicion ciudad de Paris</h3>' );
ciudadesMencionadas.push('Paris');
document.write("<ul>");
  for (i = 0; i < ciudadesMencionadas.length; i++) {
      document.write(`<li>  ${ciudadesMencionadas[i]} </li>`);
    }
    document.write("</ul>");



