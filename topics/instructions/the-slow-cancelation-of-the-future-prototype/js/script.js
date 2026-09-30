/**
 * The Slow Cancelation of the Future
 * John Hanna
 * 
 * An almost comedic (literal) representation of Mark Fisher's
 * "Slow Cancelation of the Future" concept. 
 * 
 * By clicking with your mouse, you begin his lecture on his concept
 * as explored in his book "Ghosts of my Life"
 * 
 * RIP Mark Fisher
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
 * Creates/defines a variable named "fisher"
*/
let fisher;

/**
 * Create's canvas, or in this case, the future 
*/
function setup() {
    createCanvas(1920, 1200);

    fisher = createAudio('assets/sounds/scof.mp3');
}

/**
 * When the program detects a mouse press, audio stored in "fisher" variable will play
*/
function mousePressed() {
    fisher.play();
}

/**
 * Draws the "cancelation" effect scene
*/
function draw() {
    // Defines background of canvas (the future) as white, or perhaps, blank, hmmmm....
    background(255);

    // Creates the "cancelation" / Capital
    push();
    fill(capital.r, capital.g, capital.b);
    rect(capital.position.x, capital.position.y, capital.size.w, capital.size.h);
    noStroke();
    pop();

    // Controls the "cancelation's" slow and progressive emergence as a kind of dark malevolence (capital)
    capital.r -= 0.001
    capital.g -= 0.001
    capital.b -= 0.001

    // Controls the "cancelation's" movement and size as it envelops the future that is your screen (capital)
    capital.position.x += 0.05
    capital.position.y -= 0.05
    capital.size.w += 0.05
    capital.size.h += 0.05

    // Constrains the "cancelation's" position
    capital.position.x = constrain(capital.position.x, capital.minPosition.x, capital.maxPosition.x);
    capital.position.y = constrain(capital.position.y, capital.minPosition.y, capital.maxPosition.y);

    // Constrains the "cancelation's" size
    capital.size.w = constrain(capital.size.w, capital.minSize.w, capital.maxSize.w);
    capital.size.h = constrain(capital.size.h, capital.minSize.h, capital.maxSize.h);

}
