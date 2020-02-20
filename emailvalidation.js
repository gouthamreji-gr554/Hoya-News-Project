function validate() {
    var Email = document.getElementById("Email").value;
    var patcheck = new RegExp("^[a-z0-9]");
    if (Email.indexOf("@") > -1) {
        document.getElementById("div2").innerHTML = "";
    } else {
        document.getElementById("div2").innerHTML = "Enter the correct email address";
        document.getElementById("div2").style.color = "Red";

    }
}

$(function() {
    $("#t-btn").click(function() {
        window.location.href = "News.html";
    });
});