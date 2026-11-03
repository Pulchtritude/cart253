/**
 * Positive or Negative Years?
 * John Hanna
 * 
 * "Do you associate more positively or negatively with the following years?"
 */

"use strict";

const years =
    ["Do you associate positively or negatively with the following years?",
        "Press 'p' for posittivity, and 'n' for negativity",
        "2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016",
        "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005",
        "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995",
        "Did you associate more positively or negatively with the this set of years?"];

let yearsIndex = 0;

let pros = [];

let prosIndex = undefined;

let cons = [];

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000);
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    drawText();

    for (let pro of pros) {
        drawPro(pro1);

    }

    for (let con of cons) {
        drawCon(con1);
    }
}

function drawText() {

    background("#ffea00");

    let currentLine = years[yearsIndex];

    push();
    fill(0);
    textSize(30);
    textAlign(CENTER, CENTER);
    text(currentLine, width / 2, height / 2);
    pop();
}

function createPro() {
    const newPro = {
        x: random(100, 900),
        y: random(100, 900),
        size: 50,
        fill: "#04ff00",
    };
    return newPro;
}

function createCon() {
    const newCon = {
        x: random(100, 900),
        y: random(100, 900),
        size: 50,
        fill: "#ff0000",
    };
    return newCon;
}

function drawPro(pros) {

    push();
    fill(pros.fill)
    ellipse(pros.x, pros.y, pros.size)
    pop();
}

function drawCon(cons) {
    push();
    fill(cons.fill)
    ellipse(cons.x, cons.y, cons.size)
    pop();
}

function keyPressed(event) {

    if (event.key === "p") {
        pros.push(createPro());
        yearsIndex = yearsIndex + 1;
    }

    else if (event.key === "n") {
        cons.push(createCon());
        yearsIndex = yearsIndex + 1;
    }

    else if (event.key === "i") {
        yearsIndex = yearsIndex + 1;
    }

    else if (yearsIndex >= years.length) {
        yearsIndex = 0;
    }
}




