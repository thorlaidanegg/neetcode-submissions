func maxProfit(prices []int) int {

	ans:= 0 

	s:=0
	e:=1

	for e<len(prices) {

		ans = max(prices[e] - prices[s] ,ans)

		if prices[s] > prices[e] {
			s++
		}else{
			e++
		}

	}
	return ans

}
