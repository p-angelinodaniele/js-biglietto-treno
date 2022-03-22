var anni1 = prompt("Inserisci gli anni della prima persona");
var anni2 = prompt("Inserisci gli anni della seconda persona");



if(anni1 < anni2){

    alert("La seconda persona è più grande");
    
}else if(anni2 < anni1){

    alert("La prima persona è più grande");

}else if (anni1==anni2){
    alert("Hanno la stessa età");
}