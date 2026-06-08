class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    // 1 1 2 8
    // 48 24 6 1
    // 1 2 4 6
    // 48 24 12 8

    productExceptSelf(nums: number[]): number[] {
        let suffix: number[] = [];
        let prefix: number[] = [];
        let ans: number[] = [];

        let prefi: number = 1;
        let sufi: number = 1;

        for (let i = 0; i < nums.length; i++) {
            if (i === 0) {
                prefix.push(1);
            } else {
                prefi = prefi * nums[i - 1];
                prefix.push(prefi);
            }
        }

        for (let i = nums.length - 1; i >= 0; i--) {
            if (i === nums.length - 1) {
                suffix[0] = 1;
            } else {
                sufi = sufi * nums[i + 1];
                suffix.push(sufi)
            }
        }

        suffix.reverse()

        for (let i = 0; i < nums.length; i++) {
            ans.push(suffix[i] * prefix[i]);
        }


        return ans;
    }
}
