//points of reference for the ground right side of the road
let p1 = { x: 800, y: 300 };
let p2 = { x: 475, y: 400 };
let p3 = { x: 475, y: 450 };
let p4 = { x: 700, y: 600 };
let p5 = { x: 800, y: 600 };
//points of reference for the ground left side of the road
let p6 = { x: 0, y: 600 };
let p7 = { x: 0, y: 450 };
//big tree
let trunk = {
	x: 660,
	y: 300,
	width: 20,
	height: 150,
};
let branch = {
	x1: 575,
	y1: 300,
	x2: 750,
	y2: 300,
	x3: 662,
	y3: 100,
};
//small trees
let smallbranch = {
	x1: 750,
	y1: 300,
	x2: 770,
	y2: 300,
	x3: 760,
	y3: 285,
};
//clouds
let x = 0;
let cloud1 = {
	y: 100,
	width: 100,
	height: 100,
};

let variationclouds1x, variationClouds2x, characterPositionX, characterScale, characterPositionY;

function setup() {
	createCanvas(800, 600);
	variationclouds1x = 0;
	variationClouds2x = 300;
	characterPositionX = 580;
	characterPositionY = 600;
	characterScale = 1;
}

function draw() {
	noStroke();
	background(149, 206, 208);

	drawCloud1();
	drawCloud2();
	drawFirstMountainLeft();
	drawSecondMountainLeft();
	drawBigTree();
	drawSmallTreesBehind();
	rightSideOfTheRoad();
	leftSideOfTheRoad();
	drawRoad();
	scaleCharacterSmaller();
}

function mouseClicked() {
	if (characterPositionY >= 480) {
		characterPositionX -= 10;
		characterPositionY -= 10;
	} else if (characterPositionY >= 350) {
		characterPositionY -= 10;
	} else if (characterPositionY == 300) {
		characterPositionX = characterPositionX;
		characterPositionY = characterPositionY;
	} else if (characterPositionY >= 150) {
		characterPositionX -= 0;
		characterPositionY -= 0;
	}

	characterScale = constrain(characterScale, 0, 1);
	characterScale -= 0.01;
}

function drawCloud2() {
	variationClouds2x += 1;
	constrain(variationClouds2x, 0, 800);
	if (variationClouds2x === 800) {
		variationClouds2x = -300;
	}
	fill(255, 255, 255);
	ellipse(variationClouds2x, cloud1.y + 85, cloud1.width, cloud1.height);
	ellipse(variationClouds2x + 50, cloud1.y + 85, cloud1.width - 25, cloud1.height - 25);
	ellipse(variationClouds2x + 100, cloud1.y + 85, cloud1.width - 50, cloud1.height - 50);
	ellipse(variationClouds2x + 250, cloud1.y - 50, cloud1.width, cloud1.height);
	ellipse(variationClouds2x + 300, cloud1.y - 50, cloud1.width - 25, cloud1.height - 25);
	ellipse(variationClouds2x + 350, cloud1.y - 50, cloud1.width - 50, cloud1.height - 50);
}

function drawCloud1() {
	fill(255, 255, 255);
	variationclouds1x += 1;
	constrain(x, 0, 800);
	if (variationclouds1x === 800) {
		variationclouds1x = 0;
	}
	ellipse(variationclouds1x, cloud1.y, cloud1.width, cloud1.height);
	ellipse(variationclouds1x + 50, cloud1.y, cloud1.width - 10, cloud1.height - 10);
	ellipse(variationclouds1x + 100, cloud1.y, cloud1.width - 30, cloud1.height - 30);
	ellipse(variationclouds1x - 100, cloud1.y + 150, cloud1.width + 30, cloud1.height + 30);
	ellipse(variationclouds1x - 50, cloud1.y + 150, cloud1.width + 15, cloud1.height + 15);
	ellipse(variationclouds1x, cloud1.y + 150, cloud1.width, cloud1.height);
}

function drawSecondMountainLeft() {
	fill(17, 48, 16);
	beginShape();
	vertex((p2.x - 250 + p4.x - 650) / 2, (p2.y + 300) / 2);
	vertex(p2.x - 250, p2.y);
	vertex((p1.x + p2.x - 410) / 2, (p2.y + p1.y + 50) / 2);
	vertex(p1.x - 160, p1.y + 50);
	vertex(p4.x - 400, 200);
	vertex(p4.x - 500, 250);
	endShape();
}

function drawFirstMountainLeft() {
	fill(36, 100, 34);
	beginShape();
	vertex(p7.x, p7.y);
	vertex(p2.x - 250, p2.y);
	vertex(p4.x - 650, 300);
	endShape();
}

function drawSmallTreesBehind() {
	fill(135, 86, 13);
	ellipse(trunk.x + 100, trunk.y, trunk.width - 17, trunk.height - 125);
	ellipse(trunk.x + 110, trunk.y + 5, trunk.width - 17, trunk.height - 125);
	ellipse(trunk.x + 115, trunk.y + 10, trunk.width - 17, trunk.height - 125);
	ellipse(trunk.x + 120, trunk.y + 5, trunk.width - 17, trunk.height - 125);
	ellipse(trunk.x + 125, trunk.y, trunk.width - 17, trunk.height - 125);
	ellipse(trunk.x + 130, trunk.y - 5, trunk.width - 17, trunk.height - 125);
	ellipse(trunk.x + 135, trunk.y - 7, trunk.width - 17, trunk.height - 125);

	fill(35, 81, 37);
	triangle(smallbranch.x1, smallbranch.y1, smallbranch.x2, smallbranch.y2, smallbranch.x3, smallbranch.y3);
	triangle(smallbranch.x1 + 10, smallbranch.y1 + 5, smallbranch.x2 + 10, smallbranch.y2 + 5, smallbranch.x3 + 10, smallbranch.y3 + 5);
	triangle(smallbranch.x1 + 15, smallbranch.y1 + 10, smallbranch.x2 + 15, smallbranch.y2 + 10, smallbranch.x3 + 15, smallbranch.y3 + 10);
	triangle(smallbranch.x1 + 20, smallbranch.y1 + 5, smallbranch.x2 + 20, smallbranch.y2 + 5, smallbranch.x3 + 20, smallbranch.y3 + 5);
	triangle(smallbranch.x1 + 25, smallbranch.y1, smallbranch.x2 + 25, smallbranch.y2, smallbranch.x3 + 25, smallbranch.y3);
	triangle(smallbranch.x1 + 30, smallbranch.y1 - 5, smallbranch.x2 + 30, smallbranch.y2 - 5, smallbranch.x3 + 30, smallbranch.y3 - 5);
	triangle(smallbranch.x1 + 35, smallbranch.y1 - 7, smallbranch.x2 + 35, smallbranch.y2 - 7, smallbranch.x3 + 35, smallbranch.y3 - 7);
}

function rightSideOfTheRoad() {
	fill(48, 127, 72);
	beginShape();
	vertex(p1.x, p1.y);
	vertex(p2.x, p2.y);
	vertex(p3.x, p3.y);
	vertex(p4.x, p4.y);
	vertex(p5.x, p5.y);
	endShape();
}

function leftSideOfTheRoad() {
	beginShape();
	vertex(p2.x - 250, p2.y);
	vertex(p3.x - 250, p3.y);
	vertex(p4.x - 350, p4.y);
	vertex(p5.x - 450, p5.y);
	vertex(p6.x, p6.y);
	vertex(p7.x, p7.y);
	endShape();
}

function drawRoad() {
	fill(185, 176, 93);
	beginShape();
	vertex(p2.x, p2.y);
	vertex(p3.x, p3.y);
	vertex(p4.x, p4.y);
	vertex(p4.x - 350, p4.y);
	vertex(p3.x - 250, p3.y);
	vertex(p2.x - 250, p2.y);
	vertex(p1.x - 160, p1.y + 50);
	endShape();
}

function drawBigTree() {
	fill(135, 86, 13);
	ellipse(trunk.x, trunk.y, trunk.width, trunk.height);
	fill(77, 178, 80);
	triangle(branch.x1, branch.y1, branch.x2, branch.y2, branch.x3, branch.y3);
}

function scaleCharacterSmaller() {
	push();
	translate(characterPositionX, characterPositionY);

	push();
	scale(0.9 * characterScale, 0.9 * characterScale);

	//draw character (à revoir)
	push();
	//head
	fill(102, 50, 0);
	ellipse(0, 0, 20, 25);
	//neck
	ellipse(0, 0 + 12, 3, 10);
	//trunk
	fill(129, 73, 144);
	ellipse(0, 40, 16, 50);
	pop();

	push();
	//right arm
	fill(102, 50, 0);
	translate(-100, 45);
	rotate(75);
	ellipse(109, 40, 7, 50);
	//left arm
	rotate(-150);
	ellipse(75, -37, 7, 50);
	pop();

	push();
	fill(0, 0, 0);
	//right leg
	translate(-100, 45);

	push();
	rotate(25);
	rect(95, 27, 10, 60);
	pop();

	//left leg
	push();
	fill(0, 0, 0);
	rotate(-50);
	rect(95, -15, 10, 60);
	pop();
	pop();
	pop();
}
