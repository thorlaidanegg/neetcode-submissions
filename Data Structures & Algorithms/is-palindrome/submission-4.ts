class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
 function isAlpha(str: string) {
    return /^[a-z0-9]$/i.test(str)
}

        let start = 0;
        let end = s.length - 1;

        s = s.toLowerCase()

        while (start < end) {
            if (!isAlpha(s[end])) {
                end--
                continue
            }
            if (!isAlpha(s[start])) {
                start++
                continue
            }
            if (s[start] !== s[end]) {
                return false;
            }
            start++;
            end--;
        }

        return true;
    }
}
