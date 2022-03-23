//pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. 
//Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. 
//Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.



let scelta = prompt ("Pari o Dispari");
let numero = prompt("Inserisci un numero da 1 a 9");



numero=parseInt(numero);
let random = Math.floor(Math.random() * 10);
if (random == 0){
    random = random + 1;
}
console.log(random);


let totale = random + numero;
console.log(totale);

var resto = totale % 2;
console.log(resto);



if(resto==0 && scelta=="Pari"){
    alert("Hai vinto");
}else if (resto !=0 && scelta =="Dispari"){
    alert("Hai vinto");
}else {
    alert("Hai perso");
}


