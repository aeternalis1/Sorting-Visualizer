async function merge(l, mid, r, numElements){
	if (l >= r) return;

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
	}
}

async function timSort(numElements){
	var stack = [1];
	var len = 1;
	for (var i = 1; i < numElements; i++){
		await considerBar(i);
		if (window.elements[i] >= window.elements[i-1]){
			stack[len-1]++;
		}else{
			stack.push(1);
			len++;
		}
		while (len >= 3){
			var x = stack[len-1];
			var y = stack[len-2];
			var z = stack[len-3];
			if (z <= x+y || y <= x){
				if (z < x){
					stack[len-3] = z + y;
					await merge(i-x-y-z+1, i-x-y, i-x, numElements);
				}else{
					stack[len-2] = y + x;
					await merge(i-x-y+1, i-x, i, numElements);
				}
				stack.pop();
				len--;
			}else{
				break;
			}
		}
		while (len >= 2){
			var x = stack[len-1];
			var y = stack[len-2];
			if (y <= x){
				stack[len-2] = y + x;
				await merge(i-x-y+1, i-x, i, numElements);
				stack.pop();
				len--;
			}else{
				break;
			}
		}
	}
	var ind = numElements - stack[len-1] - 1;
	for (var i = len-2; i >= 0; i--){
		await merge(ind - stack[i] + 1, ind, numElements-1, numElements);
		ind -= stack[i];
	}
	await complete(numElements);
}