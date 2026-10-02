/**
 * Moodswitch
 * John Hanna
 * 
 * This project doesn't assume that the only two emotional states are happiness
 * and sadness, but it does assume that to feel happy takes an amount of effort.
 */

"use strict";

/**
 * Defines a variable called moodswitch that is off (false) by default
*/
let moodSwitch = {
    on: false
};

/**
 * Defines a variable called sad
*/
let sad = {
    // Defines color, position, and size of sadness
    red: 0,
    green: 0,
    blue: 255,
    x: 500,
    y: 500,
    w: 400,
    h: 300,
};

/**
 * Defines a variable called happy
*/
let happy = {
    // Defines color, position, and size of happiness
    red: 255,
    green: 255,
    blue: 0,
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
 * If player presses and holds mouse, square becomes yellow and equilateral.
 * If player lets go of mouse, square goes from yellow back to the default sad 
 * and slightly mishaped blue :(
*/
function draw() {
    background(0);
    checkIfHappy();
    displayMood();
}

/**
 * Defines a conditonal function that checks and defines the mechanic of the moodswitch
*/
function checkIfHappy() {
    // If mouse is pressed, the moodswitch turns on
    if (mouseIsPressed) {
        moodSwitch.on = true;
    }
    // If mouse is unpressed, the moodswitch turns off, 
    // erasing the happy square function and redrawing the background
    else {
        moodSwitch.on = false;
        erase();
        drawHappySquare();
        noErase();
        background(0);
    }
}

/**
 * Defines a conditonal function that displays the output as a result of the happy check function
*/
function displayMood() {
    // If mouse is pressed, happy square is drawn
    if (moodSwitch.on) {
        drawHappySquare();
    }
    // If mouse is unpressed, sad square is
    else {
        drawSadSquare();
    }
}

/**
 * Defines a draw function that specifies a sad sqaure
*/
function drawSadSquare() {
    // Centers rect shape
    rectMode(CENTER)
    // Draws sad square
    push();
    fill(sad.red, sad.green, sad.blue);
    noStroke();
    rect(sad.x, sad.y, sad.w, sad.h);
    pop();
}

/**
 * Defines a draw function that specifies a happy sqaure
*/
function drawHappySquare() {
    // Centers rect shape
    rectMode(CENTER)
    // Draws happy square
    push();
    fill(happy.red, happy.green, happy.blue);
    noStroke();
    rect(happy.x, happy.y, happy.s);
    pop();
}