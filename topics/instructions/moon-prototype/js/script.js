/**
 * The Moon
 * John Hanna
 * 
 * It slowly encroaches; every year it gets closer and closer to us. 
 * The moon normally gets farther from us every year, what if it was closer?
 * Thats also kind of horrifying, but the closer it gets, the more beautiful it is 
 * in a morbid way.
 */

"use strict";

/**
 * creates canvas
*/
let moon = {
    r: 255,
    g: 255,
    b: 255,

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
}


/**
 * Draws the scene
*/
function draw() {
    background(0);

    ellipseMode(CENTER);

    push();
    fill(moon.r, moon.g, moon.b);
    ellipse(moon.position.x, moon.position.y, moon.size.w, moon.size.h);
    noStroke();
    pop();

    moon.size.w += 0.01
    moon.size.h += 0.01
}