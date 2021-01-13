var hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
var hexBtn = document.querySelector(".generate-btn");
var bodyBcg = document.querySelector("body");
var hex =  document.querySelector(".hex-code") 
hexBtn.addEventListener("click", getHex);
function getHex(){
    var hexCol = "#";
    for(var i=0; i<6; i++){
        var random = Math.floor(Math.random()*hexNumbers.length);
        hexCol += hexNumbers[random]
    }
    bodyBcg.style.backgroundColor = hexCol;
    hex.innerHTML = hexCol;
}