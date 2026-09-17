/**
 * Landscape
 * Author Name
 * 
 * A landscape; of what exactly, I haven't decided yet
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(640, 640);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    // Grey background
    background(150);

    //Array of towers
    drawTower(10, 15);

    drawTower(130, 40);

    drawTower(165, 80);

    drawTower(90, 90);

    drawTower(290, 90);

    drawTower(225, 90);

    drawTower(570, 70);

    drawTower(440, 20);

    drawTower(260, 40);

    drawTower(40, 60);

    drawTower(200, 90);

    drawTower(510, 90);

    drawTower(540, 90);

    drawTower(330, 120);

    drawTower(390, 80);

    drawTower(470, 40);

    drawTower(600, 20);

    //The Landmass
    push();
    fill("#000000");
    stroke("#000000");
    ellipse(320, 0, 640, 300);
    pop();

    //Autre Landmass
    push();
    fill("#ff0000");
    triangle(320, 0, 640, 300);
    pop();


}

function drawTower(x, y) {

    //Towers
    push();
    fill("#ffffff");
    stroke("#000000");
    rect(x, y, 20, 200);
    pop();

}