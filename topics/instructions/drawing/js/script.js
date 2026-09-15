/**
 * Waltz for Debby by The Bill Evans Trio on vinyl (the Greatest Record of All Time)
 * John Hanna
 * 
 * Displays the greatest record of all time
 */

"use strict";

/**
 * Creates a square canvas
*/
function setup() {
    createCanvas(640, 640);
}


/**
 * Displays the record
*/
function draw() {
    // Grey Background
    background(150);

    // Main part of the record
    push();
    fill(250, 0, 0);
    stroke(255);
    ellipse(320, 320, 480);
    pop();

    // The Label on the Record
    push();
    fill("White");
    noStroke();
    ellipse(320, 320, 140);
    pop();

    // The hole of the record
    push();
    fill("#000000");
    noStroke();
    ellipse(320, 320, 20, 20)
    pop();


}