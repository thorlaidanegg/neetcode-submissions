class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums: number[], k: number): number[] {

        let start = 0
        let end = k-1
        const ans:number[] = []

        while(end<nums.length){

            let max = -Infinity
            for(let i=start;i<=end;i++){
                max = Math.max(max,nums[i])
            }
            ans.push(max)

            start++
            end++
        }
        return ans
    }
}
