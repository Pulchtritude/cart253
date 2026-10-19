/**
 * Imagine FPS
 * John Hanna
 * 
 * When you engage with a certain control framework, with certain auditory cues, what game do you think of first and why?
 */

"use strict";

let pew;
let walk;


/**
 * Creates canvas and loads audio
*/
function setup() {
    createCanvas(1000, 1000);
    pew = createAudio('assets/sounds/pew2.wav');
    walk = createAudio('assets/sounds/walk2.wav');

}


/**
 * Draws the scene. Albiet, it's not actually drawing anything visual at the moment
*/
function draw() {

    if (mouseIsPressed === true) {
        pew.play();
    }

}

function keyIsPressed(event) {

    if (event.key === "w") {

        walk.play();
    }

    else if (!keyIsPressed) {

        walk.stop();
    }

    else if (event.key === "a") {

        walk.play();
    }

    else if (event.key === "s") {

        walk.play();

    }

    else if (event.key === "d") {

        walk.play();
    }
}

//function mousePressed(event) {
// if (event.mousePressed) {
////     pew.play();
// }
// else {
//pew.stop();
//}
//}
