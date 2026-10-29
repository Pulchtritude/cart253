/**
 * Planet Layers
 * John Hanna
 * 
 * Planets are competing for dominating, leaving a trail of their destruction in space.
 * It lowkey looks kinda cool!
 */

"use strict";

/**
 * Defines a constant named Mark that uses "planet" for function grouping
 * This constant contains data needed to draw planet Mark, as well as to define
 * his "sizing logic"
*/
const markPlanet = {
    // Position and size
    x: 500,
    y: 500,
    size: 100,
    // Fills
    color: "#1e00ff",
    // Size Modifer
    mod: 5,
    // Size Debuff
    debuff: 1000,
};

/**
 * Defines a constant named Mark that uses "planet" for function grouping
 * This constant contains data needed to draw planet Jake, as well as to define
 * his "sizing logic"
*/
const jakePlanet = {
    // Position and size
    x: 500,
    y: 500,
    size: 100,
    // Fills
    color: "#a31c9a",
    // Size Modifer
    mod: 5,
    // Size Debuff
    debuff: 1000,
};

/**
 * Defines a constant named Mark that uses "planet" for function grouping
 * This constant contains data needed to draw planet Jay, as well as to define
 * his "sizing logic"
*/
const jayPlanet = {
    // Position and size
    x: 500,
    y: 500,
    size: 100,
    // Fills
    color: "#ff0000",
    // Size Modifer
    mod: 5,
    // Size Debuff
    debuff: 1000,
};

/**
 * Creates canvas and makes it black
*/
function setup() {
    createCanvas(1000, 1000);
    background(0);
}

/**
 * Draws all the planets
 * and calls all of their "size logic":
 * sizer and debuffer
*/
function draw() {
    // Draws Mark, Jake, and Jay
    drawPlanet(markPlanet);
    drawPlanet(jakePlanet);
    drawPlanet(jayPlanet);

    // Adds sizing logic to Mark, Jake, and Jay
    planetSizer(markPlanet);
    planetSizer(jakePlanet);
    planetSizer(jayPlanet);

    // Adds debuffing loggic to Mark, Jake, and Jay
    planetDebuffer(markPlanet);
    planetDebuffer(jakePlanet);
    planetDebuffer(jayPlanet);

}

/**
 * Defines a function that uses shared logic
 * to draw planets:
 * Organization!
*/
function drawPlanet(planet) {

    // Centers the plants on the canvas
    ellipseMode(CENTER);

    // Using shared data from the planet
    // variables, this specifies how to draw
    // each planet
    push();
    fill(planet.color);
    ellipse(planet.x, planet.y, planet.size)
    pop();
}

/**
 * Defines a function that uses shared logic 
 * to constantly affect size behavior from planets
*/
function planetSizer(planet) {
    // the size of a planet is always different at any given frame
    // using a random function that calls the mod data point to 
    // "modify" the size of the planet
    planet.size += random(-planet.mod, planet.mod);
}

/**
 * Defines a function that uses shared logic 
 * to debuff the size of any given planet based 
 * on conditional logic
*/
function planetDebuffer(planet) {
    // if "x" planet is bigger than "y" plant, 
    // x "planet" shrinks by a random value between -1000 and -5
    if (planet.size > planet.size) {
        planet.size += random(-planet.debuff, -planet.mod);
    }
}