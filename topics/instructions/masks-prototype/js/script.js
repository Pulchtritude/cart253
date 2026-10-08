/**
 * Masks
 * John Hanna
 * 
 * Generally speaking, we adhere to the demands of society that we put a big
 * smile on our face, no matter what we're feeling. This project is meant to explore this, 
 * albiet I can't figure out how to load images and audio in the same project;
 * so, my transparent "smile.png" which "makes" this project is not included :(
 */

"use strict";

/** 
 * Defines a variable that sets the parameters for the drawFace function
 */
let face = {
    // positions and size
    x: 500,
    y: 500,
    size: 500,
    // neutral expression
    neutral: "#040405",
    // "affects"; more like general surface level expressions, 
    // with the exception of "euphoria"---just humor me please
    affect: {
        happy: "#fff700",
        angry: "#ff0000",
        sad: "#0000ff",
        euphoria: "#bc2890",
    },
}

/**
 * Defines a variable that is used to call an audio file in setup and play using an event.key
 */
let web;

/**
 * Defines a variable that is used to load an image in setup and display it in draw
 * Note: This doesn't work, i'm not sure how to load images and audio in the same project
 */
let mask;

/**
 * Creates canvas, loads audio and image
*/
function setup() {
    createCanvas(1000, 1000);
    // Uses web variable to call "createAudio" for specific file
    // This file is the song "The Woven Web" by Animals as Leaders
    // Songs can be their own specific affects, and for the sake of this project,
    // "The Woven Web" feels like a certain kind of intense euphoria to me
    web = createAudio('assets/sounds/web.mp3');
    // See note above "let mask;" variable
    mask = loadImage('assets/images/smile.png')
}

/**
 * Draws the scene
*/
function draw() {
    drawFace();
}
/**
 * The crux in interaction in this project is this keyPressed event 
 * which uses different key presses to display different affect on the face indicated by color
 */
function keyPressed(event) {
    // By pressing "a", face becomes red with anger
    // Stops "The Woven Web" if it's currently playing
    if (event.key === "a") {
        face.neutral = face.affect.angry;
        web.stop();
    }
    // By pressing "s", face becomes blue with sadness
    // Stops "The Woven Web" if it's currently playing
    else if (event.key === "s") {
        face.neutral = face.affect.sad;
        web.stop();
    }
    // By pressing "shift + h", face becomes yellow with happiness
    // This is a capital h to emphasize effort
    // Stops "The Woven Web" if it's currently playing
    else if (event.key === "H") {
        face.neutral = face.affect.happy;
        web.stop();

    }
    // By pressing "w", face becomes "woven" in euphoria
    // Stops "The Woven Web" if it's currently playing
    else if (event.key === "w") {
        face.neutral = face.affect.euphoria;
        web.play();
    }
}

/**
 * Defines a function which denotes the parameters for drawing a face 
 * using data from the "face" variable
 */
function drawFace() {
    ellipseMode(CENTER)
    push();
    noStroke();
    fill(face.neutral)
    ellipse(face.x, face.y, face.size)
    pop();
}