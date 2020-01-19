function randomizeArray(numElements, windowSizeX, windowSizeY){
	var width = Math.floor(windowSizeX / numElements);
	var height = Math.floor(windowSizeY / numElements);
	var elements = new Array(numElements);
	var inc = numElements;
	if (windowSizeY % numElements != 0){
		inc = numElements / (windowSizeY % numElements);
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
	ctx.beginPath();
	ctx.rect(0, 0, windowSizeX, windowSizeY);
	ctx.fillStyle = "black";
	ctx.fill();
	ctx.beginPath();
	ctx.fillStyle = "white";
	for (var i = 0; i < numElements; i++){
		ctx.rect(x, 0, width-1, elements[i]);
		x += width;
	}
	ctx.fill();
}
randomizeArray(200, 1500, 750);