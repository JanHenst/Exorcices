let straal = document.getElementById('straal');
let oppervlakte = document.getElementById('oppervlakte');
let omtrek =document.getElementById('omtrek');
let berekenKnop=document.getElementById('berekenKnop');

berekenKnop.addEventListener('click',berekening);

function berekening() {
    oppervlakte.innerHTML= Math.PI*Math.pow(parseInt(straal.value),2);
    omtrek.innerHTML= 2*Math.PI*parseInt(straal.value);
}
