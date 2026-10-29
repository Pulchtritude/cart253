/**
 * Jim Chasing
 * John Hanna
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const jimPerson = {
    x: 500,
    y: 500,
    size: 100,
    color: "#0073ff",
    velocity: {
        x: 0.05,
        y: -0.05,
    }
};

const catPerson = {
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
    drawPerson(jimPerson);
    drawPerson(catPerson);
    movePerson(jimPerson);
    movePerson(catPerson);
}

function drawPerson(person) {

    rectMode(CENTER);

    push();
    fill(person.color);
    rect(person.x, person.y, person.size);
    pop();
}

function movePerson(person) {
    person.x += person.velocity.x;
    person.y += person.velocity.y;
}

function keyPressed(event) {
    if (event.key === "a") {
        jimPerson.velocity.x -= 0.1;
    }
    else if (event.key === "d") {
        jimPerson.velocity.x += 0.1;
    }
    else if (event.key === "s") {
        jimPerson.velocity.y += 0.1;
    }
    else if (event.key === "w") {
        jimPerson.velocity.y -= 0.1;
    }
}