canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

car_width=100;
car_height=150;
car_x=500;
car_y=400;
car_image="car2.png";


background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//Set initial position for a car image.

function add() {
	background_image_tag=new Image();
    background_image_tag.onload=uploadBackground;
    background_image_tag.src=background_image;

greencar_image_tag=new Image();
greencar_image_tag.onload=uploadgreencar;
greencar_image_tag.src=greencar_image;
}


function uploadBackground() {
ctx.drawImage(background_image_tag,0,0,canvas.width,canvas.height);

}

function uploadgreencar() {
	ctx.drawImage(greencar_image_tag,car_x,car_y,car_width,car_height);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
if(car_y>=0)
{
	car_y=car_y-10;
	uploadgreencar();
	uploadBackground();
}
}

function down()
{
	if(car_y<=350)
	{
		car_y=car_y+10;
		uploadgreencar();
		uploadBackground();
	}
}

function left()
{
	if(car_x>=0)
	{
		car_x=car_x-10;
		uploadgreencar();
		uploadBackground();
	}
}

function right()
{
	if(car_x<=750)
	{
		car_x=car_x+10;
		uploadgreencar();
		uploadBackground();
	}
}
