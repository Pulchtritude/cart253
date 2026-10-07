/**
 * Critiquing Ideology
 * Author Name
 * 
 * I am your god
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
 * 
*/
let dollar;
let god;
let ambient;
let am = {
    move: 500,
};

async function setup() {
    // Load the image.
    dollar = await loadImage('assets/images/dollar.png');
    god = await loadImage('assets/images/god.png');

    ambient = createAudio('assets/sounds/ambient.wav');

    createCanvas(1000, 1000);


}



/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255);
    imageMode(CENTER);
    image(god, 500, 500);
    image(dollar, 500, am.move);
}

function mouseWheel(event) {
    if (event.delta > 0) {
        am.move += 5;
        ambient.play();
    }
    else {
        am.move -= 5;
        ambient.play();
    }
    if (event.delta === 0) {
        ambient.stop();
    }

}