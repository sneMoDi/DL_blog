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