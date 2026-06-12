class Solution {

    maxSlidingWindow(nums: number[], k: number): number[] {

        const deque: number[] = []
        const ans: number[] = []

        for (let i = 0; i < nums.length; i++) {

            // remove indices outside window
            if (deque.length &&
                deque[0] < i - k + 1) {

                deque.shift()
            }

            // maintain decreasing order
            while (
                deque.length &&
                nums[deque[deque.length - 1]] < nums[i]
            ) {
                deque.pop()
            }

            // add current index
            deque.push(i)

            // window formed
            if (i >= k - 1) {
                ans.push(nums[deque[0]])
            }
        }

        return ans
    }
}