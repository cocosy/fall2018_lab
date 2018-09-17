
var sceneState = {
	CIRCLE:0,
	RECT:1,
	IMAGE: 2,
};

var keyOn = false;
var currentState = 0;
var size;
var b;
var time;


//settings
var myColor = '#eeeeff';
var radius = 10;
var shape = ['Here','is','your','morning','Banana','pancake','ERASE'];
var label ='heyyy';
var roundness = 10;
var drawStroke = true;
var pattern1;
var pattern2;
var pattern3;
var pattern4;





var ball;
var x1 = 0;
var y1 = 0;
var speedx = 4;
var speedy = 8;
var radiusB2 = 50;
var barx = 0;


var gui;

function preload() {
	pattern1 = loadImage("assets/maruko02.png");
	pattern2 = loadImage("assets/donut.png");
    pattern3 = loadImage("assets/donut02.png");
    pattern4 = createImg('assets/tubbie.gif');

}


function setup() {
	pattern4.hide();
	createCanvas(1000,800);
	ball = new Ball();
  gui = createGui('p5.gui');
  gui.addGlobals('shape','myColor','radius','label','roundness','drawStroke');

   
	// CreateScenesFromData(card);
}


function draw() {
	setUpScene(currentState);
	drawScene(currentState);
	checkTransition(currentState);
	
}

function drawScene(whichScene) {
	switch (currentState) {
		case sceneState.CIRCLE:
		time = millis();
		b = myColor;
		background(b);
		fill(0);
		if(time < 5000){
	    textSize(20);
		text("Choose the Backgroud Color then press any KEY to start",mouseX,mouseY);
		}
		console.log(time);

			break;

		case sceneState.RECT:

		fill(myColor);
		if(drawStroke){
			stroke(0);
		}else{
			noStroke();
		}
		switch(shape){
			case 'Here':
			if(mouseIsPressed){
		    rectMode(CENTER);
		    rect(mouseX,mouseY,radius,radius,map(roundness,0,100,0,70));}
		    break;

		  case 'is':
		    rectMode(CENTER);
		    rect(mouseX+sin(frameCount)*radius,mouseY+cos(frameCount)*radius,radius,radius,map(roundness,0,100,0,70));
		    break;

		  case 'your':
		  	if(size+mouseX<width){size+=2;
			}else{
				size=1;
			}
				  if(mouseIsPressed){

		  fill(myColor);
		  	textSize(map(radius, 0, 100, 5,40));
		    text(label,mouseX+size,mouseY+size);}
		    // triangle(mouseX,mouseY,mouseX+10,mouseY+10,mouseX-30,mouseY-50);
		    break;
		   case 'ERASE':

		  if(mouseIsPressed){
		  	fill(b);
		  	noStroke();
		  	 rect(mouseX,mouseY,radius,radius);}
		    // triangle(mouseX,mouseY,mouseX+10,mouseY+10,mouseX-30,mouseY-50);
		    break;
		       case 'Banana':
			 if(mouseIsPressed){
			 	pattern4.show();
			 // image(pattern1,width-mouseX,height-mouseY,map(radius,0,100,70,200),map(radius,0,100,70,200));
			  pattern4.position(mouseX,mouseY);
			}
	
		    // triangle(mouseX,mouseY,mouseX+10,mouseY+10,mouseX-30,mouseY-50);
		    break;
		     case 'morning':
		  	fill(myColor);
			 ball.update();
			 ball.display();
	
		    // triangle(mouseX,mouseY,mouseX+10,mouseY+10,mouseX-30,mouseY-50);
		    break;
		       case 'pancake':
		  	fill(myColor);
			 if(mouseIsPressed){
			 image(pattern3,mouseX-width/2,mouseY-height/2,map(radius,0,100,30,300),map(radius,0,100,50,300));
			 image(pattern2,width/2-mouseX,height/2-mouseY,map(radius,0,100,300,50),map(radius,0,100,300,50));
			}
	
		    // triangle(mouseX,mouseY,mouseX+10,mouseY+10,mouseX-30,mouseY-50);
		    break;


		}
	

			break;
		case sceneState.IMAGE:
			// fill(myColor);
			// if(mouseIsPressed){
			// image(pattern1,width-mouseX,height-mouseY,30,50);}
	
		

		
			break;
			default:
			break;
			}
		}
	

	function checkTransition(whichScene) {
		switch (whichScene) {
			case sceneState.CIRCLE:
			if(keyOn){
				currentState++;
			}
							break;
			case sceneState.RECT:
			
				break;
				case sceneState.IMAGE:


				break;
			default:
				break;
		}
	}

	function setUpScene(whichScene) {
		switch (whichScene) {
			case sceneState.CIRCLE:
		
			
				break;
			case sceneState.RECT:

				break;
			case sceneState.IMAGE:
				// tutorialTimer = millis();
				break;
			default:
				break;
		}
	}


 function keyPressed(){
// 	if(mouseX>370 && mouseX<420 && mouseY>450 && mouseY<555){
// 		window.open("https://cocosy.github.io/code2_spring2018/kscope_test/index.html"); 

// 	}else if(mouseX>580 && mouseX<630 && mouseY>450 && mouseY<555){
if(currentState ==0){currentState +=1;}
// 	}
}

function mouseDragged(){
 // size = size +5;
}

function Ball(){


   x1 = random(1,width-1);
	y1 = random(1,200);

	this.update = function () {
			x1 = x1 + speedx;
			y1 = y1 + speedy;
			if(x1>width || x1<0){
		speedx = -1*speedx;
	}
	if(y1>height || y1<0){
		speedy = -1*speedy;
	}
if(dist(x1,y1,width/2,height/2)<=radiusB2){
		speedx = -1*speedx;
		speedy = -1*speedy;}

}

	this.display = function () {

		// background(212,21,123);
	fill(myColor);
	ellipse(x1, y1, 20, 20);
	ellipse(width/2,height/2,2*radiusB2,2*radiusB2);
	
	}

	
}
//------------------------------------------
// function keyPressed() {
// 	keyOn = true;
  
//  // if (key === 'A') {
//  //   }
// if (key === ' ') {
//   	currentState = 0;
//   }
//  }

// function keyReleased(){
// keyOn = false;

//  }

//  function mousePressed(){
//  cardOn = true;
//  	// currentState += 1;
// }


