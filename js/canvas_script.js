/*
Matt Mallett
Algorithms Simplified
Canvas drawing script
*/

/*
data values to be drawn
change these to change the graph

the text/button inputs will also change this
*/
var data = [3,2,1,4,6,7,5,8];

/*
Size of the white space in between bars
*/
var SPACE_SIZE = 2;

/*
Color of the bars, use either CSS named colors
or hex definitions of colors
*/
var STYLE = 'DarkViolet';

/*
Draws the array data on the canvas element. Bar sizes are dynamically generated
based on the data.
*/
function draw(){
	var canvas = document.getElementById('canvas');
	if(canvas.getContext){
		var ctx = canvas.getContext('2d');
		ctx.fillStyle = STYLE;
		
		var spacing = SPACE_SIZE * data.length + SPACE_SIZE;	
		var barWidth = (canvas.width - spacing)/data.length;
		
		var maxHeight = 0;
		for(var i=0; i<data.length; i++){
			if(data[i] > maxHeight){
				maxHeight = data[i];
			}
		}
		
		for(var i=0; i<data.length; i++){
			var x = i * (barWidth + SPACE_SIZE) + SPACE_SIZE;
			var y = canvas.height;
			var barHeight = (data[i]/maxHeight) * canvas.height * -1;
			ctx.fillRect(x,y,barWidth,barHeight);
		}
	}
}


function buttonClick(){
	var text = document.getElementById("text").value;
	data.length = 0;
	var parsed = text.split(",");
	for(var i = 0; i<parsed.length; i++){
		data[i] = parseInt(parsed[i]);
	}
	var canvas = document.getElementById('canvas');
	if(canvas.getContext){
		canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
	}
	draw();
}
		