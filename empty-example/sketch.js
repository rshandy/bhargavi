// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill
var bg;
var canvas;
var grabtext;
var start;
var startscreen = true;
var back;
function setup() {
	
	bg = loadImage("cloudbackground.png");
	canvas = createCanvas(1280, 800);
 	grabtext = loadImage("grabthecupcaketext.png");
 	start = loadImage("start.png");
 	back = loadImage("back.png");
}

function draw() {
	if(startscreen){
 	background(bg);
    image(grabtext,130, height/3);
    image(start,width/2-90, height/3+25);
	}
	else{
	background(bg);
	image(back,10,10,40,40);
	}
}

function mousePressed() {
	//var text = 'x='+mouseX.toString()+', y='+mouseY.toString();
	//alert(text);
	var d_start = dist(mouseX,mouseY,600,500);
	if(d_start<60){
		startscreen = false;
		// var text = 'x='+mouseX.toString()+', y='+mouseY.toString();
		// alert(text);
	}
	var d_back = dist(mouseX,mouseY,10,10)
	if(d_back<50) {
		startscreen = true;
	}
}