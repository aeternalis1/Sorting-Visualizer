function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function paintRect(x, y, w, h, col, ctx){
	ctx.beginPath();
	ctx.rect(x, y, w, h);
	ctx.fillStyle = col;
	ctx.fill();
}

async function considerBar(i){
	var cur = window.coords[i];
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	paintRect(cur[0], cur[1], cur[2], window.elements[i], "red", ctx);
	await sleep(0.1);
	paintRect(cur[0], cur[1], cur[2], window.elements[i], "white", ctx);
}

async function swapBars(i, j){
	var bar1 = window.coords[i];
	var bar2 = window.coords[j];
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	paintRect(bar1[0], bar1[1], bar1[2], window.elements[i], "green", ctx);
	paintRect(bar2[0], bar2[1], bar2[2], window.elements[j], "green", ctx);
	await sleep(0.1);
	paintRect(bar1[0], bar1[1]-10, bar1[2], window.elements[i]+10, "black", ctx);
	paintRect(bar2[0], bar2[1]-10, bar2[2], window.elements[j]+10, "black", ctx);
	var temp = window.elements[i];
	window.elements[i] = window.elements[j];
	window.elements[j] = temp;
	var temp = bar1[1];
	window.coords[i][1] = window.coords[j][1];
	window.coords[j][1] = temp;
	paintRect(bar1[0], bar1[1], bar1[2], window.elements[i], "green", ctx);
	paintRect(bar2[0], bar2[1], bar2[2], window.elements[j], "green", ctx);
	await sleep(0.1);
	paintRect(bar1[0], bar1[1], bar1[2], window.elements[i], "white", ctx);
	paintRect(bar2[0], bar2[1], bar2[2], window.elements[j], "white", ctx);
}