async function mergeSort(l, r, numElements){
	if (l >= r) return;

	var mid = Math.floor((r + l) / 2);

	await mergeSort(l, mid, numElements);
	await mergeSort(mid + 1, r, numElements);

	var arr = new Array(r - l + 1);
	var inds = new Array(r - l + 1);
	var inds2 = new Array(r - l + 1);	// current locations
	var inds3 = new Array(r - l + 1);	// ORIGINAL index of element CURRENTLY at [i]

	var i = l, j = mid + 1;
	for (var ind = 0; ind <= r-l; ind++){
		if ((i <= mid && window.elements[i] < window.elements[j]) || j == r + 1){
			arr[ind] = window.elements[i];
			inds[ind] = i-l;	// stores index of value from elements that belongs at ind
			inds2[i-l] = i-l;	// stores CURRENT index of element ORIGINALLY at [i]
			inds3[i-l] = i-l;
			await considerBar(i);
			i++;
		}else{
			arr[ind] = window.elements[j];
			inds[ind] = j-l;
			inds2[j-l] = j-l;
			inds3[j-l] = j-l;
			await considerBar(j);
			j++;
		}
	}

	for (var ind = 0; ind < r-l; ind++){
		if (inds3[ind] == inds[ind]) continue;
		await considerBar(ind + l);
		await considerBar(inds2[inds[ind]]+l);
		await swapBars(ind+l, inds2[inds[ind]]+l);
		inds3[inds2[inds[ind]]] = inds3[ind];
		inds2[inds3[ind]] = inds2[inds[ind]];


		/*while (inds2[ind] != ind){
			await considerBar(ind + l);
			await considerBar(inds2[ind] + l);
			await swapBars(ind + l, inds2[ind] + l);
			var temp = inds2[ind];
			inds2[ind] = inds2[inds2[ind]];
			inds2[temp] = temp;
		}*/
	}

	if (l == 0 && r + 1 == numElements){
		await complete(numElements);
	}
}