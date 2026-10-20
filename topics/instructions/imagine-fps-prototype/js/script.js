/**
 * Imagine FPS
 * John Hanna
 * 
 * When you engage with a certain control framework, 
 * with certain auditory cues, 
 * what game do you think of first and why?
 * An oddly good conversation starter :)
 * 
 */

"use strict";

let pew;
let walk;
let reload;
let grenade;

/**
 * Creates canvas and loads audio
*/
function setup() {
    createCanvas(1000, 1000);
    pew = createAudio('assets/sounds/pew2.wav');
    walk = createAudio('assets/sounds/walk2.wav');
    reload = createAudio('assets/sounds/reload.mp3');
    grenade = createAudio('assets/sounds/grenade.mp3');
}


/**
 * Draws the scene. Albiet, it's not actually drawing anything visual at the moment
*/
function draw() {

    if (mouseIsPressed === true) {
        pew.play();
    }
    if (keyIsPressed === true) {
        if (keyCode === 87) {
            walk.play();
        }
        else if (keyCode === 65) {
            walk.play();
        }
        else if (keyCode === 83) {
            walk.play();
        }
        else if (keyCode === 68) {
            walk.play();
        }
    }

}

function keyPressed(event) {

    if (event.key === "r") {
        reload.play();
    }

    else if (event.key === "g") {
        grenade.play();
    }

}
