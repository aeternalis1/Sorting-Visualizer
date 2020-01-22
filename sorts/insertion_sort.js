async function insertionSort(numElements){
	for (var i = 1; i < numElements; i++){
		await considerBar(i);
		var cur = window.elements[i];
		for (var j = i - 1; j >= 0; j--){
			await considerBar(j);
			if (cur > window.elements[j]){
				break;
			}
			await swapBars(j, j + 1);
		}
	}
	await complete(numElements);
}