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
    fill: "#ffdcb1",
}
let target = {
    x: 1620,
    y: 0,
    w: 300,
    h: 1200,
    fill: "#ffdcb1",
    fills: {
        noOverlap: "#ffdcb1",
        overlap: "#ff0000"
    }
}


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

    push();
    noStroke();
    fill(arm.fill);
    rect(arm.x, arm.y, arm.w, arm.h);
    pop();

    image(scytheOne, mouseX, mouseY);

}









