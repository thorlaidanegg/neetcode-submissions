func twoSum(numbers []int, target int) []int {

	i:=0
	j:=len(numbers)-1
	ans:= make([]int,2)

	for i<j {

		sum:= numbers[i] + numbers[j]

		if sum < target {
			i++
		}
		if sum > target {
			j--
		}
		if sum == target {
			ans[0] = i+1
			ans[1] = j+1
			break
		}
	}
	return ans
}
