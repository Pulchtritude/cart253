/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";



let scytheOne;


async function setup() {
    // Load the image.
    scytheOne = await loadImage('assets/images/scytheOne.png');

    createCanvas(1920, 1200);

    noCursor();


}

function draw() {
    background(255);
    image(scytheOne, mouseX, mouseY);
}








/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
