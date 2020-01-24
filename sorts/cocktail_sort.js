async function cocktailSort(numElements){
	var lastInd = numElements - 1, firstInd = 0;
	while (firstInd < lastInd){
		var nxt = 0;
		for (var j = firstInd; j < lastInd; j++){
			await considerBar(j);
			await considerBar(j+1);
			if (window.elements[j] > window.elements[j+1]){
				await swapBars(j, j+1);
				nxt = j;
			}
		}
		lastInd = nxt;
		if (firstInd >= lastInd) break;
		nxt = numElements - 1;
		for (var j = lastInd; j > firstInd; j--){
			await considerBar(j);
			await considerBar(j-1);
			if (window.elements[j] < window.elements[j-1]){
				await swapBars(j, j-1);
				nxt = j;
			}
		}
		firstInd = nxt;
	}
	await complete(numElements);
}