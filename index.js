var button = document.getElementById("reserveButton");
var modal = document.getElementById("reserveModal");
var close = document.getElementsByClassName("close");

button.onclick = function() {
    modal.style.display = "block";
}

close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}