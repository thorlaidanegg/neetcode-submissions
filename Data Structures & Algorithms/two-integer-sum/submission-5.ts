class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {

        const map = new Map<number , number>()

        for(let i:number=0; i< nums.length; i++){

            const sol = target - nums[i]

            if(map.has(sol)){
                return [i , map.get(sol)]
            }

            map.set(nums[i],i)

        }

        return []

    }
}
