async function oddEvenSort(numElements){
	var sorted = false;
	while (!sorted){
		sorted = true;
		for (var j = 0; j < numElements - 1; j += 2){
			await considerBar(j);
			await considerBar(j+1);
			if (window.elements[j] > window.elements[j+1]){
				await swapBars(j, j+1);
				sorted = false;
			}
		}
		for (var j = 1; j < numElements - 1; j += 2){
			await considerBar(j);
			await considerBar(j+1);
			if (window.elements[j] > window.elements[j+1]){
				await swapBars(j, j+1);
				sorted = false;
			}
		}
	}
	await complete(numElements);
}