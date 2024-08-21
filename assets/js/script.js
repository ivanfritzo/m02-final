$(document).ready(function() {
    $("#contactForm").on("submit",function(event) {
        event.preventDefault();
/* ---------- Se toman los valores de los campos del formulario y se eliminan los espacios vacíos ---------- */
        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let message = $("#message").val().trim();
/* ---------- Verifica si alguno de los campos está vacío ---------- */
        if (name ==='' || email ==='' || message ===''){
/* ---------- Muestra el mensaje de error ---------- */
            $("#errorAlert").removeClass("d-none");
        } else {
/* ---------- Deja el mensaje de error oculto---------- */
            $("#errorAlert").addClass("d-none");
/* ---------- Actualiza los elementos del resumen con los valores ingresados---------- */
            $("#summaryName").text(name);
            $("#summaryEmail").text(email);
            $("#summaryMessage").text(message);
        }
    });
});


document.getElementById('navbarBrand').addEventListener('click', function() {
    location.reload();
});
