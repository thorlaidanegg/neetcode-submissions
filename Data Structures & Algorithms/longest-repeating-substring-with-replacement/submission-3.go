func characterReplacement(s string, k int) int {

	ans:=0
	i:=0
	maxFreq:=0
	mapi:=make(map[byte]int)

	for j:=0 ; j<len(s) ; j++ {

		mapi[s[j]]++
		maxFreq = max(maxFreq , mapi[s[j]])
		
		for (j-i+1) - maxFreq>k {
			mapi[s[i]]--
			i++
		}
		ans = max(ans,j-i+1)

	}

	return ans 
}
