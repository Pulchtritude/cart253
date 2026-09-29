/**
 * Building?
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let building = {
    r: 255,
    g: 255,
    b: 255,
    position: {
        x: 0,
        y: 900,
    },
    minPosition: {
        x: -1,
        y: -1,
    },
    maxPosition: {
        x: 0,
        y: 0
    },
    size: {
        w: 250,
        h: 500,
    },
    minSize: {
        w: 0,
        h: 0,
    },
    maxSize: {
        w: 1920,
        h: 1200,
    },

};

/**
 * Create Canvas
*/
function setup() {
    createCanvas(1920, 1200);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background(255);

    pop();
    fill(building.r, building.g, building.b);
    rect(building.position.x, building.position.y, building.size.w, building.size.h);
    push();

    building.r -= 0.15
    building.g -= 0.15
    building.b -= 0.15

    building.position.x += 0.5
    building.position.y -= 0.5
    building.size.w += 0.5
    building.size.h += 0.5

    building.position.x = constrain(building.position.x, building.minPosition.x, building.maxPosition.x);
    building.position.y = constrain(building.position.y, building.minPosition.y, building.maxPosition.y);

    building.size.w = constrain(building.size.w, building.minSize.w, building.maxSize.w);
    building.size.h = constrain(building.size.h, building.minSize.h, building.maxSize.h);

}
