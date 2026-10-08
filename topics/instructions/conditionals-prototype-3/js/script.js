/**
 * Masks
 * John Hanna
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let face = {
    // positions and size
    x: 500,
    y: 500,
    size: 500,
    // neutral expression
    neutral: "#040405",
    // "affects"; more like general surface level expressions, but just humor me please
    affect: {
        happy: "#fff700",
        angry: "#ff0000",
        sad: "#0000ff",
        euphoria: "#bc2890",
    },

}
let web;
let mask;
/**
 * creates canvas, loads audio and image
*/
function setup() {
    createCanvas(1000, 1000);
    web = createAudio('assets/sounds/web.mp3');
    mask = loadImage('assets/images/smile.png')

    // not sure how to load music and images in the same project :(


}




/**
 * Draws the scene
*/
function draw() {

    drawFace();

}

function keyPressed(event) {
    if (event.key === "a") {
        face.neutral = face.affect.angry;
        web.stop();
    }
    else if (event.key === "s") {
        face.neutral = face.affect.sad;
        web.stop();
    }
    // this is a capital h to emphasize effort
    else if (event.key === "H") {
        face.neutral = face.affect.happy;
        web.stop();

    }
    else if (event.key === "w") {
        face.neutral = face.affect.euphoria;
        web.play();
    }

}

function drawFace() {
    ellipseMode(CENTER)
    push();
    noStroke();
    fill(face.neutral)
    ellipse(face.x, face.y, face.size)
    pop();
}