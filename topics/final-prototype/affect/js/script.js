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
    position: 850,
    velocity: 0,
    //alpha: 255,
};

const impingingBody = {
    x: 300,
    y: 400,
    size: 100,
    color: "red",
    text: 'Impinging Body',
    position: 550,
    velocity: 2,
    // alpha: 0,
};

const extraBody = {
    x: 600,
    y: 200,
    size: 100,
    color: "black",
    text: 'Extra Body',
    position: 850,
    velocity: 0,
    // alpha: 255,
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
    drawImpingement();
    drawBody(subjectBody);
    drawBody(impingingBody);
    drawBody(extraBody);
}
function drawBody(body) {
    push();
    fill(body.color);
    // setAlpha(body.alpha);
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

function drawImpingement() {
    const distance = dist(impingingBody.x, impingingBody.y, subjectBody.x, subjectBody.y);
    const impingingBodyIsOverlapping = (distance < subjectBody.size * 2) && (distance < subjectBody.size * 2);

    if (impingingBodyIsOverlapping) {
        extraBody.color.setAlpha(255);
    }

    else {
        extraBody.color.setAlpha(0);
    }
}