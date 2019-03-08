let lengte = document.getElementById('lengte');
let breete = document.getElementById('breete');
let oppervlakte = document.getElementById('oppervlakte');
let omtrek = document.getElementById('omtrek');
let berekenKnop = document.getElementById('bereken');
let rechthoek = document.getElementById('rechthoek');
let diagonaal =document.getElementById('diagonaal');

bereken.addEventListener('click', berkening);

function berkening() {
    oppervlakte.innerHTML = parseInt(lengte.value) * parseInt(breete.value);
    omtrek.innerHTML = 2 * parseInt(lengte.value) + 2 * parseInt(breete.value);
    diagonaal.innerHTML = Math.sqrt(Math.pow(parseInt(lengte.value), 2) + Math.pow(parseInt(breete.value), 2));
}
