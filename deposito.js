document.addEventListener("DOMContentLoaded", function() {
    var username = localStorage.getItem("username");
    if (username) {
        document.getElementById("welcomeMessage").textContent = "Bienvenido, " + username + "!";
        document.getElementById("cardHolder").textContent = username; // Actualiza el nombre del titular de la tarjeta
    }
