/*Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuántas pulgadas debe pedir con base en los metros que requiere. (1 pulgada = 0.0254 m).*/

const pulgada = 0.0254;
let metros = prompt("¿Cuantos metros necesita?: ");
metros = Number(metros);
alert(`Debe pedir ${metros / pulgada} pulgadas.`)