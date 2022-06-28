var width = screen.width;
var height = screen.height;
$(document).ready(function() {
    $(".no").hover(function() {
        arriba = Math.random() * ((height / 3) + (height / 10)) + 1;
        abajo = Math.random() * ((width / 2) - 1) + 1;
        $(this).css("top", arriba);
        $(this).css("left", abajo);
    });
});

function dijoSi(selfed) {
    document.getElementById("respuesta").style.display = "block";
    document.getElementById("no").style.display = "none";
    selfed.style.display = "none";
}