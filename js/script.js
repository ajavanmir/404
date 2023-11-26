/*
Copyright amir javanmir
Released on: august 30, 2023
*/
const parent = document.querySelector("#container");
window.onmousemove = function(e){
    let x = e.clientX / 5;
    let y = e.clientY / 5;

    parent.style.backgroundPositionX = x + "px";
    parent.style.backgroundPositionY = y + "px";
}
