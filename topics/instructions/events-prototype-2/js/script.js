/**
 * Choose Your Drink
 * John Hanna
 * 
 * What kind of Poet will you be after picking your drink?
 */

"use strict";

let beer;
let water;
let energy;

/**
 * Creates Canvas and loads all the image files needed
*/
async function setup() {
    createCanvas(1000, 1000);
    // Load the image.
    beer = await loadImage('assets/images/beer.png');
    water = await loadImage('assets/images/water2.png');
    question = await loadImage('assets/images/water2.png');
    tool = await loadImage('assets/images/water2.png');
    energy = await loadImage('assets/images/water2.png');
}


/**
 * This is currently drawing nothing
*/
function draw() {

}

function keyPressed(event) {

    if (event.key === "w") {

        background(255);
        imageMode(CENTER);
        image(water, 500, 500);

    }

    else if (event.key === "b") {

        background(255);
        imageMode(CENTER);
        image(beer, 500, 500);
    }

    else if (event.key === "q") {

        background(255);
        imageMode(CENTER);
        image(question, 500, 500);
    }
}

function mousePressed() {
    background(255);
    imageMode(CENTER);
    image(tool, 500, 500);
}