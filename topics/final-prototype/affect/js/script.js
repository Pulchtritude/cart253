/**
 * Affect
 * John Hanna
 * 
 * Model of Affect
 */

"use strict";

const subjectBody = {
    x: 600,
    y: 400,
    size: 100,
    color: "blue",
    text: 'Subject Body',
    position: 550,
    velocity: 0,
};

const impingingBody = {
    x: 300,
    y: 400,
    size: 100,
    color: "red",
    text: 'Impinging Body',
    position: 550,
    velocity: 2
};

const extraBody = {
    x: 600,
    y: 200,
    size: 100,
    color: "black",
    text: 'Extra Body',
    position: 850,
    velocity: 0,
};

/**
 * Creates Canvas
*/
function setup() {
    createCanvas(1000, 1000);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    drawBody(subjectBody);
    drawBody(impingingBody);
    drawBody(extraBody);
}
function drawBody(body) {
    push();
    fill(body.color);
    rect(body.x, body.y, body.size);
    text(body.text, body.x, body.position);
    pop();
}

function moveBody(body) {
    body.x += body.velocity;
}

function keyPressed(event) {
    if (event.key === "d") {
        moveBody(impingingBody);
        background(255);
    }
}