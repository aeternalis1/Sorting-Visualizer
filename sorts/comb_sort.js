async function combSort(numElements){
	var factor = 1.3;
	var interval = numElements;
	var sorted = false;
	while (!sorted){
		sorted = true;
		interval = Math.max(1, Math.floor(interval / factor));
		for (var i = 0; i < numElements - interval; i++){
			await considerBar(i);
			await considerBar(i+interval);
			if (window.elements[i] > window.elements[i+interval]){
				await swapBars(i, i+interval);
				sorted = false;
			}
		}
	}
	await complete(numElements);
}