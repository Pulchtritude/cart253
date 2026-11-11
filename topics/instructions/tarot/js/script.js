/**
 * Tarot
 * Pippin Barr
 * 
 * Some experiments with data representing a Tarot deck
 */

"use strict";


// Our tarot data
let tarot = underfined;

// Our fortune
let fortune = "Click to show a fortune.";

// Load tarot data
function preload() {
    tarot = loadJSON("assests/data/tarot_interpretations.json");
}

/**
 * Creates canvas
*/
function setup() {
    createCanvas(800, 400);
}


/**
 * Display tarot
*/
function draw() {
    background(0);



    // Display the information
    push();
    textSize(16);
    fill("yellow");
    textAlign(CENTER, CENTER);
    text(fortune, width / 2, height / 2);
    pop();
}

function mousePressed() {
    // Choose a random card
    const card = random(tarot.tarot_interpretations);
    // Choose a random fortune
    fortune = random(card.fortune_telling);

}