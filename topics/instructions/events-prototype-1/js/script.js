/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let sunset = {
    // Position and size of the sunset
    x: 0,
    y: 0,
    size: 1000,
    fill: "#87CEEB",
    // These fills are the states that the program interpolates in the order shown. 
    fills: {
        start: "#f9a73b",
        pink: "#ff5edf",
        end: "#131341",
    },
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

}

function drawSunset() {

    rectMode(Center);

    push();
    noStroke();
    rect(sunset.x, sunset.y, sunset.size)
    pop();
}