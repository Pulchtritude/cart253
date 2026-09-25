/**
 * Pharmakon Sign
 * John Hanna
 * 
 * Shows a sign that represent's the impetus of Derrida's "post-structuralist" concept of the binary opposition
 */

"use strict";

/** 
 * Variable that defines the cross color at base
 */
let crossColor = {
    r: 255,
    g: 255,
    b: 0
};

/**
 * Creates canvas
*/
function setup() {
    createCanvas(1000, 1000);
}

/**
 * Draws Sign
*/
function draw() {
    background(0);

    // Draw's sign base
    push();
    fill("#FFCC00");
    strokeWeight(25);
    stroke("#970000");
    triangle(500, 200, 200, 700, 800, 700);
    pop();

    // Draws Cross
    drawCross();
}

/**
 * A function that defines how the cross is drawn and how it functions
*/
function drawCross() {

    // A map that enables the color effects of the cross object
    crossColor.r = map(mouseX, 0, width, 0, 255);
    crossColor.g = map(mouseX, 0, width, 255, 0);

    // Drawing the cross
    rectMode(CENTER);

    push();
    fill(crossColor.r, crossColor.g, crossColor.b);
    noStroke();
    rect(500, 525, 100, 290);
    pop();

    push();
    fill(crossColor.r, crossColor.g, crossColor.b);
    noStroke();
    rect(500, 525, 300, 100);
    pop();
}