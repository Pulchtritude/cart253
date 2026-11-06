/**
 * Random Game Presentation
 * John Hanna
 * 
 * People like to make top 10 lists of their favorite games, 
 * and im one of those people.
 * Though, what if I had to present this list not just out of order, 
 * but completely at random, how could that affect the way I talk about each game?
 * 
 * This list is top 10 games i've played in 2026 so far
 * 
 */

"use strict";

/**
 * Defines an array called covers, 
 * all the image files get placed into this array in preload
*/
let covers = [];

/**
 * Defines the function called currentCover.
 * This is used to display a random cover
*/
let currentCover;

/**
 * Preload function for image files
*/
function preload() {
    // This loads all the images into the array
    // Yes, I am aware that this repetition can almost certainly be alleviated,
    // but im not sure how to do so in this particular context
    covers[0] = loadImage('assets/images/resist.jpg');
    covers[1] = loadImage('assets/images/shadow.jpg');
    covers[2] = loadImage('assets/images/jedi.jpg');
    covers[3] = loadImage('assets/images/asura.jpg');
    covers[4] = loadImage('assets/images/leaf.jpg');
    covers[5] = loadImage('assets/images/dante.jpg');
    covers[6] = loadImage('assets/images/ffxv.jpg');
    covers[7] = loadImage('assets/images/azure.jpg');
    covers[8] = loadImage('assets/images/hearts.jpg');
    covers[9] = loadImage('assets/images/spider.jpg');
}

/**
 * Creates canvas and begins the program with a random cover on screen
*/
function setup() {
    createCanvas(1000, 1000);
    currentCover = random(covers);
}

/**
 * Calls drawCover to draw the scene
*/
function draw() {
    drawCover();
}

/**
 * Draws a random cover on the screen 
*/
function drawCover() {
    // Makes background white
    background(255);
    // If currentCover is being called,
    // display a random game cover
    if (currentCover) {
        imageMode(CENTER);
        image(currentCover, width / 2, height / 2);
    }
}

/**
 * When player presses mouse, 
 * currentCover calls a random cover from the array index.
*/
function mousePressed() {
    currentCover = random(covers);
}
