/**
 * Positive or Negative Years?
 * John Hanna
 * 
 * "Do you associate more positively or negatively with the following years?"
 */

"use strict";

const years =
    ["Do you associate positively or negatively with the following years? Press 'i' to continue",
        "Press 'p' for posittivity,'n' for negativity, and 'i' to remain indifferent",
        "2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016",
        "2015", "2014", "2013", "2012", "2011", "2010", "2009", "2008", "2007", "2006", "2005",
        "2004", "2003", "2002", "2001", "2000", "1999", "1998", "1997", "1996", "1995",
        "Did you associate more positively or negatively with the this set of years? Evalute and press 'ctrl + r' to reset"];

let yearsIndex = 0;

let pros = [];

let prosIndex = 0;

let cons = [];

let consIndex = 0;

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(1000, 1000);
}

function createPro() {
    const pro = {
        x: random(100, 900),
        y: random(100, 900),
        size: 50,
        fill: "#04ff00",
    };
    return pro;
}

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
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    drawText();

    for (let pro of pros) {
        drawPro(pro);
    }

    for (let con of cons) {
        drawCon(con);
    }
}

function drawText() {

    background("#ffea00");

    let currentLine = years[yearsIndex];

    push();
    fill(0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text(currentLine, width / 2, height / 2);
    pop();
}

function drawPro(pro) {

    push();
    fill(pro.fill);
    ellipse(pro.x, pro.y, pro.size);
    pop();
}

function drawCon(con) {
    push();
    fill(con.fill);
    ellipse(con.x, con.y, con.size);
    pop();
}

function keyPressed(event) {

    const newPro = createPro();
    const newCon = createCon();

    if (event.key === "p") {
        pros.push(newPro);
        yearsIndex = yearsIndex + 1;
    }

    else if (event.key === "n") {
        cons.push(newCon);
        yearsIndex = yearsIndex + 1;
    }

    else if (event.key === "i") {
        yearsIndex = yearsIndex + 1;
    }

    else if (yearsIndex >= years.length) {
        yearsIndex = 0;
        prosIndex = 0;
        consIndex = 0;

    }
}




