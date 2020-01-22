function randomizeArray(numElements){
	canvasWidth = window.innerWidth - Math.floor(window.innerWidth / 10);
	canvasHeight = window.innerHeight - Math.floor(window.innerHeight / 10);
	var width = Math.floor(canvasWidth / numElements);
	var height = Math.floor(canvasHeight / numElements);
	window.elements.length = numElements;
	window.coords.length = numElements;
	var inc = numElements;
	if (canvasHeight % numElements != 0){
		inc = numElements / (canvasHeight % numElements);
	}
	for (var i = 0; i < numElements; i++){
		window.elements[i] = height * (i + 1) + i / inc;
	}
	for (var i = numElements - 1; i > 0; i--){
		var j = Math.floor(Math.random() * (i + 1));
		var temp = window.elements[i];
		window.elements[i] = window.elements[j];
		window.elements[j] = temp;
	}
	for (var i = 0; i < numElements; i++){
		if (width == 1) window.coords[i] = [width * i, canvasHeight - window.elements[i], width];
		else window.coords[i] = [width * i, canvasHeight - window.elements[i], width - 1];
	}
	var x = 0;
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.canvas.width  = width * numElements;
  	ctx.canvas.height = canvasHeight;
	ctx.beginPath();
	ctx.rect(0, 0, canvasWidth, canvasHeight);
	ctx.fillStyle = "black";
	ctx.fill();
	ctx.beginPath();
	ctx.fillStyle = "white";
	for (var i = 0; i < numElements; i++){
		if (width == 1) ctx.rect(x, canvasHeight - window.elements[i], width, window.elements[i]);
		else ctx.rect(x, canvasHeight - window.elements[i], width - 1, window.elements[i]);
		x += width;
	}
	ctx.fill();
}

var sizeSlider = document.getElementById("sizeSlider");
var output = document.getElementById("size");
output.innerHTML = sizeSlider.value * 10;

sizeSlider.oninput = function() {
  	output.innerHTML = this.value * 10;
  	window.numElements = this.value * 10;
  	randomizeArray(this.value * 10);
}

var speedSlider = document.getElementById("speedSlider")

speedSlider.oninput = function() {
	window.delay = Math.pow(1000, (1200 - this.value)/1000);
}

randomizeArray(window.numElements);