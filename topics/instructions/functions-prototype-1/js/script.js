/**
 * Planet Layers
 * John Hanna
 * 
 * Planets are competing for dominating, leaving a trail of their destruction in space
 */

"use strict";


const markPlanet = {
    x: 500,
    y: 500,
    size: 100,
    color: "#1e00ff",
    mod: 5,
    debuff: 1000,
};

const jakePlanet = {
    x: 500,
    y: 500,
    size: 100,
    color: "#a31c9a",
    mod: 5,
    debuff: 1000,
};

const jayPlanet = {
    x: 500,
    y: 500,
    size: 100,
    color: "#ff0000",
    mod: 5,
    debuff: 1000,
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

    planetSizer(markPlanet);
    planetSizer(jakePlanet);
    planetSizer(jayPlanet);

    planetDebuffer(markPlanet);
    planetDebuffer(jakePlanet);
    planetDebuffer(jayPlanet);

}

function drawPlanet(planet) {

    ellipseMode(CENTER);

    push();
    //noStroke();
    fill(planet.color);
    ellipse(planet.x, planet.y, planet.size)
    pop();

}

function planetSizer(planet) {
    planet.size += random(-planet.mod, planet.mod);


}

function planetDebuffer(planet) {
    if (planet.size > planet.size) {
        planet.size += random(-planet.debuff, -planet.mod);
    }
}