//pari o dispari: chiedere all'utente se vuole pari o dispari e un numero intero compreso tra 1 e 9. 
//Generare un numero casuale compreso tra 1 e 9, che sarà la giocata del computer. 
//Stabilire e comunicare chi ha vinto secondo le regole di pari o dispari.



let scelta = prompt ("pari o dispari");
let numero = prompt("Inserisci un numero da 1 a 9");



numero=parseInt(numero);
let random = Math.floor(Math.random() * 10);
if (random == 0){
    random = random + 1;
}
console.log("Il numero random " + random);


let totale = random + numero;
console.log("La somma è " + totale);

var resto = totale % 2;
console.log("Il resto è " + resto);



if(resto==0 && scelta=="pari"){
    alert("Hai vinto");
}else if (resto !=0 && scelta =="dispari"){
    alert("Hai vinto");
}else if(numero > 9 && numero < 1){
    alert("Mi dispiace hai inserito un numero più grande di 9")
}else {
    alert("Hai perso");
}


