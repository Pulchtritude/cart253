/**
 * Fading Pink Sunset
 * John Hanna
 * 
 * The opertune moment that is the peak of a pink sunset is quickly slipping away from your grasp. 
 * Press "g" to grip it, saving it from being lost to time, or let it go. Is it perhaps better to let it go...
 */

"use strict";

let song;
let sun = {
    // Position and size of the sunset
    x: 500,
    y: 500,
    size: 700,
    // Speed at which "sun.r" decreases every frame
    speed: 0.5,
    // Pull is the "real" value of sun.r
    pull: 255,
    // Fill
    r: 255,
    g: 0,
    b: 255,

}



/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000);
    song = createAudio('assets/sounds/now.mp3');
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    drawSunset();

}

function drawSunset() {


    rectMode(CENTER)

    push();
    fill(sun.r, sun.g, sun.b);
    noStroke();
    rect(sun.x, sun.y, sun.size);
    pop();

    sun.r = map(0, 0, width, sun.pull, 0);

    sun.b = map(0, 0, width, 150, 255);

    sun.pull -= sun.speed;

    if (sun.pull === 0) {
        song.stop();
    }

}


function keyPressed(event) {
    // By pressing "a", face becomes red with anger
    // Stops "The Woven Web" if it's currently playing
    if (event.key === "g") {
        sun.pull = 255;
        song.play();
    }
}

