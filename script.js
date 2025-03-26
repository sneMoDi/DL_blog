/* JavaScript: script.js */
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function showVideo(videoId) {
    document.getElementById(videoId).style.display = 'block';
    document.getElementById(videoId).play();
}
function hideVideo(videoId) {
    document.getElementById(videoId).style.display = 'none';
    document.getElementById(videoId).pause();
    document.getElementById(videoId).currentTime = 0;
}

document.addEventListener("DOMContentLoaded", function () {
    const tokens = document.querySelectorAll(".token");
    const arrows = document.querySelectorAll(".arrow");
    const outputTokens = document.querySelectorAll(".output");

    function animateTokens() {
        tokens.forEach((token, index) => {
            setTimeout(() => {
                token.classList.add("fade-in");
            }, index * 500);
        });

        arrows.forEach((arrow, index) => {
            setTimeout(() => {
                arrow.classList.add("fade-in");
            }, 1500 + index * 500);
        });

        outputTokens.forEach((output, index) => {
            setTimeout(() => {
                output.classList.add("fade-in");
            }, 2500 + index * 500);
        });

        // Reset animation every 6 seconds
        setTimeout(() => {
            tokens.forEach(token => token.classList.remove("fade-in"));
            arrows.forEach(arrow => arrow.classList.remove("fade-in"));
            outputTokens.forEach(output => output.classList.remove("fade-in"));

            // Restart the animation smoothly
            setTimeout(() => {
                animateTokens();
            }, 500);
        }, 5000); // Total time before resetting
    }

    animateTokens();
});

document.addEventListener("DOMContentLoaded", function () {
    const items = document.querySelectorAll(".timeline-item");
    items.forEach((item, index) => {
      setTimeout(() => {
        item.style.opacity = 1;
      }, index * 400);
    });
  });