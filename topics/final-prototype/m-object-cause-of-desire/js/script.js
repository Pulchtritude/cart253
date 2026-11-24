/**
 * Model of the Melancholic Object Cause of Desire
 * John Hanna
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let lostCircle = { // Will be a circle
    x: undefined, // will be relative to mouseX
    y: undefined, // will be relative to mouseY
    size: 100,
    color: "white",
    text: 'Subject Body',
    //position: y + 250,
}

let subject = { // Will be a square
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 100,

    text: 'Subject Body',
    // position: y + 250,
}

let desireCircle = { // Will be a circle
    x: undefined, // will be relative to mouseX
    y: undefined, // will be mouseY
    size: 100,
    color: "red",
    text: 'Object of Desire',
    // position: y + 250,
}

let object = { // Will be a triangle
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 100,
    color: "black",
    text: 'Subject Body',
    //  position: y + 250,
}
/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000);
    noCursor();
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    drawSubject();

}

function drawSubject() {
    background(255);
    push();
    fill("#ffffff");
    rect(mouseX, mouseY, subject.size);
    text(subject.text, subject.x, subject.position);
    pop();
}

// function drawCircle(circle) {
//     push();
//     fill(circle.color);
//     ellipse(circle.x, circle.y, circle.size);
//     text(circle.text, circle.x, circle.position);
//     pop();
// }