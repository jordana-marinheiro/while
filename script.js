let spaceshipName = prompt("Bem vindo Piloto.\nPara iniciarmos digite o nome da espaçonave: ")
let numDobras = 0

let answer = confirm("Deseja entrar em dobra espacial? ")
while (answer == true) {
  numDobras += 1
  answer = confirm(+numDobras + " Dobras espaciais realizadas.\nDeseja entrar em outra dobra espacial?")
}
alert("A nave " + spaceshipName + " realizou " + numDobras + " dobras espaciais")