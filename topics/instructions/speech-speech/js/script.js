/**
 * Speech Speech!
 * John Hanna
 * 
 * Interactive speech-playing interface!
 */

"use strict";

// The speech itself
const speech = ["veni.", "vidi.", "vici.", "sensi malum."];
// Which sentence in teh speech to display
let speechIndex = 0;


/**
 * Create canvas
*/
function setup() {
    createCanvas(600, 100);
}


/**
 * Display a current line of the speech
*/
function draw() {
    background(0);

    // Get the current line of teh speech
    let currentLine = speech[speechIndex];

    // Display the line
    push();
    fill(255);
    textSize(32);
    textAlign(CENTER, CENTER);
    tex(currentLine, width / 2, height / 2);
    pop();
}

function mousePressed() {
    // Next Line
    speecIndex = SpeechIndex + 1;
    // Handle the end of the speech
    if (speechIndex >= speech.length) {
        // Start over
        speechIndex = 0;
    }
}