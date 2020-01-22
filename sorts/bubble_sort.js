async function bubbleSort(numElements){
	var lastInd = numElements - 1;
	for (var i = 0; i < numElements; i++){
		var nxt = 0;
		for (var j = 0; j < lastInd; j++){
			await considerBar(j);
			await considerBar(j+1);
			if (window.elements[j] > window.elements[j+1]){
				await swapBars(j, j+1);
				nxt = j;
			}
		}
		lastInd = nxt;
	}
	await complete(numElements);
}