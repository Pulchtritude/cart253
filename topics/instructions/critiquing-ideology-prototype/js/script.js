/**
 * Critiquing Ideology
 * John Hanna
 * 
 * When the man put on his sunglasses, the capitalist object in his pocket spoke: "I am your god"
 */

"use strict";

/**
 * Defines a variable that is used to load a modified dollar image 
 * in async setup and displayed by calling it draw
 */
let dollar;

/**
 * Defines a variable that is used to load an image (w/ a message)
 * the exact same size as the modified dollar image in async setup 
 * and displayed by calling it draw
 */
let god;

/** 
 * Defines a variable that sets the parameters for the draw and mouse wheel event functions
 * It's called "am" in reference to Harlan Ellison's "I Have No Mouth and I Must Scream"
 */
let am = {
    // position
    x: 500,
    y: 500,
    // This can be used as a subtitute for "am.x" and "am.y"
    // This is defined for the purposes of the mousewheel events function
    move: 500,
    // Defines the speed at which any of three above paramters 
    // (for this case, just "am.move") move
    speed: 10,
};

/**
 * Uses an async setup to load images 
 * defined by variables "dollar" and "god" 
 * and creates the canvas 
*/
async function setup() {
    createCanvas(1000, 1000);
    // Load the image.
    dollar = await loadImage('assets/images/dollar.png');
    god = await loadImage('assets/images/god.png');
}

/**
 * Draws the scene
 * Uses data from "am" variable for the two images called in draw
*/
function draw() {
    background(255);
    imageMode(CENTER);
    image(god, am.x, am.y);
    image(dollar, am.x, am.move);
}

/**
 * Calls a mousewheel function event using delta in order to control the "am.move" parameter
*/
function mouseWheel(event) {
    // If mousewheel is moved up, "am.move", 
    // which is bound to the image defined as "dollar",
    // will shift position in positive y values @ "am.speed"
    if (event.delta > 0) {
        am.move += am.speed;
    }
    // If mousewheel is moved down, "am.move", 
    // which is bound to the image defined as "dollar",
    // will shift position in negative y values @ "am.speed"
    else {
        am.move -= am.speed;
    }
}