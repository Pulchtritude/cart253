/**
 * Light Cycle
 * John Hanna
 * 
 * The iconic light cycle from the film Tron Legacy
 */

"use strict";

/** 
 * Defines y and s values of the Wheel Object
*/
let wheel = {
    y: 875,
    s: 75,
};

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

    // Draws floor
    push();
    fill("#525252");
    noStroke();
    rect(0, 900, 1000);
    pop();

    // Draws Cycle
    drawCycle();
}

function drawWheel(x) {

    // Draw Wheel specifications
    push();
    fill("#363636");
    strokeWeight(10);
    stroke("#7DFDFE");
    ellipse(x, wheel.y, wheel.s);
    pop();
}

function drawCycle() {

    // Draws Console
    push();
    fill("#363636");
    strokeWeight(5);
    stroke("#7DFDFE");
    ellipse(475, 860, 200, 70);
    pop();

    // Draws seat
    push();
    fill("#363636");
    strokeWeight(5);
    stroke("#7DFDFE");
    rect(320, 860, 160, 35);
    pop();

    // Draws engine
    push();
    fill("#363636");
    strokeWeight(5);
    stroke("#7DFDFE");
    triangle(400, 880, 600, 900, 600, 840);
    pop();

    // Draws back wheel
    drawWheel(320);

    // Draws front wheel
    drawWheel(600);
}