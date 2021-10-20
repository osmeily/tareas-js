/*Un maestro desea saber que porcentaje de hombres y que procentajes de mujeres hay en un grupo de estudiantes.*/

let hombres = prompt("Ingrese la cantidad de estudiantes hombres:");
hombres = Number(hombres);
let mujeres = prompt("Ingrese la cantidad de estudiantes mujeres:");
mujeres = Number(mujeres);
let estudiantes = hombres + mujeres;
let porcentajeHombres = (100 / estudiantes) * hombres;
let porcentajeMujeres = 100 - porcentajeHombres
alert(`Tiene ${porcentajeHombres}% de hombres y ${porcentajeMujeres}% de mujeres en su grupo.`)