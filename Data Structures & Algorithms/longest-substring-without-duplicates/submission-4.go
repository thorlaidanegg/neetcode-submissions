func lengthOfLongestSubstring(s string) int {

	mapi:= make(map[byte]bool)
	i:=0
	j:=0
	ans:=0

	for j<len(s) {

		for mapi[s[j]]{
			mapi[s[i]] = false
			i++
		}
		ans = max(ans, j-i+1)
		mapi[s[j]] = true
		j++
	}
	
	return ans

}