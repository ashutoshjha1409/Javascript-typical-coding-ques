/*
    Problem statement:
    Given a sorted array arr[] consisting of N distinct integers and an integer K, the task is to find the index of K, if it’s present in the array arr[]. 
    Otherwise, find the index where K must be inserted to keep the array sorted.

    Examples:
    Input: arr[] = [1, 3, 5, 6], K = 5
    Output: 2
    Explanation: Since 5 is found at index 2 as arr[2] = 5, the output is 2.

    Input: arr[] = [1, 3, 5, 6], K = 2
    Output: 1
    Explanation: Since 2 is not present in the array but can be inserted at index 1 to make the array sorted.

*/

/*
    Time Complexity: O(N)
    Auxiliary Space: O(1)
*/
const searchInsertPositionBF = (arr, k) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === k) return i;
    else if (k < arr[i]) return i;
    else return arr.length;
  }
};
const array1 = [1, 3, 5, 6];
var res = searchInsertPositionBF(array1, 10);

/*
    Optimal approach: Binary Search
    Time Complexity: O(log N)
    Auxiliary Space: O(1)
*/
const searchInsertPosition = (arr, k) => {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === k) return mid;
    else if (arr[mid] < k) start = mid + 1;
    else end = mid - 1;
  }
  return end + 1;
};

const array2 = [1, 3, 5, 6];
var res = searchInsertPosition(array2, 2);
console.log(res);
