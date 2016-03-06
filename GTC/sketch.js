// Learning Processing
// Daniel Shiffman
// http://www.learningprocessing.com

// Example 1-1: stroke and fill
var bg, canvas, grabtext, start, back, cupcake, x, y, score, timer, life, lifealive, lifedead;
var startscreen = true;
var gameendscreen = false;
var cupcakearray = [];
var gameover;
var missedcupcakes = 0;

function setup() {

	score=0;
	timer=0;
	life=5;
	bg = loadImage("images/cloudbackground.png");
	canvas = createCanvas(1280, 800);
 	grabtext = loadImage("images/grabthecupcaketext.png");
 	start = loadImage("images/start.png");
 	back = loadImage("images/back.png");
 	cupcake = loadImage("images/cupcake.png");

    lifealive = loadImage("images/lifealive.png");
    lifedead = loadImage("images/lifedead.png");
    gameover=loadImage("images/gameover.png");
    btnreplay=loadImage("images/replay.png")
    btnhome=loadImage("images/homebutton.png")
    btnfacebook=loadImage("images/facebook.png")
}

function draw() {


	background(bg);
	
	if(startscreen){
	//start screen 	
    image(grabtext,130, height/3);
    image(start,width/2-90, height/2+65);
	}
	else if (gameendscreen) {
		image(gameover,250,height/3);
		textSize(32);
		fill(0, 102, 153);
		text("Score: "+score, width/2-100, height/3);
		image(btnhome,width/2-320, height/2+60);	
		image(btnfacebook,width/2-100, height/2+60);
		image(btnreplay,width/2+100, height/2+67);

	}
	else{		
	// game zone
		//console.log("millis - "+millis());
		//console.log("timer - "+timer);
		if(life<1){
			gameendscreen=true;
		}
		image(back,10,10,40,40);		
		//score
		textSize(32);
		fill(0, 102, 153);
		text("Score: "+score, width-250, 50);	
		

		for(var i = 0; i < life; i++){
			image(lifealive,width-300-(i*30),30);
		}
		for (var i = 0; i <cupcakearray.length;i++){		
			tint(255,2*cupcakearray[i][2]);
			image(cupcake,cupcakearray[i][0],cupcakearray[i][1]);
			cupcakearray[i][2] = cupcakearray[i][2]-1;
			if (cupcakearray[i][2]<1){	
				cupcakearray.splice(i,1);
				life = life-1;		
			}
		}


		if (millis()-timer > 600) {
			timer = millis();
			addcupcakes(1);
		}


		for(var i = 0; i < life; i++){
			console.log(life);
			tint(255,255);
			image(lifealive,width-300-(i*30),30);
		}
		// for(var i =0; i < 5-life; i++){
		// 	tint(255,255);
		// 	image(lifedead,width-300-(i*30),60);
		// }

	}
}        

function addcupcakes(n){	
	// x = 100-1100, y = 100 - 700
	for (var i = 0; i <n;i++){
 		x = 100+100*random(11);
 		y = 100+100*random(6);
 		cupcakearray.push([x,y,random(250,300)]);
 	}
}

function mousePressed() {
	var text = 'x='+mouseX.toString()+', y='+mouseY.toString();
	//alert(text);

	// only if game has started
	if (startscreen){
		var d_start = dist(mouseX,mouseY,600,500);
		if(d_start<60){
			startscreen = false;
			score = 0;
			life = 5;
			cupcakearray=[];
			addcupcakes(3);
		}
	}
	// only if game has started
	if (startscreen==false){
		var d_back = dist(mouseX,mouseY,10,10);
		if(d_back<50) {
			startscreen = true;	    
		}
	    //cupcake will dissapper once clicked on it.
	    var d_cupcakeclick ;
	    for (var i = 0; i <cupcakearray.length;i++){
	    	d_cupcakeclick = dist(mouseX,mouseY,cupcakearray[i][0],cupcakearray[i][1]);
	    	if(d_cupcakeclick<80){	
	    	score=score+1;
	    	cupcakearray.splice(i,1);
	    	//console.log('removing');
	    	//console.log(cupcakearray);
	    	}
	    }
	}

	if(gameendscreen){
		var d_home = dist(mouseX,mouseY,width/2-220,height/2+60);
		if(d_home<100){
			startscreen = true;
			gameendscreen = false;	
		}
		var d_replay = dist(mouseX,mouseY,width/2+200,height/2+60);
		if(d_replay<100){
			gameendscreen = false;

			startscreen = false;
			score = 0;
			life = 5;
			cupcakearray=[];
			addcupcakes(3);	

		}
	}
}