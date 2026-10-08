/**
 * Scythe
 * John Hanna
 * 
 * Draws a Scythe and simulates stabbing "animation" in video games
 */

"use strict";

/**
 * Defines a variable that is used to load an image of scythe 
 * made in Corel Vector in setup and display it in draw
 */
let scytheOne;

/**
 * Defines a variable that sets the parameters for the drawArm function
 * The flesh that the scythe needs to stab :o
 */
let arm = {
    // Position and size
    x: 1620,
    y: 0,
    w: 300,
    h: 1200,
    // The color of flesh
    flesh: "#ffdcb1",
    // These are overlap fills with relevant names to the idea
    fills: {
        safe: "#ffdcb1",
        hurt: "#ff0000"
    }
};

/**
 * Loads image in async setup, creates canvas, and removes cursor from the render
 */
async function setup() {
    // Load the image of the scythe
    scytheOne = await loadImage('assets/images/scytheOne.png');
    createCanvas(1920, 1200);
    // Who needs a boring cursor when you have postmodern rendition of 
    // a scythe that wouldn't ever be practical to use in real life!
    noCursor();
}

/**
 * Draws the scene
*/
function draw() {
    background(255);
    // I'm thinking of games like Terraria when recreating this effect,
    // and in that game, the weapon doesn't phase into the enemy sprite;
    // so, the order matters here
    drawArm();
    // In order for the scythe image to be the cursor, 
    // it has to be drawn at mouseX and mouseY
    image(scytheOne, mouseX, mouseY);
}

/**
 * Defines the drawArm function both in it's drawing parameters, 
 * but also it's overlapping parameters so that it can change color appropriately
*/
function drawArm() {
    // This method calculates distance, but it only functions half well (literally),
    // probably because I've only tried this with ellipses and not rects
    // This is uses data from the "arm" variable
    const distance = dist(mouseX, mouseY, arm.x, arm.y);
    const mouseIsOverlapping = (distance < arm.w * 1.75) && (distance < arm.h * 1.75);
    // If scythe image is overlapping, the flesh will become red like a damage indicator in a game
    if (mouseIsOverlapping) {
        arm.flesh = arm.fills.hurt;
    }
    // If there is no overlap with the scythe image, the flesh will return to it's normal color
    else {
        arm.flesh = arm.fills.safe;
    }
    // Draws the arm rect shape using data from the "arm" variable
    push();
    noStroke();
    fill(arm.flesh);
    rect(arm.x, arm.y, arm.w, arm.h);
    pop();
}









