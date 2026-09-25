/**
 * Fear of the Dark
 * John Hanna
 * 
 * Shows face enveloped in darkness with a sinster set of eyes overhead. 
 * Can be interpreted as the "fear" we make up in our heads. The monster in the dark that is not there.
 */

"use strict";

/**
 * Creates canvas
*/
function setup() {
    createCanvas(1000, 1000);
}

/**
 * Draws face and creepy eyes
*/
function draw() {
    background(0);

    // Draws Face
    drawFace();

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

    //Eyes
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