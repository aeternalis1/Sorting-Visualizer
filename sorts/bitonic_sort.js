async function bitonicMerge(up, l, n, numElements){
	if (n <= 1) return;
	var dist = Math.pow(2,Math.floor(Math.log(n-1)/Math.log(2)));
	for (var i = l; i < l+n-dist; i++){
		await considerBar(i);
		await considerBar(i + dist);
		if ((window.elements[i] > window.elements[i + dist]) == up){
			await swapBars(i, i + dist);
		}
	}
	await bitonicMerge(up, l, dist, numElements);
	await bitonicMerge(up, l+dist, n-dist, numElements);
}


async function bitonicSort(up, l, n, numElements){
	if (n <= 1) return;
	var mid = Math.floor(n/2);
	await bitonicSort(!up, l, mid, numElements);
	await bitonicSort(up, l+mid, n-mid, numElements);
	await bitonicMerge(up, l, n, numElements);
	if (l == 0 && n == numElements){
		await complete(numElements);
	}
}