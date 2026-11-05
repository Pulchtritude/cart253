/**
 * Random Presentation
 * John Hanna
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

let covers = [];

let currentCover;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/

function preload() {
    covers[0] = loadImage('assets/images/resist.jpg');
    covers[1] = loadImage('assets/images/shadow.jpg');
    covers[2] = loadImage('assets/images/jedi.jpg');
    covers[3] = loadImage('assets/images/asura.jpg');
    covers[4] = loadImage('assets/images/leaf.jpg');
    covers[5] = loadImage('assets/images/dante.jpg');
    covers[6] = loadImage('assets/images/ffxv.jpg');
    covers[7] = loadImage('assets/images/azure.jpg');
    covers[8] = loadImage('assets/images/hearts.jpg');
    covers[9] = loadImage('assets/images/spider.jpg');
}

function setup() {
    createCanvas(1000, 1000);
    currentCover = random(covers);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    drawCover();

}

function drawCover() {
    background(255);
    if (currentCover) {
        imageMode(CENTER);
        image(currentCover, width / 2, height / 2);
    }
}
function mousePressed() {
    currentCover = random(covers);
}
