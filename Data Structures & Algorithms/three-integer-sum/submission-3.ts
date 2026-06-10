class Solution {

    threeSum(nums: number[]): number[][] {

        nums.sort((a, b) => a - b)

        const ans: number[][] = []

        for (let i = 0; i < nums.length; i++) {

            // skip duplicate fixed numbers
            if (i > 0 && nums[i] === nums[i - 1]) {
                continue
            }

            const find = 0 - nums[i]

            let s = i + 1
            let e = nums.length - 1

            while (s < e) {

                const temp = nums[s] + nums[e]

                if (temp === find) {

                    ans.push([
                        nums[i],
                        nums[s],
                        nums[e]
                    ])

                    s++
                    e--

                    // skip duplicates
                    while (
                        s < e &&
                        nums[s] === nums[s - 1]
                    ) {
                        s++
                    }

                    while (
                        s < e &&
                        nums[e] === nums[e + 1]
                    ) {
                        e--
                    }
                }

                else if (temp < find) {
                    s++
                }

                else {
                    e--
                }
            }
        }

        return ans
    }
}