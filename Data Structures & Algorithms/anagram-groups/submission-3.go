
// sortString sorts the characters of a string alphabetically
func sortString(w string) string {
	s := []rune(w)
	sort.Slice(s, func(i, j int) bool { 
		return s[i] < s[j] 
	})
	return string(s)
}

func groupAnagrams(strs []string) [][]string {
	mapi := make(map[string][]string)
	ans := make([][]string, 0)

	for _, val := range strs {
		sorted := sortString(val)
		mapi[sorted] = append(mapi[sorted], val)
	}

	for _, v := range mapi {
		ans = append(ans, v)
	}

	return ans
}
