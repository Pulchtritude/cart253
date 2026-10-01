/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let sad = {
    // Defines color and position of perfection
    red: 0,
    green: 0,
    blue: 255,
    x: 500,
    y: 500,
    s: 500,

};

/**
 * Creates canves
*/
function setup() {
    createCanvas(1000, 1000);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    drawPerfectSquare();
}

function drawPerfectSquare() {

    rectMode(CENTER);

    push();
    fill(sad.red, sad.green, sad.blue);
    noStroke();
    rect(sad.x, sad.y, sad.s);
    pop();
}