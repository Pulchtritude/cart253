/**
 * Pharmakon Sign
 * John Hanna
 * 
 * Shows a sign that represent's the impetus derrida's "post-structuralist" concept of the binary opposition
 */

"use strict";

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
    strokeWidth(3);
    stroke("#970000");
    triangle(400, 880);
    pop();
}