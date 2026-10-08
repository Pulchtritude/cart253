/**
 * Scythe
 * John Hanna
 * 
 * Draws a Scythe and simulates stabbing animation in video games
 */

"use strict";



let scytheOne;

let arm = {
    x: 1620,
    y: 0,
    w: 300,
    h: 1200,
    flesh: "#ffdcb1",
    fills: {
        safe: "#ffdcb1",
        hurt: "#ff0000"
    }
};


async function setup() {
    // Load the image.
    scytheOne = await loadImage('assets/images/scytheOne.png');

    createCanvas(1920, 1200);

    noCursor();

}
/**
 * Draws the scene
*/
function draw() {
    background(255);

    drawArm();

    image(scytheOne, mouseX, mouseY);

}

function drawArm() {

    const distance = dist(mouseX, mouseY, arm.x, arm.y);
    const mouseIsOverlapping = (distance < arm.w * 1.75) && (distance < arm.h * 1.75);
    if (mouseIsOverlapping) {
        arm.flesh = arm.fills.hurt;

    }
    else {
        arm.flesh = arm.fills.safe;
    }
    push();
    noStroke();
    fill(arm.flesh);
    rect(arm.x, arm.y, arm.w, arm.h);
    pop();
}









