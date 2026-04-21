/***************
  1. 좌클릭 = 왼쪽 눈 깜빡임, 우클릭 = 오른쪽 눈 깜빡임
  2. 스페이스바 = 노트북 생성, 위쪽 화살표 = 노트북 열림,기본 , 아래쪽 화살표 = 노트북 닫힘
  3. 왼쪽 화살표 = 노트북 좌로 이동, 오른쪽 화살표 = 노트북 우로 이동
  *****************/

let leftEye = false, rightEye = false;
let leftCount = 0, rightCount = 0; // 0.5초(약 30프레임)를 셀 변수
let laptopX = 200, laptopY = 530, laptopOpen = true, showLaptop = false;

function setup() {
  createCanvas(400, 600);
}

function keyPressed() {
  if (key === 's') {
    saveGif('아텍', 5);
  }
}

function draw() {
  background(225);
  noStroke();

  fill("#FFDCBE");
  ellipse(115, 230, 34, 56);
  ellipse(285, 230, 34, 56);
  fill("#F0C8B4");
  ellipse(115, 235, 18, 30);
  ellipse(285, 235, 18, 30); // 귀
  
  fill("#FFDCBE");
  ellipse(200, 230, 170, 190); //얼굴

  fill("#413228");
  beginShape();
  vertex(110, 192);
  bezierVertex(100, 132, 150, 102, 200, 107);
  bezierVertex(250, 102, 300, 132, 290, 192);
  bezierVertex(295, 207, 270, 217, 250, 212);
  bezierVertex(230, 197, 210, 192, 200, 197);
  bezierVertex(190, 192, 170, 197, 150, 212);
  bezierVertex(130, 217, 105, 207, 110, 192);
  endShape(CLOSE);
  
  fill("#4B3C32");
  ellipse(150, 172, 75, 80);
  ellipse(250, 172, 75, 80);
  ellipse(200, 142, 90, 85);
  
  fill("#37281E");
  beginShape();
  vertex(145, 187);
  bezierVertex(155, 157, 175, 162, 180, 187);
  bezierVertex(190, 162, 200, 162, 200, 187);
  bezierVertex(210, 162, 225, 162, 220, 187);
  bezierVertex(230, 162, 245, 157, 255, 187);
  bezierVertex(235, 230, 165, 212, 145, 187);
  endShape(CLOSE);
  
  stroke(90, 70, 60);
  strokeWeight(2);
  noFill();
  bezier(150, 162, 160, 132, 170, 162, 165, 187);
  bezier(200, 142, 210, 122, 220, 152, 210, 187);
  bezier(250, 162, 260, 132, 270, 162, 255, 187); //머리카락

  noStroke();
  if (leftEye == true) {
    stroke(0); 
    strokeWeight(3); 
    noFill(); 
    arc(160, 235, 30, 15, 0, PI);
    leftCount = leftCount + 1;
    if (leftCount > 30) {
      leftEye = false;
      leftCount = 0;
    }
  } else {
    noStroke();
    fill(255);
    ellipse(160, 230, 48, 32);
    let eyeX = 160 + (mouseX - 200) * 0.05;
    let eyeY = 230 + (mouseY - 300) * 0.03;
    fill(0);
    ellipse(eyeX, eyeY, 18, 18);
    fill(255);
    ellipse(eyeX - 5, eyeY - 5, 6);
  } //왼쪽 눈

  noStroke();
  if (rightEye == true) {
    stroke(0);
    strokeWeight(3);
    noFill();
    arc(240, 235, 30, 15, 0, PI);
    rightCount = rightCount + 1;
    if (rightCount > 30) {
      rightEye = false;
      rightCounte = 0;
    }
  } else {
    noStroke();
    fill(255);
    ellipse(240, 230, 48, 32);
    let eyeX = 240 + (mouseX - 200) * 0.05;
    let eyeY = 230 + (mouseY - 300) * 0.03;
    fill(0);
    ellipse(eyeX, eyeY, 18, 18);
    fill(255); 
    ellipse(eyeX - 5, eyeY - 5, 6);
  } // 오른쪽 눈

  noFill();
  stroke(0);
  strokeWeight(3); 
  rect(125, 205, 65, 55, 25);
  rect(210, 205, 65, 55, 25);
  line(192, 230, 208, 230); // 안경
  
  noStroke();
  fill("#F0C8B4"); 
  triangle(200, 245, 193, 265, 207, 265); //코
  
  stroke(0);
  noFill();
  arc(200, 280, 50, 25, 0, PI); //입

  noStroke();
  fill(210);
  rect(110, 310, 180, 150, 25); // 후드
  
  fill("#1E1E1E"); 
  rect(100, 335, 200, 150, 30);
  fill("#141414");
  rect(180, 335, 40, 150);
  stroke(225);
  strokeWeight(2);
  line(140, 335, 140, 410);
  line(260, 335, 260, 410); 
  
  noStroke();
  fill("#646464");
  ellipse(200, 370, 10, 10);
  ellipse(200, 405, 10, 10);
  ellipse(200, 440, 10, 10); //과잠

  if (showLaptop == true) {
    rectMode(CENTER);
    if (laptopOpen == true) {
      fill(50);
      stroke(150);
      strokeWeight(3);
      rect(laptopX, laptopY - 40, 140, 90, 5); //바디
      fill(30);
      noStroke();
      rect(laptopX, laptopY - 40, 130, 80); //디스플레이
      fill(180);
      stroke(100);
      strokeWeight(1);
      rect(laptopX, laptopY + 10, 140, 15, 2); //키보드
      fill(100); 
      rect(laptopX, laptopY + 12, 30, 8); //터치패드
    } else {
      fill(150);
      stroke(100);
      strokeWeight(2);
      rect(laptopX, laptopY, 140, 15, 5); // 노트북닫힘
    }
    rectMode(CORNER); // 기본으로 돌아오기
  }

  if (keyIsPressed == true) {
    if (keyCode === LEFT_ARROW){
      laptopX = laptopX - 5;
    } //좌로이동
    if (keyCode === RIGHT_ARROW){
      laptopX = laptopX + 5;
    } //우로이동
  }
}
function mousePressed() {
  if (mouseButton === LEFT) {
    leftEye = true;
    leftCount = 0; //왼쪽깜빡임
  }
  if (mouseButton === RIGHT) {
    rightEye = true;
    rightCount = 0; //오른쪽깜빡임
  }
}

function keyPressed() {
  if (key === ' ') {
    showLaptop = true; //노트북 생성
  }
  if (keyCode === UP_ARROW) {
    laptopOpen = true; //노트북 열림
  }
  if (keyCode === DOWN_ARROW) {
    laptopOpen = false; //노트북 닫힘
  }
}

document.oncontextmenu = () => false; // 우클릭 세팅박스 없애는 코드?