//jesus, ok, let's get this started. Third time's the charm?
let x1 = 1
let x2 = 1
let x3 = 1
let y1 = 1
let y2 = 1
let y3 = 1

let x4 = 1
let x5 = 1
let x6 = 1
let y4 = 1
let y5 = 1
let y6 = 1

let x1_speed = 1
let x2_speed = 2
let x3_speed = 3

let x4_speed = 1
let x5_speed = 2
let x6_speed = 3

let y1_speed = 1
let y2_speed = 2
let y3_speed = 3

let y4_speed = 1
let y5_speed = 2
let y6_speed = 3

//x direction
let xdirection1 = 'right'
let xdirection2 = 'right'
let xdirection3 = 'right'

let xdirection4 = 'right'
let xdirection5 = 'right'
let xdirection6 = 'right'
//y direction
let ydirection1 = 'down'
let ydirection2 = 'down'
let ydirection3 = 'down'

let ydirection4 = 'down'
let ydirection5 = 'down'
let ydirection6 = 'down'

let shapes = ['triangle', 'rect', 'ellipse']
let radius = 0
// let ballx1 = 0
// let ballx2 = 0
// let ballx3 = 0
// let ballx4 = 0

// let bally1 = 0
// let bally2 = 0
// let bally3 = 0
// let bally4 = 0

// let balldx1 = 0
// let balldx2 = 0
// let balldx3 = 0
// let balldx4 = 0

// let balldy1 = 0
// let balldy2 = 0
// let balldy3 = 0
// let balldy4 = 0

let colors =['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink']

let time = 0

function setup() {

createCanvas(750, 750) //canvas

//randos
x1 = random(1, 749)
x2 = random(1, 749)
x3 = random(1, 749)
x4 = random(1, 749)
x5 = random(1, 749)
x6 = random(1, 749)
y1 = random(1, 749)
y2 = random(1, 749)
y3 = random(1, 749)
y4 = random(1, 749)
y5 = random(1, 749)
y6 = random(1, 749)

x1_speed = random(0,5)
x2_speed = random(0,5)
x3_speed = random(0,5)
x4_speed = random(0,5)
x5_speed = random(0,5)
x6_speed = random(0,5)
y1_speed = random(0,5)
y2_speed = random(0,5)
y3_speed = random(0,5)
y4_speed = random(0,5)
y5_speed = random(0,5)
y6_speed = random(0,5)

colortl = random(colors)
colortr = random(colors)
colorbl = random(colors)
colorbr = random(colors)

shapetl = random(shapes)
shapetr = random(shapes)
shapebl = random(shapes)
shapebr = random(shapes)

// ballx1 = random(0,375)
// ballx2 = random(375,750)
// ballx3 = random(0,375)
// ballx4 = random(375,750)

// bally1 = random(0,375)
// bally2 = random(0,375)
// bally3 = random(375,750)
// bally4 = random(375,750)

}

function draw() { //HERE IS THE DRAW FUNCTION

push()
    translate(375, 375)
 
    rotate(frameCount/300);
 
    translate(-375, -375);
background (255)

//Shapes 

radius = random(5, 250)

// balldx1 = random(10, 300)
// balldx2 = random(10, 300)
// balldx3 = random(10, 300)
// balldx4 = random(10, 300)

// balldy1 = random(10, 300)
// balldy2 = random(10, 300)
// balldy3 = random(10, 300)
// balldy4 = random(10, 300)

// top left---------------------------------------------------------------------------------------------------------------------------------
noStroke()
	if (colortl == 'red') {
		fill(0, 255, 0, 100)
	}
	if (colortr == 'orange') {
		fill(0, 255, 255, 100)
	}
	if (colortr == 'yellow') {
		fill(127, 0, 255, 100)
	}
	if (colortr == 'green') {
		fill(255, 0, 0, 100)
	}
	if (colortr == 'blue') {
		fill(255, 153, 51, 100)
	}
	if (colortr == 'purple') {
		fill(255, 255, 0, 100)
	}
	if (colortr == 'pink') {
		fill(153, 255, 51, 100)
	}

if (shapetl == 'triangle') {
	triangle (random(0,375), random(0,375), random(0,375), random(0,375), random(0,375), random(0,375))
}


if (shapetl == 'rect') {
	rect (random(0,375-radius), random(0,375-radius), radius, radius)
}


if (shapetl == 'ellipse') {

	// 	if (ballx1 <= 0) { //ball x -----------------------------------------------------x
	// 			balldx1 = 'right'	
	// 		}

	// 		if (balldx1 == 'right') {
	// 			ballx1 = ballx1 + x1_speed
	// 		}

	// 		if (ballx1 >= width/2) { 
	// 			balldx1 = 'left'
	// 			x1_speed = random(0,10)
	// 		}

	// 		if (balldx1 == 'left') {
	// 			ballx1 = ballx1 - x1_speed
	// 		}
	// 		if (bally1 <= 0) { //ball y -----------------------------------------------------y
	// 			balldy1 = 'down'	
	// 		}

	// 		if (balldy1 == 'down') {
	// 			bally1 = bally1 + y1_speed
	// 		}

	// 		if (bally1 >= height/2) { 
	// 			balldy1 = 'up'
	// 		}

	// 		if (balldy1 == 'up') {
	// 			bally1 = bally1 - y1_speed
	// 		}


			
	// 		ellipse(ballx1, bally1, balldx1, balldy1)
	// fill(255)
	ellipse(random(0,375-radius/2), random(0,375-radius/2), radius, radius)
	
}

//top right---------------------------------------------------------------------------------------------------------------------------------

	if (colortr == 'red') {
		fill(0, 255, 0, 100)
	}
	if (colortr == 'orange') {
		fill(0, 255, 255, 100)
	}
	if (colortr == 'yellow') {
		fill(127, 0, 255, 100)
	}
	if (colortr == 'green') {
		fill(255, 0, 0, 100)
	}
	if (colortr == 'blue') {
		fill(255, 153, 51, 100)
	}
	if (colortr == 'purple') {
		fill(255, 255, 0, 100)
	}
	if (colortr == 'pink') {
		fill(153, 255, 51, 100)
	}

if (shapetr == 'triangle') {
	triangle (random(375,750), random(0,375), random(375,750), random(0,375), random(375,750), random(0,375))
}


if (shapetr == 'rect') {
	rect (random(375+radius,750), random(0,375-radius), radius, radius)
}


if (shapetr == 'ellipse') {

	// 		if (ballx2 <= 375) { //ball x -----------------------------------------------------x
	// 			balldx2 = 'right'	
	// 		}

	// 		if (balldx2 == 'right') {
	// 			ballx2 = ballx2 + x2_speed
	// 		}

	// 		if (ballx2 >= width) { 
	// 			balldx2 = 'left'
	// 			x1_speed = random(0,10)
	// 		}

	// 		if (balldx2 == 'left') {
	// 			ballx2 = ballx2 - x2_speed
	// 		}
	// 		if (bally2 <= 0) { //ball y -----------------------------------------------------y
	// 			balldy2 = 'down'	
	// 		}

	// 		if (balldy2 == 'down') {
	// 			bally2 = bally2 + y2_speed
	// 		}

	// 		if (bally2 >= height/2) { 
	// 			balldy2 = 'up'
	// 		}

	// 		if (balldy2 == 'up') {
	// 			bally2 = bally2 - y2_speed
	// 		}

	// 		ellipse(ballx2, bally2, balldx2, balldy2)

	// fill(255)
	
	ellipse(random(375+radius/2,750), random(0,375-radius/2), radius, radius)
}

//bottom left---------------------------------------------------------------------------------------------------------------------------------

	if (colorbl == 'red') {
		fill(0, 255, 0, 100)
	}
	if (colorbl == 'orange') {
		fill(0, 255, 255, 100)
	}
	if (colorbl == 'yellow') {
		fill(127, 0, 255, 100)
	}
	if (colorbl == 'green') {
		fill(255, 0, 0, 100)
	}
	if (colorbl == 'blue') {
		fill(255, 153, 51, 100)
	}
	if (colorbl == 'purple') {
		fill(255, 255, 0, 100)
	}
	if (colorbl == 'pink') {
		fill(153, 255, 51, 100)
	}

if (shapebl == 'triangle') {
	triangle (random(0,375), random(375,750), random(0,375), random(375,750), random(0,375), random(375,750))
}


if (shapebl == 'rect') {
	rect (random(0,375-radius), random(375+radius,750), radius, radius)
}


if (shapebl == 'ellipse') {

	// 		if (ballx3 <= 375) { //ball x -----------------------------------------------------x
	// 			balldx3 = 'right'	
	// 		}

	// 		if (balldx3 == 'right') {
	// 			ballx3 = ballx3 + x3_speed
	// 		}

	// 		if (ballx3 >= width) { 
	// 			balldx3 = 'left'
	// 			x3_speed = random(0,10)
	// 		}

	// 		if (balldx3 == 'left') {
	// 			ballx3 = ballx3 - x3_speed
	// 		}
	// 		if (bally3 <= 0) { //ball y -----------------------------------------------------y
	// 			balldy3 = 'down'	
	// 		}

	// 		if (balldy3 == 'down') {
	// 			bally3 = bally3 + y3_speed
	// 		}

	// 		if (bally3 >= height/2) { 
	// 			balldy3 = 'up'
	// 		}

	// 		if (balldy3 == 'up') {
	// 			bally3 = bally3 - y3_speed
	// 		}

	// 		ellipse(ballx3, bally3, balldx3, balldy3)

	// fill(255)
	
	ellipse(random(0,375-radius/2), random(375+radius/2,750), radius, radius)
	
}

//bottom right---------------------------------------------------------------------------------------------------------------------------------
	
	if (colorbr == 'red') {
		fill(0, 255, 0, 100)
	}
	if (colorbr == 'orange') {
		fill(0, 255, 255, 100)
	}
	if (colorbr == 'yellow') {
		fill(127, 0, 255, 100)
	}
	if (colorbr == 'green') {
		fill(255, 0, 0, 100)
	}
	if (colorbr == 'blue') {
		fill(255, 153, 51, 100)
	}
	if (colorbr == 'purple') {
		fill(255, 255, 0, 100)
	}
	if (colorbr == 'pink') {
		fill(153, 255, 51, 100)
	}

if (shapebr == 'triangle') {
	triangle (random(375,750), random(375,750), random(375,750), random(375,750), random(375,750), random(375,750))
}


if (shapebr == 'rect') {
	rect (random(375+radius,750), random(375+radius,750), radius, radius)
}


if (shapebr == 'ellipse') {

	// 		if (ballx4 <= 375) { //ball x -----------------------------------------------------x
	// 			balldx4 = 'right'	
	// 		}

	// 		if (balldx4 == 'right') {
	// 			ballx4 = ballx4 + x4_speed
	// 		}

	// 		if (ballx4 >= width) { 
	// 			balldx4 = 'left'
	// 			x_speed = random(0,10)
	// 		}

	// 		if (balldx4 == 'left') {
	// 			ballx4 = ballx4 - x4_speed
	// 		}
	// 		if (bally4 <= 0) { //ball y -----------------------------------------------------y
	// 			balldy4 = 'down'	
	// 		}

	// 		if (balldy4 == 'down') {
	// 			bally4 = bally4 + y4_speed
	// 		}

	// 		if (bally4 >= height/2) { 
	// 			balldy4 = 'up'
	// 		}

	// 		if (balldy4 == 'up') {
	// 			bally4 = bally4 - y4_speed
	// 		}
			
	// 		ellipse(ballx4, bally4, balldx4, balldy4)

	// fill(255)
	
	ellipse(random(375+radius/2,750), random(375+radius/2,750), radius, radius)
	
}




//Triangle Eraser
	fill(200)
	noStroke()
	triangle(x1, y1, x2, y2, x3, y3)
	triangle(x4, y4, x5, y5, x6, y6)

// \\	 //
//	\\  //
//	 \\//
//	 //\\
//	//  \\
// //    \\ 


//x1 movement

	if (x1 <= 0) { //(<=) greater than or equals, (>=) less than or equals, (!=) not equal
		xdirection1 = 'right'	
		x1_speed = random(0,10)	
	}

	if (xdirection1 == 'right') {
		x1 = x1 + x1_speed
	}

	if (x1 >= width) { 
		xdirection1 = 'left'
		x1_speed = random(0,10)
	}

	if (xdirection1 == 'left') {
		x1 = x1 - x1_speed
	}

//x2 movement
	if (x2 <= 0) { 
		xdirection2 = 'right'
		x2_speed = random(0,10)		
	}
	if (xdirection2 == 'right') {
		x2 = x2 + x2_speed
	}

	if (x2 >= width) { 
		xdirection2 = 'left'
		x2_speed = random(0,10)
	}

	if (xdirection2 == 'left') {
		x2 = x2 - x2_speed
	}


//x3 movement
	if (x3 <= 0) { 
		xdirection3 = 'right'	
		x3_speed = random(0,10)	
	}

	if (xdirection3 == 'right') {
		x3 = x3 + x3_speed
	}

	if (x3 >= width) { 
		xdirection3 = 'left'
		x3_speed = random(0,10)
	}

	if (xdirection3 == 'left') {
		x3 = x3 - x3_speed
	}

//x4 movement

	if (x4 <= 0) { //(<=) greater than or equals, (>=) less than or equals, (!=) not equal
		xdirection4 = 'right'	
		x4_speed = random(0,10)	
	}

	if (xdirection4 == 'right') {
		x4 = x4 + x4_speed
	}

	if (x4 >= width) { 
		xdirection4 = 'left'
		x4_speed = random(0,10)
	}

	if (xdirection4 == 'left') {
		x4 = x4 - x1_speed
	}

//x5 movement
	if (x5 <= 0) { 
		xdirection5 = 'right'
		x5_speed = random(0,10)		
	}
	if (xdirection5 == 'right') {
		x5 = x5 + x5_speed
	}

	if (x5 >= width) { 
		xdirection5 = 'left'
		x5_speed = random(0,10)
	}

	if (xdirection5 == 'left') {
		x5 = x5 - x5_speed
	}


//x6 movement
	if (x6 <= 0) { 
		xdirection6 = 'right'	
		x6_speed = random(0,10)	
	}

	if (xdirection6 == 'right') {
		x6 = x6 + x6_speed
	}

	if (x6 >= width) { 
		xdirection6 = 'left'
		x6_speed = random(0,10)
	}

	if (xdirection6 == 'left') {
		x6 = x6 - x6_speed
	}

// \\	 //
//	\\  //
//	 \\//
//	  ||
//	  ||
//	  ||


//y1 movement
	if (y1 <= 0) { 
		ydirection1 = 'down'	
		y1_speed = random(0,10)	
	}

	if (ydirection1 == 'down') {
		y1 = y1 + y1_speed
	}

	if (y1 >= height) { 
		ydirection1 = 'up'
		y1_speed = random(0,10)
	}

	if (ydirection1 == 'up') {
		y1 = y1 - y1_speed
	}

//y2 movement
	if (y2 <= 0) { 
		ydirection2 = 'down'	
		y2_speed = random(0,10)	
	}

	if (ydirection2 == 'down') {
		y2 = y2 + y2_speed
	}

	if (y2 >= height) { 
		ydirection2 = 'up'
		y2_speed = random(0,10)
	}

	if (ydirection2 == 'up') {
		y2 = y2 - y2_speed
	}


//y3 movement
	if (y3 <= 0) { 
		ydirection3 = 'down'
		y3_speed = random(0,10)		
	}

	if (ydirection3 == 'down') {
		y3 = y3 + y3_speed
	}

	if (y3 >= height) { 
		ydirection3 = 'up'
		y3_speed = random(0,10)
	}

	if (ydirection3 == 'up') {
		y3 = y3 - y3_speed
	}

//y4 movement
	if (y4 <= 0) { 
		ydirection4 = 'down'	
		y4_speed = random(0,10)	
	}

	if (ydirection4 == 'down') {
		y4 = y4 + y4_speed
	}

	if (y4 >= height) { 
		ydirection4 = 'up'
		y4_speed = random(0,10)
	}

	if (ydirection4 == 'up') {
		y4 = y4 - y4_speed
	}

//y5 movement
	if (y5 <= 0) { 
		ydirection5 = 'down'	
		y5_speed = random(0,10)	
	}

	if (ydirection5 == 'down') {
		y5 = y5 + y5_speed
	}

	if (y5 >= height) { 
		ydirection5 = 'up'
		y5_speed = random(0,10)
	}

	if (ydirection5 == 'up') {
		y5 = y5 - y5_speed
	}


//y3 movement
	if (y6 <= 0) { 
		ydirection6 = 'down'
		y6_speed = random(0,10)		
	}

	if (ydirection6 == 'down') {
		y6 = y6 + y6_speed
	}

	if (y6 >= height) { 
		ydirection6 = 'up'
		y6_speed = random(0,10)
	}

	if (ydirection6 == 'up') {
		y6 = y6 - y6_speed
	}



//rects ---------------------------------------------------------------------------------------------------------------------------------
noStroke()


rectMode(CORNER)

//top left
		//colors
	if (colortl == 'red') {
		fill(255, 0, 0, 100)
	}
	if (colortl == 'orange') {
		fill(255, 128, 0, 100)
	}
	if (colortl == 'yellow') {
		fill(255, 255, 0, 100)
	}
	if (colortl == 'green') {
		fill(51, 255, 51, 100)
	}
	if (colortl == 'blue') {
		fill(51, 51, 255, 100)
	}
	if (colortl == 'purple') {
		fill(127, 0, 255, 100)
	}
	if (colortl == 'pink') {
		fill(255, 102, 255, 100)
	}

	rect(0, 0, 375, 375)



//top right
		//colors
		if (colortr == 'red') {
		fill(255, 0, 0, 100)
	}
	if (colortr == 'orange') {
		fill(255, 128, 0, 100)
	}
	if (colortr == 'yellow') {
		fill(255, 255, 0, 100)
	}
	if (colortr == 'green') {
		fill(51, 255, 51, 100)
	}
	if (colortr == 'blue') {
		fill(51, 51, 255, 100)
	}
	if (colortr == 'purple') {
		fill(127, 0, 255, 100)
	}
	if (colortr == 'pink') {
		fill(255, 102, 255, 100)
	}

	rect(375, 0, 750, 375)



//bottom left
		//colors
		if (colorbl == 'red') {
		fill(255, 0, 0, 100)
	}
	if (colorbl == 'orange') {
		fill(255, 128, 0, 100)
	}
	if (colorbl == 'yellow') {
		fill(255, 255, 0, 100)
	}
	if (colorbl == 'green') {
		fill(51, 255, 51, 100)
	}
	if (colorbl == 'blue') {
		fill(51, 51, 255, 100)
	}
	if (colorbl == 'purple') {
		fill(127, 0, 255, 100)
	}
	if (colorbl == 'pink') {
		fill(255, 102, 255, 100)
	}

	rect(0, 375, 375, 750)



//bottom right
		//colors
		if (colorbr == 'red') {
		fill(255, 0, 0, 100)
	}
	if (colorbr == 'orange') {
		fill(255, 128, 0, 100)
	}
	if (colorbr == 'yellow') {
		fill(255, 255, 0, 100)
	}
	if (colorbr == 'green') {
		fill(51, 255, 51, 100)
	}
	if (colorbr == 'blue') {
		fill(51, 51, 255, 100)
	}
	if (colorbr == 'purple') {
		fill(127, 0, 255, 100)
	}
	if (colorbr == 'pink') {
		fill(255, 102, 255, 100)
	}

	rect(375, 375, 750, 750)

pop()




//time -------------------------------------------------------------------------------------------------------------------------
time = time + 1

if (time >= random(100,1000)) {
	colortl = random(colors)
	colortr = random(colors)
	colorbl = random(colors)
	colorbr = random(colors)
	shapetl = random(shapes)
	shapetr = random(shapes)
	shapebl = random(shapes)
	shapebr = random(shapes)
	time = 0
}




	push()
	strokeWeight(1)
	noFill()
	stroke(5)
	rect(0, 0, 750, 750)
	pop()
}
