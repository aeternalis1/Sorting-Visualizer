function randomizeArray(numElements){
	canvasWidth = window.innerWidth - Math.floor(window.innerWidth / 10);
	canvasHeight = window.innerHeight - Math.floor(window.innerHeight / 10);
	var width = Math.floor(canvasWidth / numElements);
	var height = Math.floor(canvasHeight / numElements);
	var elements = new Array(numElements);
	var inc = numElements;
	if (canvasHeight % numElements != 0){
		inc = numElements / (canvasHeight % numElements);
	}
	for (var i = 0; i < numElements; i++){
		elements[i] = height * (i + 1) + i / inc;
	}
	for (var i = numElements - 1; i > 0; i--){
		var j = Math.floor(Math.random() * (i + 1));
		var temp = elements[i];
		elements[i] = elements[j];
		elements[j] = temp;
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
		ctx.rect(x, canvasHeight - elements[i], width-1, elements[i]);
		x += width;
	}
	ctx.fill();
}