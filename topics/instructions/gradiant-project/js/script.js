/**
 * Gradiant Project
 * John Hanna
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(600, 300);
}


/**
 * Draw a gradiant
*/
function draw() {
    background(0);

    let y = 0;

    for (let x = 0; x <= width; x += 3) {
        const shade = map(x, 0, width, 255);

        push();
        stroke(shade);
        line(x, 0, x, height);
        pop();

        y += random(0, 10);
    }

}