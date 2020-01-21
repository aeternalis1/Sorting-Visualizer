async function quickSort2(l, r, numElements){
	if (l == r){
		resetCol(l);
		highlight(l, "purple");
	}
	if (l >= r) return;
	var pivot = window.elements[l];
	highlight(l, "yellow");
	var j = r;
	var i = l + 1;
	while (i < j){
		while (window.elements[i] < pivot && i < j){
			await considerBar(i);
			i++;
		}
		while (window.elements[j] > pivot && i < j){
			await considerBar(j);
			j--;
		}
		if (i < j){
			await swapBars(i,j);
			i++;
			j--;
		}
	}
	highlight(l, "white");
	if (window.elements[i] > pivot) i--;
	await swapBars(i, l);
	resetCol(i);
	highlight(i, "purple");
	await quickSort2(l, i - 1, numElements);
	await quickSort2(i + 1, r, numElements);
	if (l == 0 && r + 1 == numElements){
		await complete(numElements);
	}
}