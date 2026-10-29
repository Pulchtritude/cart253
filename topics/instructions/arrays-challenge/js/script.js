/**
 * Boingo
 * Hanna-kun and Tiano-sama
 *
 * A ball that bounces around on the canvas
 */

let balls = []; // Will create it with createBall()

/**
 * Create the canvas and the ball
 */
function setup() {
    // Create the canvas
    createCanvas(400, 400);
    // Create the ball
    ball1 = createBall();
}

/**
 * Creates a random ball
 */
function createBall() {
    // Create a ball object with appropriate properties
    const newBall = {
        // Position and dimensions
        x: 200,
        y: 200,
        size: 20,
        // Colour
        fill: "#000000",
        // Movement
        velocity: {
            x: random(-5, 5),
            y: random(-5, 5)
        }
    };
    return newBall;
}

/**
 * Moves and draws the ball
 */
function draw() {
    background("#87ceeb");

    for (let ball of balls) {
        moveBall(ball1);
        bounceBall(ball1);
        drawBall(ball1);
    }
    //const balls = createBall(x, y, size);
    //balls.push(ball);

}



/**
 * Moves the ball according to its velocity
 */
function moveBall(balls) {
    balls.x += balls.velocity.x;
    balls.y += balls.velocity.y;
}

/**
 * Bounces the ball off the walls
 */
function bounceBall(balls) {
    // Check if the ball has reached the left or right
    const bounceX = (balls.x > width || balls.x < 0);
    // Check if the ball has reached the top or bottom
    const bounceY = (balls.y > height || balls.y < 0);

    // Handle bouncing horizontally
    if (bounceX) {
        balls.velocity.x *= -1;
    }
    // Handle bouncing vertically
    if (bounceY) {
        balls.velocity.y *= -1;
    }
}

/**
 * Draw the ball on the canvas
 */
function drawBall(balls) {
    push();
    noStroke();
    fill(balls.fill);
    ellipse(balls.x, balls.y, balls.size);
    pop();
}

function mousePressed() {
    balls.push(createBall());
}