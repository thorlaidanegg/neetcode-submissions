func threeSum(nums []int) [][]int {
    sort.Ints(nums)

    n := len(nums)
    ans := make([][]int, 0)

    for i := 0; i < n-2; i++ {

        // Skip duplicate first numbers
        if i > 0 && nums[i] == nums[i-1] {
            continue
        }

        s := i + 1
        e := n - 1

        for s < e {
            sum := nums[i] + nums[s] + nums[e]

            if sum == 0 {
                ans = append(ans, []int{
                    nums[i],
                    nums[s],
                    nums[e],
                })

                s++
                e--

                // Skip duplicate left/right values
                for s < e && nums[s] == nums[s-1] {
                    s++
                }

                for s < e && nums[e] == nums[e+1] {
                    e--
                }

            } else if sum < 0 {
                s++
            } else {
                e--
            }
        }
    }

    return ans
}