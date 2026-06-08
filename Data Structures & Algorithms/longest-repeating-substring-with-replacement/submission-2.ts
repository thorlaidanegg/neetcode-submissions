class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        const map = new Map<string, number>();
        let p1 = 0;
        let p2 = 0;
        let maxFreq = 0
        let ans = 0;

        while (p2 < s.length) {
            map.set(s[p2], (map.get(s[p2]) || 0) + 1);

            let length = p2 - p1 + 1
            maxFreq = Math.max(map.get(s[p2]),maxFreq)

            while(maxFreq + k < length){
                map.set(s[p1] , map.get(s[p1])-1)
                p1++
                length = p2-p1+1
            }

            p2++

            ans = Math.max(ans,length)
        }
        return ans;
    }
}
