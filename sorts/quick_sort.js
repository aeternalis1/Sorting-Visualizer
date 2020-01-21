async function quickSort(l, r, numElements){
	if (l == r){
		resetCol(l);
		highlight(l, "purple");
	}
	if (l >= r) return;
	var pivot = window.elements[l];
	highlight(l, "yellow");
	var ind = r;
	var i = r;
	for (; i > l; i--){
		await considerBar(i);
		if (window.elements[i] > pivot){
			if (i != ind){
				await swapBars(i, ind);
			}
			ind--;
		}
	}
	highlight(l, "white");
	await swapBars(ind, l);
	resetCol(ind);
	highlight(ind, "purple");
	await quickSort(l, ind - 1, numElements);
	await quickSort(ind + 1, r, numElements);
	if (l == 0 && r + 1 == numElements){
		await complete(numElements);
	}
}