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
var red;
var x,y;
var i =0;


function setup() {
	
	bg = loadImage("cloudbackground.png");
	canvas = createCanvas(1280, 800);
 	grabtext = loadImage("grabthecupcaketext.png");
 	start = loadImage("start.png");
 	back = loadImage("back.png");
 	red = loadImage("red.png");
 	i=i+5;
 	x = random(0,width);
 	y = random(0,height);
}

function draw() {
	i=i+10;
	console.log(i);
	if(startscreen){
 	background(bg);
    image(grabtext,130, height/3);
    image(start,width/2-90, height/3+25);
	}
	else{
	background(bg);
	image(back,10,10,40,40);
	showcupcake(x,y);

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
function showcupcake(x,y) {
	// body...
    image(red,x,y);
}