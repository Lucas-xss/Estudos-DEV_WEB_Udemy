
document.write(" 1) Baseado no exemplo da aula Praticando um pouco - Percorrendo e listando itens deArrays, implemente a mesma solução, porém utilizando o comando for." + "<br><br>")


var lista_frutas = Array(); 
lista_frutas[0] = 'Banana'; 
lista_frutas[1] = 'Maçã'; 
lista_frutas[2] = 'Morango'; 
lista_frutas[3] = 'Uva'; 

for (var i = 0; i < lista_frutas.length; i++) { 
document.write(lista_frutas[i]); 
console.log(lista_frutas[i]) 
} 
document.write("<hr>")
document.write("2) Baseado no exemplo da aula Praticando um pouco  Criando uma tabuada de 1 a 10 laços encadeados, implemente a mesma solução, porém utilizando o comando while." + "<br><br>")

var x = 1; 
var y = 1; 
while (x <= 10) { 
y = 1; 
while (y <= 10) { 
console.log(x + ' x ' + y + ' = ' + x * y ); 
document.write(x + ' x ' + y + ' = ' + x * y + "<br>"); 
y++; 
} 
console.log("\n"); 
document.write("<hr/>"); 
x++; 
}