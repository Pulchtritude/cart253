/**
 * Model of Object of Desire
 * John Hanna
 * 
 * Object of Desire in Freudian Psychoanalysis
 */

"use strict";

let motherCircle = { // Will be a circle
    x: x, // will be relative to mouseX
    y: y, // will be relative to mouseY
    size: 100,
    color: "white",
    text: 'Subject Body',
    velocity: {
        x: 2,
        y: 2,
    }
}

let subject = { // Will be a square
    x: x, // will be mouseX
    y: y, // will be mouseY
    size: 100,
    color: "#1e01f9",
    text: 'Subject Body',
    position: y + 250,
}

let desireCircle = { // Will be a circle
    x: x, // will be relative to mouseX
    y: y, // will be mouseY
    size: 100,
    color: "red",
    text: 'Object of Desire',
    velocity: {
        x: 2,
        y: 2,
    }
}

let father = { // Will be a triangle
    x: x, // will be mouseX
    y: y, // will be mouseY
    size: 100,
    color: "black",
    text: 'Subject Body',
    position: y + 250,
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255);
    drawSubject();
    drawCircle(motherCircle);

}

function drawSubject() {
    push();
    fill(subject.color);
    rect(mouseX, mouseY, subject.size);
    text(subject.text, subject.x, subject.position);
    pop();
}

function drawfather() {
    push();
    fill(father.color);
    rect(father.x, father.y, father.size);
    text(father.text, father.x, father.position);
    pop();
}

function drawCircle(circle) {
    push();
    fill(circle.color);
    ellipse(circle.x, circle.y, circle.size);
    text(circle.text, circle.x, circle.position);
    pop();
}

function moveTowards(circle) {
    // If the mouse is in range it affects the circle objects in the model
    const d = dist(mouseX, mouseY, circle.x, circle.y);
    if (d < circle.size) {
        // Change the circle object's velocity based on the mouse position 
        // Circle objects will accelerate towards the mouse
        circle.velocity.x += (circle.x + mouseX) * 0.005;
        circle.velocity.y += (circle.y + mouseY) * 0.005;
    }
}