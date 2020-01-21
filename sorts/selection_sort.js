async function selectionSort(numElements){
	for (var i = 0; i < numElements; i++){
		await considerBar(i);
		var cur = window.elements[i], ind = i;
		highlight(i, "yellow")
		for (var j = i + 1; j < numElements; j++){
			await considerBar(j);
			if (cur > window.elements[j]){
				cur = window.elements[j];
				highlight(ind, "white");
				ind = j;
				highlight(j, "yellow");
			}
		}
		highlight(ind, "white");
		if (i != ind) await swapBars(i, ind);
		resetCol(i);
		highlight(i, "purple");
	}
}