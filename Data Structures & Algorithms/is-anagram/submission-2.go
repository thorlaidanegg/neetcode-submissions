import "unicode/utf8"

func isAnagram(s string, t string) bool {

	map1 := make(map[rune]int)

	if utf8.RuneCountInString(s) != utf8.RuneCountInString(t){
		return false
	}

	for _,val := range s{
		map1[val]++
	}

	for _,val := range t{

		_,exists := map1[val]

		if !exists || map1[val] == 0{
			return false
		}

		map1[val]--

	}
	return true
}
