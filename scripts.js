// When the button is clicked, display a message
document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("clickBtn");
    const msg = document.getElementById("message");

    btn.addEventListener("click", () => {
        msg.textContent = "Thanks for clicking!";
    });
});
