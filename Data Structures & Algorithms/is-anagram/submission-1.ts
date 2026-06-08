class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        

        if(s.length !== t.length) return false

        const r:Record<string,number> = {}

        for(const i of s){
            r[i] = (r[i] || 0 ) + 1
        }

        for(const i of t){
            if(!r[i]) return false

            r[i]--

        }

        return true

    }
}
