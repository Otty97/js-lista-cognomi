//1) Raccolta Input

var listEl = document.getElementById("list");
var buttonEl = document.getElementById("button");
var positionEl = document.getElementById("position");

//2) Inizializzazione Output: stampa elementi

buttonEl.addEventListener("click", function () {

   var surnameList = ["Asdrubale", "Favagrossa", "Miscione", "Segapeli", "Occhionero", "Padella", "Brace", "Taik", "Zappa" ];


    listEl.innerHTML = '';

    var cognomeUtente = document.getElementById("name").value;
    surnameList.push(cognomeUtente);
    surnameList.sort();

    for (i = 0; i < surnameList.length; i++) {
         listEl.innerHTML += "<li>" + surnameList[i] + "</li>";
       };

    var userPosition = 1 + surnameList.indexOf(cognomeUtente);

    positionEl.innerHTML = "La Posizione del cognome è la numero:" + userPosition;

});
