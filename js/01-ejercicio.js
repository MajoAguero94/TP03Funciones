//Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.

let meses = ['Enero', 'Febrero', 'Marzo', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',' Octubre', 'Noviembre', 'Diciembre'];
document.write('<h1>Meses del año <h1>')
document.write('<ul>');
for(let mesesAño = 0; mesesAño < meses.length; mesesAño++){
    document.write('<li>' + meses [mesesAño] + '</li>')}
    document.write('</ul>')


