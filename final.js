const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

const animation = [
    {
        transform: "translateY(0) scale(1)",
        opacity: 1
    },
    {
        transform: "translateY(-150px) scale(0)",
        opacity: 0
    }
];

const timing = {
    duration: 1500,
    fill: "forwards",
    easing: "ease-in-out"
};

async function startAnimation() {

    await box1.animate(animation, timing).finished;
    box1.style.display = "none";

    await box2.animate(animation, timing).finished;
    box2.style.display = "none";

    await box3.animate(animation, timing).finished;
    box3.style.display = "none";

    document.body.style.backgroundColor = "black";
}

startAnimation();
