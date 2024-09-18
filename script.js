function moveRandomEl(element)
{
    element.style.position = "absolute";
    element.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    element.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function(e){
    moveRandomEl(e.target);
});