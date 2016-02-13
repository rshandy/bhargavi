// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill
var bg;
var canvas;
var grabtext;
var start;
var startscreen = true;

function setup() {
	
	bg = loadImage("cloudbackground.png");
	canvas = createCanvas(1280, 800);
 	grabtext = loadImage("grabthecupcaketext.png");
 	start = loadImage("start.png");
}

function draw() {
	if(startscreen){
 	background(bg);
    image(grabtext,120, height/4);
    image(start,width/2-100, height/2);
	}
	else{
	background(bg);	
	}
}

function mousePressed() {
var d = dist(mouseX,mouseY,590,422);
if(d<60){
	startscreen = false;
	// var text = 'x='+mouseX.toString()+', y='+mouseY.toString();
	// alert(text);

}

}