class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        const set = new Set<number>()
        nums.forEach((n)=>{
            set.add(n)
        })

        return set.size !== nums.length
    }
}
