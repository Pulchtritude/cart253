/**
 * Fading Pink Sunset
 * John Hanna
 * 
 * The opertune moment that is the peak of a pink sunset is quickly slipping away from your grasp. 
 * Press "p" to pull it back, saving it from being lost to time, or let it go. 
 * Is it perhaps better to let it go...
 * 
 */

"use strict";

/**
 * Defines a variable called song which is used to load and call 
 * the audio file that plays when the player attempts to pull
 * the past back into the present
*/
let song;

/**
 * Defines a variable called sunset which sets the specifications for 
 * the drawSunset function
*/
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
    song = createAudio('assets/sounds/pman.mp3');
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
 */
function drawSunset() {

    // Draws sunset
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

    // Determinates the rate at which the sunset.pull value decreases,
    // thereby determining the rate at which the program will progress from
    // the visual start of the present drawing the end point of the present
    // The present is always falling away from us, as it were. 
    sunset.pull -= sunset.speed;

    // if the present manages to fully slip away, 
    // the auditory spell will cease, and you will be
    // greeted by your own internal void.
    if (sunset.pull === 0) {
        song.stop();
        background(0);
    }

}

/**
 * Defines a function that details the specifications
 * regarding a keypress interaction event. 
 * The substance of the program lies in this simple interaction pulling the past back
 */
function keyPressed(event) {
    // By pressing "g", you grab onto 
    // the present, the opertune moment
    // that will innevitably slip away
    if (event.key === "p") {
        sun.pull = 255;
        song.play();
    }
}

