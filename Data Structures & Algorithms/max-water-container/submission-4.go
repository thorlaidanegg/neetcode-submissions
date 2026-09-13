func maxArea(heights []int) int {

	n:= len(heights)
	s:=0
	e:=n-1
	ans:=0

	for s<e{
		ans = max(min(heights[s],heights[e]) * (e-s) , ans)
		
		if heights[s] < heights[e] {
			s++
		}else{
			e--
		}
	}


	return ans
}
