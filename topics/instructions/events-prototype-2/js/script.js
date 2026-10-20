/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let beer;
let water;
let energy;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
async function setup() {
    createCanvas(1000, 1000);
    // Load the image.
    beer = await loadImage('assets/images/beer.png');
    water = await loadImage('assets/images/water2.png');
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

}

function keyPressed(event) {



    if (event.key === "w") {

        background(255);
        imageMode(CENTER);

        image(beer, 500, 500);

    }

    else if (event.key === "b") {

        background(255);
        imageMode(CENTER);
        image(water, 500, 500);
    }
}