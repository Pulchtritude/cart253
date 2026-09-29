/**
 * The Slow Cancelation of the Future
 * John Hanna
 * 
 * An almost comedic (literal) representation of Mark Fisher's
 * "Slow Cancelation of the Future" concept.
 * 
 * Play his lecture on the topic in the background for added dark flavor of comedy.
 * 
 */

"use strict";

/** 
 * Defines a variable called capital and all of it's relevent specifications
 */
let capital = {
    // Defines color of capital
    r: 255,
    g: 255,
    b: 255,

    // Defines position of capital
    position: {
        x: 0,
        y: 1000,
    },

    // Defines minimum position of capital for constrain function
    minPosition: {
        x: -1,
        y: -1,
    },

    // Defines maximum position of capital for constrain function
    maxPosition: {
        x: 0,
        y: 0
    },

    // Defines size of capital
    size: {
        w: 250,
        h: 500,
    },

    // Defines minimum size of capital for constrain function
    minSize: {
        w: 0,
        h: 0,
    },

    // Defines minimum size of capital for constrain function
    maxSize: {
        w: 1920,
        h: 1200,
    },

};

/**
 * Create's canvas, or in this case, the future 
*/
function setup() {
    createCanvas(1920, 1200);
}

/**
 * Draws the "cancelation" effect scene
*/
function draw() {
    // Defines background of canvas (the future) as white, or perhaps, blank, hmmmm....
    background(255);

    pop();
    fill(capital.r, capital.g, capital.b);
    rect(capital.position.x, capital.position.y, capital.size.w, capital.size.h);
    noStroke();
    push();

    // Controls the "cancelation's" slow and progressive emergence as a kind of dark malevolence (capital)
    capital.r -= 0.005
    capital.g -= 0.005
    capital.b -= 0.005

    // Controls the "cancelation's" movement and size as it envelops the future that is your screen (capital)
    capital.position.x += 0.1
    capital.position.y -= 0.1
    capital.size.w += 0.05
    capital.size.h += 0.05

    // Constrains the "cancelation's" position
    capital.position.x = constrain(capital.position.x, capital.minPosition.x, capital.maxPosition.x);
    capital.position.y = constrain(capital.position.y, capital.minPosition.y, capital.maxPosition.y);

    // Constrains the "cancelation's" size
    capital.size.w = constrain(capital.size.w, capital.minSize.w, capital.maxSize.w);
    capital.size.h = constrain(capital.size.h, capital.minSize.h, capital.maxSize.h);

}
