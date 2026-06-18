const box = document.getElementById("box");
const text = document.getElementById("text");

async function startAnimation() {

    await box.animate(
        [
            {
                transform: "scale(1) rotate(0deg)",
                opacity: 1
            },
            {
                transform: "scale(0) rotate(720deg)",
                opacity: 0
            }
        ],
        {
            duration: 2500,
            fill: "forwards",
            easing: "ease-in-out"
        }
    ).finished;

    box.style.display = "none";

    document.body.style.backgroundColor = "black";

    setTimeout(() => {
        text.style.opacity = "1";
    }, 1000);
}

startAnimation();
