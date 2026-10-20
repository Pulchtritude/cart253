/**
 * Fading Pink Sunset
 * John Hanna
 * 
 * The opertune moment that is the peak of a pink sunset is quickly slipping away from your grasp. 
 * Press "g" to grip it, saving it from being lost to time, or let it go. Is it perhaps better to let it go...
 */

"use strict";

// Defines a variable called song which is used to load and call 
// the audio file that plays when the player attempts to pull 
// the past back into the present
let song;

let sunset = {
    // Position and size of the sunsetset
    x: 500,
    y: 500,
    size: 700,
    // Speed at which "sunset.r" decreases every frame
    speed: 0.5,
    // Pull is the "real" value of sunset.r
    pull: 255,
    // Fill
    r: 255,
    g: 0,
    b: 255,
}



/**
 * Creates the canvas and loads the audio
*/
function setup() {
    createCanvas(1000, 1000);
    song = createAudio('assets/sounds/now.mp3');
}


/**
 * Draws the scene
*/
function draw() {

    drawSunset();

}

/**
 * Defines a function that details the specifications
 * used to draw a sunsetset onto the canvas.
 * It uses sunset variable information
 * 
 */
function drawSunset() {


    rectMode(CENTER)

    push();
    fill(sunset.r, sunset.g, sunset.b);
    noStroke();
    rect(sunset.x, sunset.y, sunset.size);
    pop();

    // Maps the sunset.r and sunset.b values 
    // to set in stone a visual start and 
    // end point
    sunset.r = map(0, 0, width, sunset.pull, 0);
    sunset.b = map(0, 0, width, 150, 255);

    //
    sunset.pull -= sunset.speed;

    if (sunset.pull === 0) {
        song.stop();
        background(0);
    }

}


function keyPressed(event) {
    // By pressing "g", you grab onto 
    // the present, the opertune moment
    // that will innevitably slip away
    if (event.key === "g") {
        sun.pull = 255;
        song.play();
    }
}

