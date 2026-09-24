/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * Creates canvas
*/
function setup() {
    createCanvas(1000, 1000);
}

/**
 * Draws Light Cycle and Street
*/
function draw() {
    background(0);

    drawFace(mouseX, mouseY);

    // Draws eyes
    push();
    fill("#ff0000");
    noStroke();
    ellipse(250, 200, 100);
    pop();

    push();
    fill("#ff0000");
    noStroke();
    ellipse(700, 200, 100);
    pop();
}

function drawEyes(x) {

    //Wheel
    push();
    fill("#1c1c1c");
    noStroke();
    ellipse(x, 450, 25);
    pop();
}

function drawFace() {
    // Draws head
    push();
    fill("#e8d5a5");
    noStroke();
    ellipse(500, 500, 200, 200);
    pop();

    // Draws eyes
    drawEyes(440);

    drawEyes(550);

    // Draws mouth
    push();
    fill("#1c1c1c");
    noStroke();
    rect(450, 500, 100, 50);
}