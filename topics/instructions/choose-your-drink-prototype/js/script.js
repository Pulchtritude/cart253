/**
 * Choose Your Drink
 * John Hanna
 * 
 * What kind of Poet will you be after picking your drink?
 */

"use strict";

/**
 * Defines various variables (with apt names)
 * which are simply used to call their assigned image files
 * These image files are the crux of the prototype
 * loaded in async setup and called in event functions
*/
let beer;
let water;
let question;
let tool;

/**
 * Creates Canvas and loads all the image files needed
*/
async function setup() {
    createCanvas(1000, 1000);
    // Load the image.
    beer = await loadImage('assets/images/be.png');
    water = await loadImage('assets/images/wa.png');
    question = await loadImage('assets/images/question.png');
    tool = await loadImage('assets/images/tea.png');

}


/**
 * This is drawing nothing
*/
function draw() {

}

function keyPressed(event) {
    // If player presses "w", the program clears the previous image (if it's rendered on screen),
    // and "draws" a wooden bowl of water alongside a verse of Homer
    if (event.key === "w") {

        background(255);
        imageMode(CENTER);
        image(water, 500, 500);
    }

    // If player presses "b", the program clears the previous image (if it's rendered on screen),
    // and "draws" a beer alongside a poem by Baudelaire
    else if (event.key === "b") {

        background(255);
        imageMode(CENTER);
        image(beer, 500, 500);
    }
    // If player presses "q", the program clears the previous image (if it's rendered on screen),
    // and "draws" the question screen
    else if (event.key === "q") {

        background(255);
        imageMode(CENTER);
        image(question, 500, 500);
    }
}

function mousePressed() {
    // If player presses "mouse", the program clears the previous image (if it's rendered on screen),
    // and "draws" shroom tea alongside Tool lyrics
    background(255);
    imageMode(CENTER);
    image(tool, 500, 500);
}