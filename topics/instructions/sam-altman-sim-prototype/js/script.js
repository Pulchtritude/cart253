/**
 * Sam Altman Sim
 * John Hanna
 * 
 * Your a ram manufacturer...
 * When you click on screen,
 * at said location you clicked (mouseX, mouseY), 
 * you create a ram stick.
 * After waiting 3 seconds, Sam Altman will take it away from you
 */

"use strict";
/**
 * Defines the default/starting line in the pros array on program startup
*/
let sam;
/**
 * Defines the default/starting line in the pros array on program startup
*/
let rams = [];
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(1000, 1000);
    sam = await loadImage('assets/images/sam.png');
}
/**
 * Defines the default/starting line in the pros array on program startup
*/
function createRam() {
    let ram = {
        x: mouseX,
        y: mouseY,
        w: 25,
        h: 50,
        color: "#636363",
        created: millis(),
    }
    return ram;
}
/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    imageMode(CENTER);
    image(sam, width / 2, height / 2);

    for (let ram of rams) {
        if (millis() - ram.created <= 5000) {
            drawRam(ram);
        }
    }
}
/**
 * Defines the default/starting line in the pros array on program startup
*/
function drawRam(ram) {
    push();
    fill(ram.color);
    rect(ram.x, ram.y, ram.w, ram.h);
    pop();
}
/**
 * Defines the default/starting line in the pros array on program startup
*/
function mousePressed() {
    const newRam = createRam();
    rams.push(newRam);
}