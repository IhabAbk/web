setTimeout(() => {
    document.getElementById("intro-screen").classList.add("fade-out");
    setTimeout(() => {
        document.getElementById("intro-screen").style.display = "none";
    }, 1500); // Matches the animation duration
}, 2000); // Waits for 2 seconds before starting the fade-out