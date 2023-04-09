/*
  Difficulty Level : Easy
	
	Input: 
	n = 4, arr1[] = [1 3 5 7] 
	m = 5, arr2[] = [0 2 6 8 9]
	Output: 
	arr1[] = [0 1 2 3]
	arr2[] = [5 6 7 8 9]
	Explanation:
	After merging the two 
	non-decreasing arrays, we get, 
	0 1 2 3 5 6 7 8 9.

*/
// let array1 = [1, 3, 5, 7];
// let array2 = [0, 2, 6, 8, 9];
let array1 = [5, 7, 12];
let array2 = [2, 8, 11, 14];
const mergeSortedArrays = (arr1, arr2, n, m) => {
	let mergedArray = [];
	let i = 0, j = 0; k = 0;
	while ( i < n && j < m) {
		if (arr1[i] < arr2[j]) {
			mergedArray[k++] = arr1[i++];
		} else {
			mergedArray[k++] = arr2[j++];
		}
	}

	while (i < n){
		mergedArray[k++] = arr1[i++];
	}

	while (j < m){
		mergedArray[k++] = arr2[j++];
	}
	
	console.log(mergedArray);
}
/*
Time Complexity : O(n1 + n2) 
Auxiliary Space : O(n1 + n2)
*/
mergeSortedArrays(array1, array2, 3, 4);
 