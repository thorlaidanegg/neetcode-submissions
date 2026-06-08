class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        const set = new Set()
        let ans = 0;

        for(let i=0;i<nums.length; i++){
            set.add(nums[i])
        }

        for(let i of nums){
            
            if(!set.has(i-1)){
                let j=i;
                let maxi=0;
                while(set.has(j)){
                    maxi++
                    j++
                }
                ans = Math.max(ans,maxi)
            }

        }


        return ans

    }
}
