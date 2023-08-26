/* Resize Canvas According to Window size */
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let width;
let height;

width = (canvas.width = window.innerWidth);
height = (canvas.height = window.innerHeight);

window.onresize = function () {
    resizeCanvas();
}

function resizeCanvas() {
    width = (canvas.width = window.innerWidth);
    height = (canvas.height = window.innerHeight);
    
}
