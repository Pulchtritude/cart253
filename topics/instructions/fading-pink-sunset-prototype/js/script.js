/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let sun = {
    // Position and size of the sunset
    x: 500,
    y: 500,
    size: 700,
    map: 0,
    speed: .1,
    pull: 255,
    r: 255,
    g: 0,
    b: 255,
    // These fills are the states that the program interpolates in the order shown. 

}



/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000);
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

    }

}


function keyPressed(event) {
    // By pressing "a", face becomes red with anger
    // Stops "The Woven Web" if it's currently playing
    if (event.key === "s") {
        sun.pull = 255;
    }


}

