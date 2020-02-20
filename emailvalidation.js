function validate() {
    var Email = document.getElementById("t-email").value;
    var patcheck = new RegExp("^[a-z0-9]");
    if (Email.indexOf("@") > -1) {
        document.getElementById("div2").innerHTML = "";
    } else {
        document.getElementById("div2").innerHTML = "Enter a valid email address";
        document.getElementById("div2").style.color = "Red";

    }
}

$(function() {
    $("#t-btn").click(function() {
        if (!$("#t-email").val() || !$("#t-pass").val()) {
            document.getElementById("div2").innerHTML = "Enter email and password";
            document.getElementById("div2").style.color = "Red";
        } else {
            window.location.href = "https://ac1956.github.io/Hoya-News-Project/News.html";
        }

    });
});