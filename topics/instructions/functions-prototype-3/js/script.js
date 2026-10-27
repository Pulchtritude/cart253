/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const jim = {
    x: 500,
    y: 500,
    size: 100,
    color: "#0073ff",
    velocity: {
        x: 0.05,
        y: -0.05,
    }
};

const cat = {
    x: 500,
    y: 500,
    size: 100,
    color: "#ff00b7",
    velocity: {
        x: -0.05,
        y: 0.05,
    }
};

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
    drawPerson(jim);
    drawPerson(cat);
    movePerson(jim);
    movePerson(cat);
}

function drawPerson(jim) {

    rectMode(CENTER);

    push();
    fill(jim.color);
    rect(jim.x, jim.y, jim.size);
    pop();
}

function movePerson(jim) {
    jim.x += jim.velocity.x;
    jim.y += jim.velocity.y;
}

function keyPressed(event) {
    if (event.key === "a") {
        jim.velocity.x -= 0.1;
    }
    else if (event.key === "d") {
        jim.velocity.x += 0.1;
    }
    else if (event.key === "s") {
        jim.velocity.y += 0.1;
    }
    else if (event.key === "w") {
        jim.velocity.y -= 0.1;
    }
}

function keyCode(event) {
    if 
}