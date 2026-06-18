const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");

const animation = [
    { transform: "rotate(0deg) scale(1)" },
    { transform: "rotate(360deg) scale(0.5)" }
];

const timing = {
    duration: 1000,
    fill: "forwards"
};

async function animateBoxes() {
    try {
        await box1.animate(animation, timing).finished;
        await box2.animate(animation, timing).finished;
        await box3.animate(animation, timing).finished;
    } catch (err) {
        console.error(err);
    }
}

animateBoxes();