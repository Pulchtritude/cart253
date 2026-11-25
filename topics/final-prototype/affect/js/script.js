/**
 * Affect
 * John Hanna
 * 
 * Model of Affect
 */

"use strict";

const subjectBody = {
    x: 700,
    y: 400,
    size: 100,
    color: "blue",
    text: 'Subject Body',
    velocity: 0,
    alpha: 255,
};

const impingingBody = {
    x: 300,
    y: 400,
    size: 100,
    color: "red",
    text: 'Impinging Body',
    velocity: 10,
    alpha: 255,
};

const extraBody = {
    x: 450,
    y: 200,
    size: 100,
    color: "magenta",
    text: 'Extra Body',
    velocity: 0,
    alpha: 0,
};

let maxPosition = {
    x: 700,
};

let minPosition = {
    x: 300,
}

/**
 * Creates Canvas and sets alignments for text and shapes
*/
function setup() {
    createCanvas(1000, 1000);
    rectMode(CENTER);
    textAlign(CENTER, CENTER);
}

/**
 * Draws the scene
 * Encompasses the animation framework and all three shapes in the program
 * Draws the background every frame
*/
function draw() {
    background(255);
    drawImpingement();
    drawBody(subjectBody);
    drawBody(impingingBody);
    drawBody(extraBody);
}
function drawBody(body) {

    const c = color(body.color);
    c.setAlpha(body.alpha);

    push();
    noStroke();
    fill(c);
    rect(body.x, body.y, body.size);
    text(body.text, body.x, body.y + 70);
    pop();
}

function moveBody(body) {
    body.x += body.velocity;
    body.x = constrain(body.x, minPosition.x, maxPosition.x);
}

function keyPressed(event) {
    if (event.key === "d") {
        moveBody(impingingBody);
    }
}

function drawImpingement() {
    const distance = dist(impingingBody.x, impingingBody.y, subjectBody.x, subjectBody.y);
    const impingingBodyIsOverlapping = distance < subjectBody.size / 5;

    // If impinging body is overlapping with the subject body,
    // the extra body will "come into being" a random rate
    if (impingingBodyIsOverlapping) {

        extraBody.alpha += random(0, 5);
    }

    // If extra body is fully visible, 
    // the subject and impinging bodies will fade away at a random rate
    if (extraBody.alpha >= 255) {
        subjectBody.alpha -= random(0, 1);
        impingingBody.alpha -= random(0, 1);
    }
}