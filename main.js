let numeroChilometri = prompt("inserisci il numero di chilometri");
let età = prompt("Inserisci l'età");
let prezzo;


parseFloat(numeroChilometri);
totale = numeroChilometri * 0.21;

if (età < 18){
    let sconto;
    sconto = (totale / 100)*20
    totale = totale - sconto;

    
}else if(età > 64){

    sconto = (totale / 100)*40
    totale = totale - sconto;
} else {
    alert("Mi dispiace non hai inserito correttamente i dati")
}



totale=totale.toFixed(2);

document.getElementById("prezzo").innerHTML = totale;
