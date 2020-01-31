async function heapify(N, ind){
	var big = ind, l = ind * 2 + 1, r = ind * 2 + 2;
	if (l < N){
		await considerBar(l);
		await considerBar(big);
		if (window.elements[l] > window.elements[big]){
			big = l;
		}
	}
	if (r < N){
		await considerBar(r);
		await considerBar(big);
		if (window.elements[r] > window.elements[big]){
			big = r;
		}
	}
	if (big != ind){
		await swapBars(big, ind);
		await heapify(N, big);
	}
}

async function heapSort(numElements){
	var i = Math.floor(numElements / 2) - 1;
	var k = numElements - 1;
	while (i >= 0){
		await heapify(numElements, i);
		i--;
	}
	while (k >= 0){
		await swapBars(0, k);
		await heapify(k, 0);
		k--;
	}
	await complete(numElements);
}