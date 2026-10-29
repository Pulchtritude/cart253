/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const angryFace = {
    x: 300,
    y: 300,
    size: 100,
    color: "#ff001e",
    rage: 5,
};

const sadFace = {
    x: 700,
    y: 300,
    size: 100,
    color: "#0073ff",
    velocity: {
        y: -0.05,
    }
};

const happyFace = {
    x: 500,
    y: 500,
    size: 100,
    color: "#f6ff00",
    velocity: {
        y: 0.05,
    }
};

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000);
    background(255);
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    moveFace(sadFace);
    moveFace(happyFace);
    moveFace(angryFace);
    moveAngry();
    drawFace(sadFace);
    drawFace(happyFace);
    drawFace(angryFace);


}

function drawFace(face) {
    push();
    noStroke();
    ellipse(face.x, face.y, face.size);
    fill(face.color);
    pop();
}

function moveAngry() {
    angryFace.x += random(-angryFace.rage, angryFace.rage);
}

function moveFace(face) {
    face.y += face.velocity.y;
}
