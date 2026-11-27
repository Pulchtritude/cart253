/**
 * Model of the Melancholic Object Cause of Desire
 * John Hanna
 * 
 * You desired object is the lost object's virtual, 
 * and trailing just behind you is the lost object's actual.
 * If you chase for long enough you will leave objects in your wake;
 * these are attempts to actualize the lost object's virtual
 */

"use strict";

let lost = { // Will be a circle
    x: 0,
    y: 0,
    size: 100,
    color: "black",
    text: 'Miscarried Object',

}

let subject = { // Will be a square
    x: undefined, // will be mouseX
    y: undefined, // will be mouseY
    size: 100,
    color: "blue",
    text: 'Subject Body',

}

let desire = { // Will be a circle
    x: 0,
    y: 0,
    size: 100,
    color: "white",
    text: 'Miscarried Objects Virtual',

}

let objects = [];

/**
 * Counts how long the mouse has been moving (Stopwatch frametimer)
 */
let move = 0;

/**
 * 3 Second Limit
 */
let moveLimit = 180;

/**
 * Creates canvas and disables cursor when program window is focused
*/
function setup() {
    createCanvas(windowWidth, windowHeight);
    noCursor();

}

function createObject(x, y) {
    let object = {
        x: x,
        y: y,
        size: 100,
        color: "grey",
        text: 'Remixed Object',
    };
    return object;
}

/**
 * Draws the scene:
 * Movement logic;
 * subject shape;
 * and object shapes that are pushed into the array by the movement logic program
*/
function draw() {
    background(255);
    moveLost();
    checkMovement();
    drawSubject();
    drawDesire();
    drawLost();
    drawObjects();
}

function checkMovement() {
    // Is the mouse moving this frame?
    let moving = dist(mouseX, mouseY, pmouseX, pmouseY) > 0;
    // If mouse is moving this frame increase stopwatch frametimer by 1
    if (moving) {
        move += 1;
    }

    // If mouse is has moved for 3 second,
    // draw "new object" at the location where mouseX and mouse Y were
    // at the moment the moveLimit is reached
    if (move >= moveLimit) {
        let newObject = createObject(mouseX, mouseY);
        objects.push(newObject);
        move = 0;
    }
}

function moveLost() {
    lost.x = lerp(lost.x, mouseX + random(-110, 110), 0.01);
    lost.y = lerp(lost.y, mouseY + random(-110, 110), 0.01);
}

function drawSubject() {
    push();
    fill(subject.color);
    rect(mouseX, mouseY, subject.size);
    text(subject.text, mouseX, mouseY + 120);
    pop();
}

function drawLost() {
    push();
    fill(lost.color);
    ellipse(lost.x, lost.y, lost.size);
    textAlign(CENTER, CENTER);
    text(lost.text, lost.x, lost.y + 70);
    pop();
}

function drawDesire() {
    push();
    fill(desire.color);
    ellipse(desire.x, desire.y, desire.size);
    pop();

    push();
    fill(0);
    textAlign(CENTER, CENTER);
    text(desire.text, desire.x, desire.y + 70);
    pop();

}

function drawObjects() {

    for (let i = 0; i < objects.length; i++) {
        let object = objects[i];

        push();
        fill(object.color);
        ellipseMode(CENTER);
        ellipse(object.x, object.y, object.size)
        textAlign(CENTER, CENTER)
        text(object.text, object.x, object.y + 70);
        pop();
    }
}


