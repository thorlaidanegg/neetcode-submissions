class Solution {

    search(nums: number[], target: number): number {

        let start = 0
        let end = nums.length - 1

        while (start <= end) {

            const mid =
                Math.floor(start + (end - start) / 2)

            if (nums[mid] === target) {
                return mid
            }

            // LEFT HALF SORTED
            if (nums[start] <= nums[mid]) {

                // target inside left half
                if (
                    target >= nums[start] &&
                    target < nums[mid]
                ) {
                    end = mid - 1
                }

                else {
                    start = mid + 1
                }
            }

            // RIGHT HALF SORTED
            else {

                // target inside right half
                if (
                    target > nums[mid] &&
                    target <= nums[end]
                ) {
                    start = mid + 1
                }

                else {
                    end = mid - 1
                }
            }
        }

        return -1
    }
}