class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    getMaxFreq(map: Map<string ,number>): number{
        let maxi = 0
        for(let [elem,count] of map){
            maxi = Math.max(count,maxi)
        }
        return maxi
    }

    characterReplacement(s: string, k: number): number {

        const map = new Map<string,number>()
        let ans:number = 0
        let p1:number = 0
        let p2:number = 0

        while(p2 < s.length){
            
            map.set(s[p2] , (map.get(s[p2]) || 0) + 1)
            const len = p2 - p1 + 1
            const maxFreq = this.getMaxFreq(map)
            if(maxFreq + k >= len){
                p2++
                ans = Math.max(ans,len)
            }else{
                p1++
                p2 = p1
                map.clear()
            }

        }  
        return ans
    }   
}
