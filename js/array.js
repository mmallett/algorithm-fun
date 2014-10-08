var array = {};

(function(exports){

	// size of white space between bars
	var SPACE_SIZE = 2;

	// colors of bars
	// can use css named colors or hex value
	var INACTIVE_COLOR = 'DarkGrey';
	var ACTIVE_COLOR = 'DarkViolet';

	// array to sort
	var data;

	// graphics drawing context
	var canvas;
	var graphics;
	var barWidth;
	var maxHeight;

	var swapped;

	exports.init = function(inData, canvasId){
		data = inData;
		
		// get drawing context
		canvas = document.getElementById(canvasId);
		graphics = canvas.getContext('2d');

		// calculate bar width
		var spacing = SPACE_SIZE * data.length + SPACE_SIZE;
		barWidth = (canvas.width - spacing)/data.length;

		// determine maximum bar height
		maxHeight = 0;
		for(var i=0; i<data.length; i++){
			maxHeight = (data[i] > maxHeight) ? data[i] : maxHeight;
		}

		swapped = [];

		draw();
	}

	exports.get = function(x){
		return data[x];
	}

	exports.length = function(){
		return data.length;
	}

	exports.swap = function(x, y){
		var tmp = data[x];
		data[x] = data[y];
		data[y] = tmp;
		swapped[0] = x;
		swapped[1] = y;
		draw();
	}

	function draw(){

		for(var i=0; i<data.length; i++){

			if(swapped){
				if(swapped[0] == i || swapped[1] == i){
					context.fillStyle = ACTIVE_COLOR;
				}
			}
			else{
				context.fillStyle = INACTIVE_COLOR;
			}


			var x = i * (barWidth + SPACE_SIZE) + SPACE_SIZE;
			var y = canvas.height;
			var barHeight = (data[i]/maxHeight) * canvas.height - 1;

			graphics.fillRect(x,y,barWidth, barHeight);
		}

	}



})(array);