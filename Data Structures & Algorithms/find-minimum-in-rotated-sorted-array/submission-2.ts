class Solution {

    findMin(nums: number[]): number {

        let left = 0
        let right = nums.length - 1

        while (left < right) {

            const mid =
                Math.floor((left + right) / 2)

            // minimum is on right side
            if (nums[mid] > nums[right]) {
                left = mid + 1
            }

            // minimum is at mid or left side
            else {
                right = mid
            }
        }

        return nums[left]
    }
}