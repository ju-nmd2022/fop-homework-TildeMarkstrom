resizeCanvas(600,650);
background(149, 187, 114);
//hair
fill(63, 48, 29);
noStroke();
rect(130, 245, 340, 350);

ellipse(300, 250, 340, 390);

//ears
push();
translate(173, 289);
angleMode(DEGREES);
rotate(-10);
fill(255, 185, 145);
ellipse(0, 0, 40, 100);
pop();

push();
translate(427, 289);
angleMode(DEGREES);
rotate(10);
fill(255, 185, 145);
ellipse(0, 0, 40, 100);
pop();

//earrings
fill(255);
ellipse(173, 328, 20);
ellipse(427, 328, 20);

//shirt
fill(152, 117, 84);
rect(130,520, 340, 130);
ellipse(130, 585, 130);
ellipse(470, 585, 130);
rect(65, 585, 75, 65);
rect(470, 585, 65, 65);

//neck
noStroke();
fill(255, 190, 150);
rect(225, 394, 150, 120);
ellipse(300, 514, 130);

//neck-shaping right + left
beginShape();
fill(63, 48, 29);
vertex(225, 394);
bezierVertex(250, 394, 250, 544, 225, 517);
endShape();

beginShape();
vertex(375, 394);
bezierVertex(350, 394, 350, 544, 375, 517);
endShape();

//neck shadow
fill(255, 170, 130);
ellipse(300, 400, 130, 100);

//face
fill(255, 203, 163);
ellipse(300, 250, 280, 350);

//chin-shape
beginShape();
vertex(185, 350);
fill(255, 203, 163);
noStroke();
bezierVertex(185, 350, 228, 440, 300, 440);
bezierVertex(300, 440, 372, 440, 415, 350);
endShape();

//left eye
beginShape();
fill(255);
strokeWeight(1);
stroke(255);
vertex(210, 245);
bezierVertex(210, 225, 260, 225, 270, 245);
bezierVertex(260, 260, 220, 260, 210, 245);
endShape();

fill(30);
stroke(127, 143, 163);
strokeWeight(10);
ellipse(240, 244, 30);

beginShape();
fill(255, 203, 163);
noStroke();
vertex(210, 245);
bezierVertex(210, 225, 260, 225, 270, 245);
bezierVertex(270, 200, 210, 200, 210, 245);
endShape();

beginShape();
fill(255, 203, 163);
noStroke();
vertex(270, 245);
bezierVertex(260, 260, 220, 260, 210, 245);
bezierVertex(210, 290, 210, 280, 270, 275);
endShape();

beginShape();
noFill();
strokeWeight(2);
stroke(0);
vertex(210, 245);
bezierVertex(210, 225, 260, 225, 270, 245);
endShape();

//right eye
beginShape();
fill(255);
strokeWeight(1);
stroke(255);
vertex(390, 245);
bezierVertex(390, 225, 340, 225, 330, 245);
bezierVertex(340, 260, 380, 260, 390, 245);
endShape();

fill(30);
stroke(127, 143, 163);
strokeWeight(10);
ellipse(360, 244, 30);

beginShape();
fill(255, 203, 163);
noStroke();
vertex(390, 245);
bezierVertex(390, 225, 340, 225, 330, 245);
bezierVertex(340, 160, 380, 160, 390, 245);
endShape();

beginShape();
fill(255, 203, 163);
noStroke();
vertex(330, 245);
bezierVertex(340, 265, 390, 255, 390, 245);
bezierVertex(390, 260, 350, 320, 330, 245);
endShape();

beginShape();
noFill();
strokeWeight(2);
stroke(0);
vertex(390, 245);
bezierVertex(390, 225, 340, 225, 330, 245);
endShape();

//eyelashes
beginShape();
vertex(210,244);
bezierVertex(205, 250, 200, 240, 200, 240);
endShape();

beginShape();
vertex(213,238);
bezierVertex(204, 240, 205, 240, 202, 233);
endShape();

beginShape();
vertex(390,244);
bezierVertex(395, 250, 400, 240, 400, 240);
endShape();

beginShape();
vertex(387, 238);
bezierVertex(396, 240, 395, 240, 398, 233);
endShape();

//eyebrows
beginShape();
fill(53, 38, 19);
noStroke();
vertex(273, 213);
bezierVertex(273, 204, 274, 208, 273, 201);
bezierVertex(186, 187, 215, 180, 171, 211);
bezierVertex(198, 202, 205, 200, 273, 213);
endShape();

beginShape();
fill(53, 38, 19);
noStroke();
vertex(327, 213);
bezierVertex(327, 204, 326, 208, 327, 201);
bezierVertex(414, 187, 385, 180, 429, 211);
bezierVertex(402, 202, 395, 200, 327, 213);
endShape();

//hair over face
beginShape();
fill(63, 48, 29);
noStroke();
vertex(250,75);
bezierVertex(350, 150, 430, 300, 450, 270);
bezierVertex(450, 200, 400, 7, 250, 75);
endShape();

beginShape();
fill(63, 48, 29);
vertex(300,75);
bezierVertex(280,150, 200, 200, 160, 240);
bezierVertex(150, 240, 193, 22, 300, 75);
endShape();

//lips
push();
angleMode(RADIANS);
fill(210,153,133);
translate(300, 360);
rotate(PI);
scale(1.2);

beginShape();
vertex(0, -15);
bezierVertex(-20, -15, -30, -10, -40, 0);
bezierVertex(-30, 10, -10, 15, 0 ,10);
bezierVertex(10, 15, 30, 10, 40, 0);
bezierVertex(30, -10, 20, -15, 0, -15);
endShape();
pop();

//tounge
/* beginShape();
fill(255,100,100);
vertex(280, 359);
bezierVertex(280, 355, 320, 355, 320, 359);
bezierVertex(330, 400, 290, 400, 280, 359 );
endShape(); */

//nose
beginShape();
strokeWeight(2);
stroke(255, 185, 144);
noFill();
vertex(287, 320);
bezierVertex(287, 310, 313, 310, 313, 320);
endShape();

beginShape();
vertex(310,250);
bezierVertex(305, 280, 305, 295, 312, 316);
endShape();

beginShape();
vertex(290,250);
bezierVertex(295, 280, 295, 295, 288, 316);
endShape();