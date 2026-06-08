class Solution {    
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {

        const ds = new Map<number,number>()

        for(let i of nums){
            ds.set(i , (ds.get(i) || 0) +1)
        }

        const sorted = [...ds.keys()].sort((a,b)=> ds.get(b) - ds.get(a))


        return sorted.slice(0,k)


    }
}
