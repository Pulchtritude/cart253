/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let swing = {
    on: false
};

let scytheOne;
let scytheTwo;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    // Load the image.
    scytheOne = await loadImage('assets/images/scytheOne.png');
    scytheTwo = await loadImage('assets/images/scytheTwo.png');

    createCanvas(1000, 1000);

    background(255);

    checkIfSwung();



}

function checkIfSwung() {
    if (mouseIsPressed) {
        swing.on = true;
    }
    // If mouse is unpressed, that means that the user isn't currently swinging
    else {
        swing.on = false;
        imageMode(CENTER);
        image(scytheOne, 500, 500);
    }
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {


}