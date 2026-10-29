/**
 * Jim Moving On?
 * John Hanna
 * 
 * Jim and Cat have recently split, Cat seems to be moving on ok
 * from Jim's perspective (as if he actually has any real idea), but
 * what about Jim? You are Jim and therefore, you have "control".
 */

"use strict";

/**
 * Defines a constant named Jim that uses "person" for function grouping
 * This constant contains data needed to draw him, as well as to define
 * movement logic
*/
const jimPerson = {
    // Position and size
    x: 500,
    y: 500,
    size: 100,
    // Fills
    color: "#0073ff",
    // Rate at which x and y position will shift
    velocity: {
        x: 0.05,
        y: -0.05,
    }
};

/**
 * Defines a constant named Cat that uses "person" for function grouping
 * This constant contains data needed to draw her, as well as to define
 * movement logic
*/
const catPerson = {
    // Position and size
    x: 500,
    y: 500,
    size: 100,
    // Fills
    color: "#ff00b7",
    // Rate at which x and y position will shift
    velocity: {
        x: -0.05,
        y: 0.05,
    }
};

/**
 * Creates canvas
*/
function setup() {
    createCanvas(1000, 1000);
}

/**
 * Draws the scene as well as movement logic
*/
function draw() {

    // Draws Jim and Cat
    drawPerson(jimPerson);
    drawPerson(catPerson);

    // Calls in draw their movement logic
    movePerson(jimPerson);
    movePerson(catPerson);
}
/**
 * drawPerson refers to Jim and Cat
 * who both have "Person" in their variable name.
 * They both share similar data;
 * their logic can thus be shared!
*/
function drawPerson(person) {

    // Centers Jim and Cat on the canvas
    rectMode(CENTER);

    // Specifications for drawing both Jim and Cat
    // Using data from their "person" variable
    push();
    fill(person.color);
    rect(person.x, person.y, person.size);
    pop();
}
/**
 * movePerson refers to Jim and Cat
 * who both have "Person" in their variable name.
 * They both share similar data;
 * their logic can thus be shared!
*/
function movePerson(person) {
    // Sets the default movement 
    // for Jim and Cat using their
    // shared function "person"
    // This is so that they are never static
    person.x += person.velocity.x;
    person.y += person.velocity.y;
}
/**
 * This interactive event function defines "jim"
 * as the agent/main perspective in this program
 * Since the event.keys refer specifically to him
*/
function keyPressed(event) {
    // If player presses "a", 
    // jim moves left
    if (event.key === "a") {
        jimPerson.velocity.x -= 0.1;
    }
    // If player presses "d", 
    // jim moves right
    else if (event.key === "d") {
        jimPerson.velocity.x += 0.1;
    }
    // If player presses "s", 
    // jim moves down
    else if (event.key === "s") {
        jimPerson.velocity.y += 0.1;
    }
    // If player presses "w", 
    // jim moves up
    else if (event.key === "w") {
        jimPerson.velocity.y -= 0.1;
    }
}