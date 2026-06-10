class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        let p1: number = 0;
        let p2: number = 1;
        let ans: number = 0;

        while (p2 < prices.length) {
            ans = Math.max(ans, prices[p2] - prices[p1]);
            if (prices[p1] > prices[p2]) {
                p1++;
            } else {
                p2++;
            }
        }
        return ans;
    }
}
