/*
    Given a balanced string str of size N with an equal number of L and R, the task is to find a maximum number X, such that a given string can be partitioned into X balanced substring. A string called to be balanced if the number of ‘L’s in the string equals the number of ‘R’s. 

    Input : str = “LRLLRRLRRL” 
    Output : 4 
    Explanation: { “LR”, “LLRR”, “LR”, “RL”} are the possible partitions.
    Input : “LRRRRLLRLLRL” 
    Output : 3 
    Explanation: {“LR”, “RRRLLRLL”, “RL”} are the possible partitions. 

*/

/*
    Time Complexity: O(N) 
    Space Complexity: O(1)
*/
const balancedStringPartiton = (str) => {
    let leftCount = 0;
    let rightCount = 0;
    let balStrCount = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i] === 'L') {
            leftCount++;
        }
        if(str[i] === 'R') {
            rightCount++;
        }
        if(leftCount === rightCount) {
            balStrCount++;
            leftCount = 0;
            rightCount = 0;
        }
    }
    return balStrCount;
}

console.log(balancedStringPartiton('LRLLRRLRRL'));