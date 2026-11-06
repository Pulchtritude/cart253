/**
 * Positive or Negative Years?
 * John Hanna
 * 
 * "Do you associate more positively or negatively with the following years?"
 */

"use strict";

/**
 * Defines an array that is filled with lines of "dialogue"
 * These get called in the specific order they are presented
*/
const years =
    ["Do you associate positively or negatively with the following years? Press 'i' to continue",
        "Press 'p' for posittivity,'n' for negativity, and 'i' to remain indifferent",
        "2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016",
        "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005",
        "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995",
        "Did you associate more positively or negatively with the this set of years? Evalute and press 'ctrl + r' to reset"];

/**
 * Defines the default/starting line in the years array on program startup
*/
let yearsIndex = 0;

/**
 * Defines an empty array called pros.
 * "pro circles" are get pushed into this array
*/
let pros = [];

/**
 * Defines an empty array called cons.
 * "con circles" are get pushed into this array
*/
let cons = [];

/**
 * Creates Canvas
*/
function setup() {
    createCanvas(1000, 1000);
}

/**
 * Returns a Pro circle at a random x,y position
*/
function createPro() {
    const pro = {
        x: random(100, 900),
        y: random(100, 900),
        size: 50,
        fill: "#04ff00",
    };
    return pro;
}

/**
 * Returns a Con circle at a random x,y position
*/
function createCon() {
    const con = {
        x: random(100, 900),
        y: random(100, 900),
        size: 50,
        fill: "#ff0000",
    };
    return con;
}

/**
 * Draws everything in the scene: two (for of) loops are used
*/
function draw() {

    // Draws text on screen
    drawText();

    // Goes through all the pros
    for (let pro of pros) {
        drawPro(pro);
    }

    // Goes through all the cons
    for (let con of cons) {
        drawCon(con);
    }
}

/**
 * Defines the default/starting line in the pros array on program startup
*/
function drawText() {

    background("#ffea00");

    // Text on screen = line from yearsIndex
    let currentLine = years[yearsIndex];

    // Parameters for drawing text
    push();
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(currentLine, width / 2, height / 2);
    pop();
}

/**
 * Draws the Pro circle using data from const pro
*/
function drawPro(pro) {

    push();
    fill(pro.fill);
    ellipse(pro.x, pro.y, pro.size);
    pop();
}

/**
 * Draws the Con circle using data from const con
*/
function drawCon(con) {
    push();
    fill(con.fill);
    ellipse(con.x, con.y, con.size);
    pop();
}

/**
 * Uses a keyPressed event function to push pros and cons into their arrays
 * and advance lines in the years array
*/
function keyPressed(event) {

    // Defines two variables that call their respective create functions
    const newPro = createPro();
    const newCon = createCon();

    // If player presses "p", 
    // Advance to the next line,
    // and draw a pro circle,
    // pushing it into the array
    if (event.key === "p") {
        pros.push(newPro);
        yearsIndex = yearsIndex + 1;
    }

    // If player presses "n", 
    // Advance to the next line,
    // and draw a con circle,
    // pushing it into the array
    else if (event.key === "n") {
        cons.push(newCon);
        yearsIndex = yearsIndex + 1;
    }

    // If player presses "i", 
    // Advance to the next line
    else if (event.key === "i") {
        yearsIndex = yearsIndex + 1;
    }

    // Once current line is the last line in the index,
    // reset back to the first line
    // else if (yearsIndex >= years.length) {
    //     yearsIndex = 0;

    // }
}




