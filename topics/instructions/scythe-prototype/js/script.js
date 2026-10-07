/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";



let scytheOne;
let arm = {
    x: 1620,
    y: 0,
    w: 300,
    h: 1200,
    fill: "#ffdcb1",
}
let target = {
    x: 1620,
    y: 0,
    w: 300,
    h: 1200,
    fill: "#ffdcb1",
    fills: {
        noOverlap: "#ffdcb1",
        overlap: "#ff0000"
    }
}


async function setup() {
    // Load the image.
    scytheOne = await loadImage('assets/images/scytheOne.png');

    createCanvas(1920, 1200);

    noCursor();


}

function draw() {
    background(255);

    push();
    noStroke();
    fill(arm.fill);
    rect(arm.x, arm.y, arm.w, arm.h);
    pop();

    image(scytheOne, mouseX, mouseY);

}








/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
