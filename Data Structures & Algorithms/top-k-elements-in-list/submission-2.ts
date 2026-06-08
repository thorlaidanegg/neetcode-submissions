class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const ans: number[] = [];
        const map = new Map<number, number>();

        for (let i of nums) {
            map.set(i, (map.get(i) || 0) + 1);
        }

        const bucket:number[][] = Array(nums.length + 1).fill(0).map(()=>[])


        for(const [k,v] of map){
            bucket[v].push(k)
        }

        for(let i=bucket.length-1; i>=0; i--)
        {
            for(let j of bucket[i]){
                ans.push(j)

                if(ans.length === k)
                {
                    return ans
                }
            }
        }

        return ans
    }
}
