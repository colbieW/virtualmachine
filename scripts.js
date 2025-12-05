let currentCandle = 0;
const candles = document.querySelectorAll(".candle");
const button = document.getElementById("lightButton");

button.addEventListener("click", () => {
    if (currentCandle < candles.length) {
        candles[currentCandle].classList.add("lit");
        currentCandle++;
    } else {
        button.textContent = "All candles are lit!";
        button.disabled = true;
    }
});

// ------------------ COUNTDOWN TIMER ------------------
const hanukkahDate = new Date("December 14, 2025 18:00:00").getTime(); // sundown start

function updateCountdown() {
    const now = new Date().getTime();
    const difference = hanukkahDate - now;

    if (difference <= 0) {
        document.querySelector(".countdown-section").innerHTML =
            "<h2>Hanukkah Has Begun! 🕎✨</h2>";
        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();
