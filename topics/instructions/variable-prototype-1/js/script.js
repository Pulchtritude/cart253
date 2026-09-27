/**
 * Building?
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let building = {
    x: 0,
    y: 900,
    w: 250,
    h: 500,
    s: 200,
    r: 172,
    g: 172,
    b: 172
};

/**
 * Create Canvas
*/
function setup() {
    createCanvas(1000, 1000);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255);

    pop();
    fill(building.r, building.g, building.b);
    rect(building.x, building.y, building.w, building.h);
    push();

    building.r += 0.5
    building.g -= 0.5
    building.b -= 0.5

    building.x += 0.5
    building.y -= 0.5
    building.w += 0.5
    building.h += 0.5
}
