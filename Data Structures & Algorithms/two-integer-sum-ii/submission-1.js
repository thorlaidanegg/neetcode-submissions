class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let start = 0;
        let end = numbers.length - 1;

        let ans = []

        while(start < end){

            let sum = numbers[start] + numbers[end]
            
            if(sum === target){
                ans.push(start+1)
                ans.push(end+1)
                return ans
            }

            if(sum < target){
                start++
            }

            if(sum > target){
                end--
            }
        }

        return ans

    }
}
