/**
 * The Moon
 * John Hanna
 * 
 * "It slowly encroaches; every year it gets closer and closer to us" 
 * --
 * The moon normally gets farther from us every year, but what if it was getting closer to us instead?
 * Well, thats also kind of horrifying in it's own way, 
 * but the closer it gets, 
 * the more we are graced by the moon's beauty:
 * in a morbid way of course...
 */

"use strict";

/**
 * Creates/defines a variable named "space"
*/
let space;

/**
 * Creates/defines a variable named "moon"
*/
let moon = {

    // Defines the color of the moon (white)
    r: 255,
    g: 255,
    b: 255,

    // Defines position of the moon
    position: {
        x: 500,
        y: 500,
    },

    // Defines size of moon
    size: {
        w: 10,
        h: 10,
    }
};

/**
 * Creates space: the black void
*/
function setup() {
    createCanvas(1000, 1000);

    // Presumebly loads the audio file into memory when the program starts
    space = createAudio('assets/sounds/space-ambience.wav');

}

/**
 * When the program detects a mouse press, audio stored in "space" variable will play
*/
function mousePressed() {
    space.play();
}

/**
 * Draws the scene
*/
function draw() {

    // Draws Space (the black void)
    background(0);

    // Makes sure that the moon is centered
    ellipseMode(CENTER);

    // Draws moon using specifications defined by moon variable
    push();
    fill(moon.r, moon.g, moon.b);
    ellipse(moon.position.x, moon.position.y, moon.size.w, moon.size.h);
    noStroke();
    pop();

    // Simulates the moon geting closer and closer by increasing it's width and height every frame
    moon.size.w += 0.1
    moon.size.h += 0.1
}