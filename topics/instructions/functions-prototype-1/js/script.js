/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";


const markPlanet = {
    x: 500,
    y: 500,
    size: 100,
    color: "#1e00ff",
    mod: 5,
};

const jakePlanet = {
    x: 500,
    y: 500,
    size: 100,
    color: "#f6ff00",
    mod: 5,
};

const jayPlanet = {
    x: 500,
    y: 500,
    size: 100,
    color: "#3cff00",
    mod: 5,
};




/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000);
    background(0);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    drawPlanet(markPlanet);
    drawPlanet(jakePlanet);
    drawPlanet(jayPlanet);

    planetSizer();
    planetSizer()

}

function drawPlanet(planet) {

    ellipseMode(CENTER);

    push();
    noStroke();
    fill(planet.color);
    ellipse(planet.x, planet.y, planet.size)
    pop();




}

function planetSizer(planet) {
    planet.size += random(-planet.mod, planet.mod);
}