/**
 * introducing-variables
 * John Hanna
 * 
 * The Introducing variables module
 */

"use strict";

/**
 * Create a canvas
*/
function setup() {
    createCanvas(1000, 480);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);

    // Draw a Circle
    push();
    fill(255, 255, 0);
    noStroke();
    ellipse(mouseX, mouseY, 100, 100);
    pop();
}