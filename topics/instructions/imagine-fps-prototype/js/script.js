/**
 * Imagine FPS
 * John Hanna
 * 
 * When you engage with a certain control framework (that of the FPS), 
 * with certain auditory cues, 
 * what game do you think of first and why?
 * An oddly good conversation starter :)
 * 
 * Sound effects are sourced from FreeSound.org
 */

"use strict";

/**
 * Defines various variables (with apt names)
 * which are simply used to call their assigned audio files
 * loaded in setup and called in both draw and event functions
 * These audio files are the crux of the prototype
*/
let pew;
let walk;
let reload;
let grenade;

/**
 * Creates canvas and loads all neccessary audio files
 * Some will called in draw
 * And others will be called in events
*/
function setup() {
    createCanvas(1000, 1000);
    pew = createAudio('assets/sounds/pew2.wav');
    walk = createAudio('assets/sounds/walk2.wav');
    reload = createAudio('assets/sounds/reload.mp3');
    grenade = createAudio('assets/sounds/grenade.mp3');
}

/**
 * Draws the scene. Albiet, it's not actually drawing anything visual.
 * These conditionals are being called over and over again so that 
 * the interaction here is seamless.
*/
function draw() {
    // if mouse is pressed, you shoot imaginary gun: indicated by the "toy" gun shot 
    // sound effect called in setup
    if (mouseIsPressed === true) {
        pew.play();
    }
    // If each of the selected keys (differentied by keycodes) are pressed,
    // you perform an imaginary walk: indicated by walk sound effect called in setup
    if (keyIsPressed === true) {
        // "w"
        if (keyCode === 87) {
            walk.play();
        }
        // "a"
        else if (keyCode === 65) {
            walk.play();
        }
        // "s"
        else if (keyCode === 83) {
            walk.play();
        }
        // "d"
        else if (keyCode === 68) {
            walk.play();
        }
    }
}

/**
 * Defines a function that uses events to call specific "actions" through key presses
 * that are not meant to be called in draw over and over again.
*/
function keyPressed(event) {
    // if "r" is pressed, an uninteruptable reload sound effect plays
    // In shooter games, you can sometimes interupt reloads, 
    // but this won't be the case here
    if (event.key === "r") {
        reload.play();
    }
    // if "g" is pressed, and uninteruptable grenade sound effect plays
    // In shooter games, there is no undoing a grenade throw
    else if (event.key === "g") {
        grenade.play();
    }
}
