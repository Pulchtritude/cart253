/**
 * Sad to Happy
 * John Hanna
 * 
 * This project doesn't assume that the only two emotional states are happiness
 * and sadness, but it does assume that to feel happy takes an amount of effort.
 */

"use strict";

const moodSwitch = {
    on: false
};

let sad = {
    // Defines color and position of sadness
    red: 0,
    green: 0,
    blue: 255,
    x: 250,
    y: 300,
    w: 400,
    h: 300,
};

let happy = {
    // Defines color and position of happiness
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
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(0);
    checkIfHappy();
    displayMood();

    // if player presses and holds mouse, square becomes yellow and equilateral,
    // if player lets go of mouse, square goes from yellow back to the default sad and slightly mishaped blue :(
}

function checkIfHappy() {
    if (mouseIsPressed) {
        moodSwitch.on = true;
    }
    else {
        moodSwitch.on = false;
    }
}

function displayMood() {
    if (moodSwitch.on) {
        drawHappySquare();
    }
    else {
        drawSadSquare();
    }
}


function drawSadSquare() {

    rectMode(CENTER)

    push();
    fill(sad.red, sad.green, sad.blue);
    noStroke();
    rect(sad.x, sad.y, sad.w, sad.h);
    pop();
}

function drawHappySquare() {

    rectMode(CENTER)

    push();
    fill(happy.red, happy.green, happy.blue);
    noStroke();
    rect(happy.x, happy.y, happy.w, happy.h);
    pop();
}