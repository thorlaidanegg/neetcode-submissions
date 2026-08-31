func twoSum(nums []int, target int) []int {

	mappi := make(map[int]int)

	for indexi,val := range nums {
		mappi[val] = indexi
	}

	for indexi,val := range nums {
		
		findi:= target - val

		indexi2,exists := mappi[findi]

		if indexi == indexi2{
			continue
		}

		if exists{
			return []int{indexi, indexi2}
		}

	}
	return []int{0,0}
}
