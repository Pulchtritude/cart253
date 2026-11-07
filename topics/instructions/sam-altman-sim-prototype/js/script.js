/**
 * Sam Altman Sim
 * John Hanna
 * 
 * You're a ram manufacturer...
 * When you click on screen,
 * at said location you clicked (mouseX, mouseY), 
 * you create a ram stick.
 * After waiting 3 seconds, Sam Altman will take it away from you
 */

"use strict";

/**
 * Defines a variable called sam, 
 * this referrs to the Sam Altman image file 
 * that gets called in async setup
*/
let sam;

/**
 * Defines an empty array called rams.
 * On mouse presses,
 * ram objects get pushed into the array
*/
let rams = [];

/**
 * Creates canvas and loads an image of Mr. Sam Altman of Open AI
*/
async function setup() {
    createCanvas(766, 760);
    sam = await loadImage('assets/images/sam.png');
}

/**
 * Defines paramters needed to create a stick of ram and returns it
*/
function createRam() {
    let ram = {
        // Position and size parameters
        x: mouseX,
        y: mouseY,
        w: 25,
        h: 50,
        // Fill
        color: "#636363",
        // Timer
        created: millis(),
    }
    return ram;
}
/**
 * Draws the scene (image and ram)
*/
function draw() {
    // Draws image of sam altman at the center of the canvas
    imageMode(CENTER);
    image(sam, width / 2, height / 2);
    // A "for of" loop is used to go through
    // all the ram objects in ram
    for (let ram of rams) {
        // If (milliseconds - milliseconds value of ram created
        // is less than or equal to 3 seconds,
        // Ram will keep drawing in the place where it was clicked on the canvas
        if (millis() - ram.created <= 3000) {
            drawRam(ram);
        }
    }
}

/**
 * Defines a function called draw ram
 * that draws a ram stick based on the parameters
 * stored in ram variable found in the createRam function
*/
function drawRam(ram) {
    push();
    fill(ram.color);
    rect(ram.x, ram.y, ram.w, ram.h);
    pop();
}

/**
 * Add a new stick of ram into the rams array
*/
function mousePressed() {
    // When player presses mouse, 
    // a new stick of ram is added into the rams array
    const newRam = createRam();
    rams.push(newRam);
}