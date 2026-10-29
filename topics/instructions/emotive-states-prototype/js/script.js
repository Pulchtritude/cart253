/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
/**
 * Defines a constant named angry (emotion) that uses "face" for function grouping
 * This constant contains data needed to draw the angry emotion, as well as to define
 * the movement logic
*/
const angryFace = {
    x: 300,
    y: 300,
    size: 100,
    emotion: "#ff001e",
    rage: 5,
    velocity: {
        y: 0,
    }
};

/**
 * Defines a constant named sad (emotion) that uses "face" for function grouping
 * This constant contains data needed to draw the sad emotion, as well as to define
 * the movement logic
*/
const sadFace = {
    x: 700,
    y: 300,
    size: 100,
    emotion: "#0073ff",
    rage: 0,
    velocity: {
        y: 0.05,
    }
};

/**
 * Defines a constant named happy (emotion) that uses "face" for function grouping
 * This constant contains data needed to draw the happy emotion, as well as to define
 * the movement logic
*/
const happyFace = {
    x: 500,
    y: 500,
    size: 100,
    emotion: "#f6ff00",
    rage: 0,
    velocity: {
        y: -0.05,
    }
};

/**
 * Creates canvas
*/
function setup() {
    createCanvas(1000, 1000);
}

/**
 * Draws all the faces/emotions
 * and calls all of their movement logic:
 * sad and happy - velocity
 * angry - rage
*/
function draw() {

    // Calls in draw the respective
    // movement logic
    moveFace(sadFace);
    moveFace(happyFace);
    moveFace(angryFace);
    //moveAngry();

    // Draws emotions
    drawFace(sadFace);
    drawFace(happyFace);
    drawFace(angryFace);
}

/**
 * Defines a function that uses data from 
 * all variables that have "face" in their name
 * in order
*/
function drawFace(face) {
    push();
    //noStroke();
    fill(face.emotion);
    ellipse(face.x, face.y, face.size);
    pop();
}

//function moveAngry() {
//angryFace.x += random(-angryFace.rage, angryFace.rage);
//}

/**
 * Defines a function that uses data from 
 * all variables that have "face" in their name
 * in order
*/
function moveFace(face) {
    face.y += face.velocity.y;
    face.x += random(-face.rage, face.rage);
}
