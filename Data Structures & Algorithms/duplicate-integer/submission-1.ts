class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {

        const set = new Set<number>()
        for(const n of nums){
            if(set.has(n)){
                return true
            }

            set.add(n)
        }

        return false
    }
}
