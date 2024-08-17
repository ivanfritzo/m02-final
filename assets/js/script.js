$(document).ready(function() {
    $("#contactForm").on("submit",function(event) {
        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let message = $("#message").val().trim();

        if (name ==='' || email ==='' || message ===''){
            $("#errorAlert").removeClass("d-none");
        } else {
            $("#errorAlert").addClass("d-none");
            $("#summaryName").text(name);
            $("#summaryEmail").text(email);
            $("#summaryMessage").text(message);
        }
    });
});