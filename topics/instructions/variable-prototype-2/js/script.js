/**
 * I don't know yet...
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
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
        w: 250,
        h: 500,
    },
};

/**
 * creates canvas
*/
function setup() {
    createCanvas(1000, 1000)
}


/**
 * Draws the sky
*/
function draw() {
    background(0);

    ellipseMode(CENTER);

    push();
    fill(moon.r, moon.g, moon.b);

    pop();

}