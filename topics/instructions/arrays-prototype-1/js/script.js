/**
 * Positive or Negative Years?
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

const years = ["Do you associate positively or negatively with the these years:", "2024", "2022", "2020", "2008", "2001", "1994", "1986", "1972", "1968", "1939", "1914"];

let procon = []

let yearsIndex = 0;
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

//function createProcon() {
// const newProcon = {
//x: random(100, 900),
// y: random(100, 900),


