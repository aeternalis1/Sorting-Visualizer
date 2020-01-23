function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function paintRect(x, y, w, h, col, ctx){
	ctx.beginPath();
	ctx.rect(x, y, w, h);
	ctx.fillStyle = col;
	ctx.fill();
}

function resetCol(i){
	var cur = window.coords[i];
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	paintRect(cur[0], cur[1] - 10, cur[2], window.elements[i] + 10, "black", ctx);
}

function highlight(i, col){
	var cur = window.coords[i];
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	paintRect(cur[0], cur[1], cur[2], window.elements[i], col, ctx);
}

async function complete(numElements){
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	ctx.beginPath();
	ctx.fillStyle = "green";
	for (var i = 0; i < numElements; i++){
		var cur = window.coords[i];
		ctx.rect(cur[0], cur[1], cur[2], window.elements[i]);
	}
	ctx.fill();
	await sleep(500);
	ctx.beginPath();
	ctx.fillStyle = "white";
	for (var i = 0; i < numElements; i++){
		var cur = window.coords[i];
		ctx.rect(cur[0], cur[1], cur[2], window.elements[i]);
	}
	ctx.fill();
}

async function considerBar(i){
	var cur = window.coords[i];
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	paintRect(cur[0], cur[1], cur[2], window.elements[i], "red", ctx);
	await sleep(window.delay);
	resetCol(i);
	paintRect(cur[0], cur[1], cur[2], window.elements[i], "white", ctx);
}

async function swapBars(i, j){
	var bar1 = window.coords[i];
	var bar2 = window.coords[j];
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	paintRect(bar1[0], bar1[1], bar1[2], window.elements[i], "green", ctx);
	paintRect(bar2[0], bar2[1], bar2[2], window.elements[j], "green", ctx);
	await sleep(window.delay);
	paintRect(bar1[0], bar1[1]-10, bar1[2], window.elements[i]+10, "black", ctx);
	paintRect(bar2[0], bar2[1]-10, bar2[2], window.elements[j]+10, "black", ctx);

	var temp = window.elements[i];
	window.elements[i] = window.elements[j];
	window.elements[j] = temp;

	temp = bar1[1];
	window.coords[i][1] = window.coords[j][1];
	window.coords[j][1] = temp;
	paintRect(bar1[0], bar1[1], bar1[2], window.elements[i], "green", ctx);
	paintRect(bar2[0], bar2[1], bar2[2], window.elements[j], "green", ctx);
	await sleep(window.delay);
	paintRect(bar1[0], bar1[1], bar1[2], window.elements[i], "white", ctx);
	paintRect(bar2[0], bar2[1], bar2[2], window.elements[j], "white", ctx);
}