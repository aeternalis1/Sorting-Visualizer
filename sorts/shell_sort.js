async function shellSort(numElements){
	var intervals = [1];
	var temp = 1;
	while (Math.pow(4,temp)+3*Math.pow(2,temp-1)+1 < numElements){
		intervals.push(Math.pow(4,temp)+3*Math.pow(2,temp-1)+1);
		temp++;
	}
	for (var k = intervals.length - 1; k >= 0; k--){
		var interval = intervals[k];
		console.log(interval);
		for (var i = numElements - 1; i >= numElements - interval; i--){
			var start = i;
			if (i - interval < 0) continue;
			for (var j = i; j >= 0; j -= interval){
				highlight(j,"red");
				start = j;
			}
			await sleep(window.delay);
			for (var j = start; j < numElements; j += interval){
				var cur = window.elements[j];
				for (var l = j - interval; l >= start; l -= interval){
					if (cur > window.elements[l]){
						break;
					}
					await swapBars(l, l + interval);
					highlight(l, "red");
					highlight(l + interval, "red");
				}
			}
			for (var j = i; j >= 0; j -= interval){
				highlight(j,"white");
			}
		}
	}
	await complete(numElements);
}