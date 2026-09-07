/* =====================================
   BLUE FLOATING HEARTS
===================================== */

const heartsContainer = document.getElementById("hearts");

function createHeart() {

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "💙",
        "♡",
        "♥",
        "💙",
        "♡"
    ];

    heart.innerHTML = hearts[
        Math.floor(Math.random() * hearts.length)
    ];

    heart.style.left = Math.random() * 100 + "%";

    const size = Math.random() * 18 + 12;
    heart.style.fontSize = size + "px";

    const duration = Math.random() * 7 + 6;
    heart.style.animationDuration = duration + "s";

    heart.style.animationDelay =
        Math.random() * 2 + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, (duration + 3) * 1000);
}

setInterval(createHeart, 500);

for (let i = 0; i < 15; i++) {
    setTimeout(createHeart, i * 150);
}


/* =====================================
   YOUTUBE MUSIC
===================================== */

let musicPlaying = false;

function playMusic() {

    const player = document.getElementById("youtubePlayer");

    if (!player) return;

    const button = document.querySelector(".music-btn");

    if (!musicPlaying) {

        player.src =
            "https://www.youtube.com/embed/ptys7c83638?autoplay=1&enablejsapi=1";

        musicPlaying = true;

        if (button) {
            button.innerHTML = "🎵 Lagu Sedang Diputar";
        }

    } else {

        player.src =
            "https://www.youtube.com/embed/ptys7c83638?enablejsapi=1";

        musicPlaying = false;

        if (button) {
            button.innerHTML = "🎵 Putar Lagu";
        }
    }
}


/* =====================================
   SURPRISE
===================================== */

function openSurprise() {

    const message =
        document.getElementById("surpriseMessage");

    const button =
        document.querySelector(".surprise-btn");

    if (!message) return;

    message.classList.toggle("show");

    if (message.classList.contains("show")) {

        if (button) {
            button.innerHTML =
                "💙 Surprise Terbuka 💙";
        }

        createHeartBurst();

    } else {

        if (button) {
            button.innerHTML =
                "Buka Sekarang 💙";
        }
    }
}


/* =====================================
   HEART BURST
===================================== */

function createHeartBurst() {

    if (!heartsContainer) return;

    const symbols = [
        "💙",
        "💙",
        "♡",
        "💙",
        "✨"
    ];

    for (let i = 0; i < 25; i++) {

        const heart =
            document.createElement("div");

        heart.classList.add("heart");

        heart.innerHTML =
            symbols[
                Math.floor(
                    Math.random() * symbols.length
                )
            ];

        heart.style.left =
            (40 + Math.random() * 20) + "%";

        heart.style.bottom =
            (20 + Math.random() * 20) + "%";

        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";

        heart.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);
    }
}


/* =====================================
   CLICK EFFECT
===================================== */

document.addEventListener("click", function(event) {

    if (
        event.target.tagName === "A" ||
        event.target.tagName === "BUTTON"
    ) {
        createClickHeart(
            event.clientX,
            event.clientY
        );
    }

});


function createClickHeart(x, y) {

    const heart =
        document.createElement("div");

    heart.innerHTML = "💙";

    heart.style.position = "fixed";
    heart.style.left = x + "px";
    heart.style.top = y + "px";
    heart.style.zIndex = "9999";
    heart.style.pointerEvents = "none";
    heart.style.fontSize = "18px";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translate(0, 0) scale(1)",
                opacity: 1
            },
            {
                transform:
                    "translate(0, -70px) scale(1.5)",
                opacity: 0
            }
        ],
        {
            duration: 800,
            easing: "ease-out"
        }
    );

    setTimeout(() => {
        heart.remove();
    }, 800);
}


/* =====================================
   PAGE LOAD ANIMATION
===================================== */

document.addEventListener("DOMContentLoaded", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity 0.8s ease";

        document.body.style.opacity = "1";

    }, 100);

});