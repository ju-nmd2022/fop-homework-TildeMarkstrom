background(255);

//face
push();
translate(300, 300);
scale(1.1);

strokeWeight(5);
stroke(255,170,52);
fill(255, 190, 12);
ellipse(0, 0, 400 ,400);

noStroke();
fill(255, 222, 52);
ellipse(0, -10, 380, 380);

pop();

angleMode(DEGREES);

//corners of sunglasses left

push();
translate(130, 225);
rotate(10);

strokeWeight(10);
stroke(0);
fill(0);
rect(0, 0, 50, 20, 10);
pop();

push();
translate(425, 235);
rotate(-10);

//corners of sunglasses right
strokeWeight(10);
stroke(0);
fill(0);
rect(0, 0, 50, 20, 10);
pop();


//middle part of glasses
strokeWeight(5);
stroke(0);
fill(0);
rect(275, 237, 50, 20);

//glasses left eye
strokeWeight(10);
stroke(0);
fill(30);
rect(150, 230, 130, 80, 20);

//glasses right eye
rect(320, 230, 130, 80, 20);

//mouth white part
beginShape();
fill(255);
strokeWeight(2);
vertex(200, 400);
bezierVertex(200, 400, 300, 500, 400, 400);
endShape();

//mouth yellow part
beginShape();
fill(255, 222, 52);
strokeWeight(2);
vertex(200, 400);
bezierVertex(200, 400, 300, 450, 400, 400);
endShape();

//shiny teeth
beginShape();
fill(255);
strokeWeight(2);
stroke(0);
vertex(370, 410);
bezierVertex(370, 410, 390, 400, 390, 380);
bezierVertex(390, 380, 390, 400, 410, 410);
bezierVertex(410, 410, 390, 420, 390, 440);
bezierVertex(390, 440, 390, 420, 370, 410);
endShape();
