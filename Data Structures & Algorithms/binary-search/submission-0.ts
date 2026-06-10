class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {

        let start:number = 0
        let end:number = nums.length -1

        while(start<=end){

            let mid:number = Math.floor(start + (end - start) / 2)

            if(nums[mid] === target){
                return mid
            }
            if(nums[mid] < target){
                start = mid+1
            }
            if(nums[mid] > target){
                end = mid-1
            }
        }
        return -1
    }
}
