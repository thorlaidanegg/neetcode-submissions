class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles: number[], h: number): number {
        
        let start = 0
        let end = Math.max(...piles)
        let ans = Number.MIN_VALUE

        while(start<=end){

            let mid = Math.floor(start + (end - start) /2)

            let hours = 0
            for(let i of piles){
                hours += Math.ceil(i/mid)
            }

            if(hours <= h){
                ans = mid
                end = mid-1
            }else{
                start = mid+1
            }


        }
        return ans
    }
}