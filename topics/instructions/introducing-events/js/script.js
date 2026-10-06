/**
 * Introducing events
 * John Hanna
 * 
 * Taking a look at how events work in P5 Js
 * 
 */

"use strict";

/**
 * Creates a black canvas
*/
function setup() {
    createCanvas(400, 400);
    background(0);
}


/**
 * Draws a circle at mouse press
*/
function draw() {

}

function mousePressed(fxn) {
    push();
    noStroke();
    fill(255, 255, 0);
    (ellipse, mouseX, mouseY, 50)
    pop();
}